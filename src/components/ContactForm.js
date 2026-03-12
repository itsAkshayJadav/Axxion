"use client";

import { useState } from "react";

const initialForm = {
  fullName: "",
  companyName: "",
  email: "",
  countryCode: "+61",
  contactNumber: "",
  projectDetails: "",
};

const countryOptions = [
  "+1 (US)",
  "+44 (UK)",
  "+61 (AU)",
  "+91 (IN)",
  "+65 (SG)",
  "+971 (UAE)",
];

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submitForm = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Unable to submit your project right now.");
      }

      setForm(initialForm);
      setStatus("success");
      setMessage("Thanks. We received your project details and will reach out soon.");
    } catch (error) {
      setStatus("error");
      setMessage(error.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={submitForm} className="space-y-4">
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="fullName">
          Full name
        </label>
        <input
          id="fullName"
          name="fullName"
          className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/40"
          value={form.fullName}
          onChange={handleChange}
          placeholder="Your full name"
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="companyName">
          Company name
        </label>
        <input
          id="companyName"
          name="companyName"
          className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/40"
          value={form.companyName}
          onChange={handleChange}
          placeholder="Your company"
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/40"
          value={form.email}
          onChange={handleChange}
          placeholder="you@company.com"
          required
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-[0.42fr_0.58fr]">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="countryCode">
            Country code
          </label>
          <select
            id="countryCode"
            name="countryCode"
            className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition focus:border-cyan-200/40"
            value={form.countryCode}
            onChange={handleChange}
          >
            {countryOptions.map((option) => (
              <option key={option} value={option.split(" ")[0]}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="contactNumber">
            Contact number
          </label>
          <input
            id="contactNumber"
            name="contactNumber"
            type="tel"
            className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/40"
            value={form.contactNumber}
            onChange={handleChange}
            placeholder="412 345 678"
            required
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="projectDetails">
          Project details
        </label>
        <textarea
          id="projectDetails"
          name="projectDetails"
          rows="5"
          className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/40"
          value={form.projectDetails}
          onChange={handleChange}
          placeholder="Tell us what you want to build, your timeline, and the business problem you are solving."
          required
        />
      </div>

      <button
        className="w-full rounded-full bg-[linear-gradient(135deg,#6ee7ff,#2dd4bf)] py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : "Submit project brief"}
      </button>

      {message ? (
        <p className={`text-sm ${status === "error" ? "text-rose-300" : "text-emerald-300"}`}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
