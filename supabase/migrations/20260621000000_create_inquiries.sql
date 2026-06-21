create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  company_name text not null,
  email text not null,
  country_code text not null,
  contact_number text not null,
  project_details text not null,
  created_at timestamptz not null default now()
);

create index if not exists inquiries_created_at_idx
  on public.inquiries (created_at desc);

alter table public.inquiries enable row level security;

-- No public policies are created. The app accesses this table only from its
-- server routes with SUPABASE_SERVICE_ROLE_KEY, which must never reach a client.
