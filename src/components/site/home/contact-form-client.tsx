"use client";

import dynamic from "next/dynamic";

const ContactForm = dynamic(
  () => import("./contact-form").then((module) => module.ContactForm),
  { ssr: false }
);

export function ContactFormClient() {
  return <ContactForm />;
}
