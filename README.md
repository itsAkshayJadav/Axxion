# Axxion

This is a [Next.js](https://nextjs.org) website with a contact form that stores inquiries in Supabase, emails new submissions to the team, and exposes inquiries through a protected admin panel.

## Setup

1. Copy `.env.example` to `.env.local`.
2. Create a Supabase project and run `supabase/migrations/20260621000000_create_inquiries.sql` in its SQL editor (or apply it with the Supabase CLI).
3. Copy the project URL and service-role key into `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`.
4. Set `ADMIN_PANEL_KEY` to a long, private value.
5. Add the SMTP settings used to deliver inquiry notifications.

```bash
NEXT_PUBLIC_SITE_URL=https://axxionstudio.com
ADMIN_PANEL_KEY=choose-a-secure-admin-key

SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key

SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
INQUIRY_FROM_EMAIL=enquiry@axxionstudio.com
```

`SUPABASE_SERVICE_ROLE_KEY` is used only by server routes. Never prefix it with `NEXT_PUBLIC_` or expose it to browser code.

## Inquiry flow

- All public contact CTAs lead to the required inquiry form; the site never opens the customer's email app.
- `POST /api/contact` validates the form, stores it in the Supabase `inquiries` table, and sends the SMTP notification to `enquiry@axxionstudio.com`.
- Supabase stores the submission; configure the SMTP variables above for notification delivery (or replace SMTP later with a Supabase Edge Function/webhook).
- The protected admin route reads the same Supabase inquiry rows.
- The migration enables row-level security without public policies. Server routes use the private service-role client.

The former MongoDB/Mongoose and OneDrive/CSV inquiry storage code has been removed.

## Getting started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The admin panel is available at [http://localhost:3000/admin](http://localhost:3000/admin).
