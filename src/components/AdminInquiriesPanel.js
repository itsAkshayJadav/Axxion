"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "axxion-admin-panel-key";

function formatDate(value) {
  if (!value) {
    return "Unknown";
  }

  return new Intl.DateTimeFormat("en-AU", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export default function AdminInquiriesPanel() {
  const [adminKey, setAdminKey] = useState("");
  const [draftKey, setDraftKey] = useState("");
  const [inquiries, setInquiries] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const loadInquiries = async (key) => {
    if (!key) {
      setStatus("locked");
      setError("Enter your admin access key to load inquiries.");
      setInquiries([]);
      setSelectedId(null);
      return;
    }

    setStatus("loading");
    setError("");

    try {
      const response = await fetch("/api/admin/inquiries", {
        headers: {
          "x-admin-key": key,
        },
        cache: "no-store",
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Unable to load inquiries.");
      }

      setInquiries(data.inquiries);
      setSelectedId(data.inquiries[0]?.id ?? null);
      setStatus("ready");
    } catch (loadError) {
      setStatus("error");
      setError(loadError.message || "Unable to load inquiries.");
      setInquiries([]);
      setSelectedId(null);
    }
  };

  useEffect(() => {
    const savedKey = window.localStorage.getItem(STORAGE_KEY) || "";

    if (!savedKey) {
      setStatus("locked");
      return;
    }

    setAdminKey(savedKey);
    setDraftKey(savedKey);
    loadInquiries(savedKey);
  }, []);

  const handleUnlock = async (event) => {
    event.preventDefault();
    const key = draftKey.trim();

    setAdminKey(key);
    window.localStorage.setItem(STORAGE_KEY, key);
    await loadInquiries(key);
  };

  const handleReset = () => {
    setAdminKey("");
    setDraftKey("");
    setInquiries([]);
    setSelectedId(null);
    setStatus("locked");
    setError("");
    window.localStorage.removeItem(STORAGE_KEY);
  };

  const selectedInquiry = inquiries.find((inquiry) => inquiry.id === selectedId) || null;

  return (
    <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-10 sm:px-8 lg:px-10">
      <div className="glass relative overflow-hidden rounded-[2rem] border border-white/10 p-8 sm:p-10">
        <div className="hero-orb hero-orb-a" />
        <div className="hero-orb hero-orb-b" />

        <div className="relative z-10 flex flex-col gap-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200/80">
                Admin Panel
              </p>
              <h1 className="display-font text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Submitted inquiries
              </h1>
              <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                Review every project brief submitted through the contact form in one place.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 text-sm">
              <div className="rounded-full border border-cyan-200/20 bg-cyan-300/10 px-4 py-2 text-cyan-100">
                {inquiries.length} total inquiries
              </div>
              <button
                className="rounded-full border border-white/10 px-4 py-2 text-slate-200 transition hover:border-cyan-200/30 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                type="button"
                onClick={() => loadInquiries(adminKey)}
                disabled={!adminKey || status === "loading"}
              >
                {status === "loading" ? "Refreshing..." : "Refresh"}
              </button>
              <button
                className="rounded-full border border-white/10 px-4 py-2 text-slate-200 transition hover:border-rose-200/30 hover:text-white"
                type="button"
                onClick={handleReset}
              >
                Clear key
              </button>
            </div>
          </div>

          <form onSubmit={handleUnlock} className="grid gap-3 rounded-[1.5rem] border border-white/10 bg-slate-950/45 p-5 md:grid-cols-[1fr_auto]">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="admin-key">
                Admin access key
              </label>
              <input
                id="admin-key"
                type="password"
                value={draftKey}
                onChange={(event) => setDraftKey(event.target.value)}
                placeholder="Enter ADMIN_PANEL_KEY"
                className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/40"
              />
            </div>

            <button
              className="self-end rounded-full bg-[linear-gradient(135deg,#6ee7ff,#2dd4bf)] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
              type="submit"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Loading..." : adminKey ? "Update key" : "Unlock panel"}
            </button>
          </form>

          {error ? <p className="text-sm text-rose-300">{error}</p> : null}

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
            <section className="rounded-[1.75rem] border border-white/10 bg-slate-950/45 p-4 sm:p-5">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">Inbox</h2>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Newest first</p>
              </div>

              <div className="space-y-3">
                {status === "ready" && inquiries.length === 0 ? (
                  <div className="rounded-2xl border border-dashed border-white/10 px-4 py-8 text-center text-sm text-slate-400">
                    No inquiries yet.
                  </div>
                ) : null}

                {inquiries.map((inquiry) => {
                  const isActive = inquiry.id === selectedId;

                  return (
                    <button
                      key={inquiry.id}
                      type="button"
                      onClick={() => setSelectedId(inquiry.id)}
                      className={`w-full rounded-[1.5rem] border px-4 py-4 text-left transition ${
                        isActive
                          ? "border-cyan-200/35 bg-cyan-300/10"
                          : "border-white/8 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-base font-semibold text-white">{inquiry.fullName}</p>
                          <p className="mt-1 text-sm text-slate-300">{inquiry.companyName}</p>
                          <p className="mt-1 text-sm text-cyan-100/80">{inquiry.email}</p>
                        </div>
                        <p className="shrink-0 text-xs uppercase tracking-[0.2em] text-slate-400">
                          {formatDate(inquiry.createdAt)}
                        </p>
                      </div>
                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-300">
                        {inquiry.projectDetails}
                      </p>
                    </button>
                  );
                })}
              </div>
            </section>

            <section className="rounded-[1.75rem] border border-white/10 bg-slate-950/45 p-6">
              <div className="mb-5 flex items-center justify-between gap-4">
                <h2 className="text-lg font-semibold text-white">Details</h2>
                {selectedInquiry ? (
                  <a
                    href={`mailto:${selectedInquiry.email}`}
                    className="rounded-full border border-cyan-200/25 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-200/40 hover:text-white"
                  >
                    Reply by email
                  </a>
                ) : null}
              </div>

              {selectedInquiry ? (
                <div className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Name</p>
                      <p className="mt-2 text-base font-medium text-white">{selectedInquiry.fullName}</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Submitted</p>
                      <p className="mt-2 text-base font-medium text-white">{formatDate(selectedInquiry.createdAt)}</p>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Company</p>
                      <p className="mt-2 text-base font-medium text-white">{selectedInquiry.companyName}</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Contact number</p>
                      <p className="mt-2 text-base font-medium text-white">
                        {selectedInquiry.countryCode} {selectedInquiry.contactNumber}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Email</p>
                    <a href={`mailto:${selectedInquiry.email}`} className="mt-2 block text-base font-medium text-cyan-100 hover:text-white">
                      {selectedInquiry.email}
                    </a>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Project brief</p>
                    <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-slate-200">
                      {selectedInquiry.projectDetails}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-white/10 px-4 py-12 text-center text-sm text-slate-400">
                  Unlock the panel and choose an inquiry to inspect it here.
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

