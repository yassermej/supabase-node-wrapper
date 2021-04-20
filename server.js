require('dotenv').config()
const { createClient } = require('@supabase/supabase-js')
const express = require('express')
const cors = require('cors')
const app = express()
const authentication = require('./middleware/authentication')
const {
  SUPABASE_URL,
  SUPABASE_KEY,
  STATUS_BAD_GATEWAY,
  STATUS_INTERNAL_SERVER_ERROR,
  API_PORT,
} = require('./constants/constants')

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

app.use(express.json())
app.use(
  cors({
    origin: process.env.ORIGIN,
  })
)

app.get(
  '/newsfeed',
  authentication.authenticateAccessToken,
  async (req, res) => {
    const uuid = req.query.uuid
    if (!uuid) {
      res.sendStatus(STATUS_BAD_GATEWAY)
    }
    const { data: newsfeed, error } = await supabase
      .from('newsfeed')
      .select('*')
      .eq('uuid', uuid)
    if (error) {
      res.json({
        message: error,
        status: STATUS_INTERNAL_SERVER_ERROR,
      })
    }
    res.json(newsfeed)
  }
)

app.listen(API_PORT, () => {
  console.log(`started API server on port: ${API_PORT}`)
})
