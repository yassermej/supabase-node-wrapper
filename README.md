A simple NodeJS server that serves as an API gateway to the Supabase REST API and its resources

## Prequisites

Copy the `env.example` over then fill out the values of each key.

```bash
cp -p .env.example .env
```

## Generating your secret keys

To generate the values of the `ACCESS_TOKEN_SECRET` and `REFRESH_TOKEN_SECRET` secret keys, either use a really long password of your choice or generate one from [1Password](https://1password.com/password-generator/) or [Lastpass](https://www.lastpass.com/password-generator). Generally the tokens should be standard HSA 256 encryption for the signature to be at least be 32 characters long. When you created them just paste the values in your `.env` file.

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
