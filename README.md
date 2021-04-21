A simple NodeJS server that serves as an API gateway to the Supabase REST API and its resources

## Prequisites

Copy the `env.example` over then fill out the values of each key.

```bash
cp -p .env.example .env
```

## Generating your secret keys

Access the `node` repl environment then generate the token with Crypto.

```javascript
> require('crypto').randomBytes(64).toString('hex')
<your_secret_token_here>
```

Then paste them to `.env` file

```bash
ACCESS_TOKEN_SECRET=<your_access_token_secret>
REFRESH_TOKEN_SECRET=<your_refresh_token_secret>
```

## Supabase keys

You need an account with Supabase. From your settings page you can obtain the URL and key. [Read their docs](https://supabase.io/docs/guides/api#getting-started) for more info.

```bash
SUPABASE_URL=
SUPABASE_KEY=
```

## Running the app

Install dependencies then just run start

```node
yarn && yarn start
```

## Formatting

```node
yarn prettier
```

## Tests

**WIP:** Normally I'd follow TDD with this project but this time it's an exception.
