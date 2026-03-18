"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const initialForm = {
  fullName: "",
  companyName: "",
  email: "",
  countryCode: "+61",
  contactNumber: "",
  projectDetails: "",
};

const countryOptions = ["+1", "+44", "+61", "+65", "+91", "+971"];

type InquiryForm = typeof initialForm;

export function ContactForm() {
  const [form, setForm] = useState<InquiryForm>(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
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
      setMessage("Project brief received. We will follow up with the fastest realistic path to launch.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form className="space-y-5" id="contact-form" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-slate-200">Full name</span>
          <input
            className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-white placeholder:text-slate-500"
            name="fullName"
            onChange={handleChange}
            placeholder="Your full name"
            required
            value={form.fullName}
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-slate-200">Company</span>
          <input
            className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-white placeholder:text-slate-500"
            name="companyName"
            onChange={handleChange}
            placeholder="Company or startup"
            required
            value={form.companyName}
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-slate-200">Email</span>
          <input
            className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-white placeholder:text-slate-500"
            name="email"
            onChange={handleChange}
            placeholder="you@company.com"
            required
            type="email"
            value={form.email}
          />
        </label>

        <div className="grid grid-cols-[110px_minmax(0,1fr)] gap-3">
          <label className="space-y-2">
            <span className="text-sm font-medium text-slate-200">Code</span>
            <select
              className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-3 text-white"
              name="countryCode"
              onChange={handleChange}
              value={form.countryCode}
            >
              {countryOptions.map((option) => (
                <option className="bg-slate-950 text-white" key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label className="space-y-2">
            <span className="text-sm font-medium text-slate-200">Contact number</span>
            <input
              className="h-12 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-white placeholder:text-slate-500"
              name="contactNumber"
              onChange={handleChange}
              placeholder="412 345 678"
              required
              type="tel"
              value={form.contactNumber}
            />
          </label>
        </div>
      </div>

      <label className="space-y-2">
        <span className="text-sm font-medium text-slate-200">What are you trying to ship?</span>
        <textarea
          className="min-h-[150px] w-full rounded-[24px] border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder:text-slate-500"
          name="projectDetails"
          onChange={handleChange}
          placeholder="Tell us what you want to build, the timeline, and where AI or automation could create leverage."
          required
          rows={6}
          value={form.projectDetails}
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-7 text-slate-400">Production-grade software, leaner delivery model, and human-reviewed implementation quality.</p>
        <Button className="min-w-[13rem]" disabled={status === "submitting"} size="lg" type="submit">
          {status === "submitting" ? (
            <>
              <LoaderCircle className="h-4 w-4 animate-spin" />
              Sending brief
            </>
          ) : (
            "Tell us what you need"
          )}
        </Button>
      </div>

      {message ? (
        <p className={status === "error" ? "text-sm text-rose-300" : "text-sm text-emerald-300"}>{message}</p>
      ) : null}
    </form>
  );
}