This is a [Next.js](https://nextjs.org) project with a contact form that can store submitted inquiries in a Microsoft Excel table on OneDrive and can also email new submissions to your team.

## Setup

1. Copy `.env.example` to `.env.local`.
2. Set `ADMIN_PANEL_KEY` to protect the admin inquiries page.
3. Optionally set your SMTP server details if you also want email notifications for new submissions.
4. If you want live submissions to go to OneDrive, create an Excel workbook in OneDrive and add a table named `Inquiries` with these columns in this exact order:
   `id`, `fullName`, `companyName`, `email`, `countryCode`, `contactNumber`, `projectDetails`, `createdAt`
5. Register an app in Microsoft Entra ID, grant Microsoft Graph application permission `Files.ReadWrite.All` and admin consent, then provide the Graph settings below.

Example configuration:

```bash
ADMIN_PANEL_KEY=choose-a-secure-admin-key
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
INQUIRY_TO_EMAIL=hello@example.com
INQUIRY_FROM_EMAIL=hello@example.com
MICROSOFT_GRAPH_TENANT_ID=your-tenant-id
MICROSOFT_GRAPH_CLIENT_ID=your-app-client-id
MICROSOFT_GRAPH_CLIENT_SECRET=your-app-client-secret
MICROSOFT_GRAPH_DRIVE_ID=your-drive-id
MICROSOFT_GRAPH_TABLE_NAME=Inquiries
MICROSOFT_GRAPH_WORKBOOK_ITEM_ID=
MICROSOFT_GRAPH_WORKBOOK_PATH=/Axxion/Inquiries.xlsx
```

Storage behavior:

- If the Microsoft Graph variables are configured, `src/app/api/contact/route.js` writes each inquiry into the configured Excel table on OneDrive and the admin panel reads from that same workbook.
- If the Microsoft Graph variables are not configured, the app falls back to `data/inquiries.csv` for local development.
- SMTP is optional and independent from storage.

## OneDrive notes

- This integration is intended for Microsoft 365 / OneDrive for Business via Microsoft Graph, not a personal OneDrive consumer account.
- You can identify the workbook either by `MICROSOFT_GRAPH_WORKBOOK_ITEM_ID` or by `MICROSOFT_GRAPH_WORKBOOK_PATH`.
- `MICROSOFT_GRAPH_WORKBOOK_PATH` is relative to the root of the drive whose ID you provide.
- The admin page and the public form now use the same inquiry store, so the inbox shows the same rows that are written to OneDrive.

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