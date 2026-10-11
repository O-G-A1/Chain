# Onchain Help Center

## Run locally

1. Install Node.js 18 or newer.
2. Run `npm install`.
3. Copy `.env.example` to `.env` and enter the SMTP host, port, credentials,
   sender address, and support inbox for your mail provider. Use an
   app-specific SMTP password where the provider supports it. Do not commit
   `.env` or put SMTP credentials in browser code.
4. Set those values in your hosting provider's environment-variable settings
   for production.
5. Run `npm start` and open `http://localhost:3000`.

## Deploy on Vercel

The `/api/support` endpoint is exposed as a Vercel Node.js function in
`api/support.js`. In the Vercel project connected to this repository, add
`SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `FROM_EMAIL`,
and `SUPPORT_EMAIL` under **Settings > Environment Variables**. Add them to
both Preview and Production environments as needed, then redeploy. Do not put
SMTP credentials in GitHub files or browser code.

The server sends support email through SMTP. Port 587 normally uses
`SMTP_SECURE=false` (STARTTLS); port 465 normally uses `SMTP_SECURE=true`.
The mail is sent to `SUPPORT_EMAIL`, with the submitter's address set as
`Reply-To` when the email tab is selected. The support form has three tabs:
email plus description, public wallet name plus description, or issue type plus
description. Only the fields from the selected tab are submitted. Do not enter
wallet passwords, recovery phrases, private keys, or other wallet credentials.

`npm test` runs the support API tests with a fake mailer and does not send email.
