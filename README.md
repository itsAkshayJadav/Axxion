This is a [Next.js](https://nextjs.org) project with a contact form that sends submitted inquiries to an email address.

## Email setup

1. Copy `.env.example` to `.env.local`.
2. Set your SMTP server details.
3. Set `INQUIRY_TO_EMAIL` to the email address that should receive form submissions.
4. Optionally set `INQUIRY_FROM_EMAIL` if your mail provider requires a specific sender address.

Example configuration:

```bash
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
INQUIRY_TO_EMAIL=hello@example.com
INQUIRY_FROM_EMAIL=hello@example.com
```

When the form is submitted, `src/app/api/contact/route.js` sends an email with the name, email address, and project details. The submitter's email is added as `Reply-To` so you can respond directly from your inbox.

## Getting started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
