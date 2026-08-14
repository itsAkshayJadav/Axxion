# Axxion

Axxion is a [Next.js](https://nextjs.org) marketing site with a contact form, admin shell, SEO metadata, and shared Supabase quote-submission integration.

## Setup

1. Copy `.env.example` to `.env.local`.
2. Fill in the Supabase submission variables.
3. Set `ADMIN_PANEL_KEY` if you want to protect `/admin`.
4. If the shared Supabase Edge Function uses a site allowlist, add the same value used by `VITE_SITE_NAME`.

```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_SITE_NAME=axxionstudio
VITE_SUPABASE_SUBMIT_QUOTE_FUNCTION=submit-quote
ADMIN_PANEL_KEY=replace-with-a-private-admin-key
NEXT_PUBLIC_SITE_URL=https://axxionstudio.com
```

## Notes

- Contact form submissions are sent through the configured Supabase Edge Function.
- `/admin` checks the `ADMIN_PANEL_KEY` value before loading inquiries.
- Inquiry reading still needs a server-side Supabase reader before the admin inbox can show submitted records.

## Development

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
