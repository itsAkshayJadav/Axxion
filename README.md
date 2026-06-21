This is a [Next.js](https://nextjs.org) project with a contact form that forwards submissions into the shared Supabase `submit-quote` Edge Function used by the YesGroutAndSillicone site.

## Setup

1. Copy `.env.example` to `.env.local`.
2. Set the four Supabase variables shown below.
3. Make sure the shared Supabase Edge Function allowlist includes the Axxion site name.
4. Insert an Axxion client row in the shared Supabase database if it does not already exist.

Example configuration:

```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_SITE_NAME=axxionstudio
VITE_SUPABASE_SUBMIT_QUOTE_FUNCTION=submit-quote
```

Database setup:

```sql
insert into public.clients (site_name, display_name, quote_from_email, quote_to_email)
values (
   'axxionstudio',
   'Axxion',
   'Website <hello@your-domain.com>',
   'hello@your-domain.com'
)
on conflict (site_name)
do update set
   display_name = excluded.display_name,
   quote_from_email = excluded.quote_from_email,
   quote_to_email = excluded.quote_to_email,
   is_active = true;

insert into public.client_email_templates (
   client_id,
   template_key,
   subject_template,
   text_template,
   html_template,
   is_active
)
select
   c.id,
   'quote_request',
   '[{{siteName}}] New project brief - {{name}}',
   E'Site: {{siteName}}\nFull name: {{name}}\nCompany name: {{suburb}}\nEmail: {{email}}\nPhone: {{phone}}\n\nProject details:\n{{message}}',
   '<h2>New project brief</h2><p><strong>Site:</strong> {{siteName}}</p><p><strong>Full name:</strong> {{name}}</p><p><strong>Company name:</strong> {{suburb}}</p><p><strong>Email:</strong> {{email}}</p><p><strong>Phone:</strong> {{phone}}</p><p><strong>Project details:</strong></p><pre style="white-space:pre-wrap;font-family:inherit;">{{message}}</pre>',
   true
from public.clients c
where c.site_name = 'axxionstudio'
on conflict (client_id, template_key)
do update set
   subject_template = excluded.subject_template,
   text_template = excluded.text_template,
   html_template = excluded.html_template,
   is_active = true;
```

Runtime behavior:

- `src/lib/inquiryStore.js` now maps Axxion inquiries onto the shared `quote_requests` shape used by the Supabase migrations.
- Address-related fields from that schema are left empty for Axxion submissions.
- `src/app/api/admin/inquiries/route.js` cannot read `quote_requests` with the current four-variable setup because the shared table is service-role only in the Supabase migrations.
- If the shared Edge Function uses `SITE_NAME_ALLOWLIST`, add the same value you set in `VITE_SITE_NAME`.

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