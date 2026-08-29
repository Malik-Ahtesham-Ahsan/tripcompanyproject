"use client";

import { useState, type FormEvent } from "react";
import {
  AlertCircle,
  BadgeCheck,
  Globe2,
  History,
  Loader2,
  Mail,
  MapPinned,
  MessageCircle,
  PhoneCall,
  Send,
  ShieldCheck,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

type ConsultationFormProps = {
  variant?: "hero" | "contact";
  onSuccess?: () => void;
};

const inputClasses =
  "w-full rounded-xl border border-navy-950/12 bg-white px-4 py-3 pl-11 text-sm text-navy-950 shadow-sm shadow-navy-950/5 outline-none transition-all placeholder:text-navy-700/40 focus:border-blue-600 focus:shadow-md focus:shadow-blue-600/10 focus:ring-2 focus:ring-blue-600/15";

export function ConsultationForm({ variant = "contact", onSuccess }: ConsultationFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [preferredResponse, setPreferredResponse] = useState("WhatsApp");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSubmitting(true);

    const form = event.currentTarget;
    const data = new FormData(form);

    const nationality = asString(data.get("nationality"));
    const ukCity = asString(data.get("ukCity"));
    const statusInUk = asString(data.get("statusInUk"));
    const previousSchengen = asString(data.get("previousSchengen"));
    const message = asString(data.get("message"));

    const details = [
      nationality && `Nationality: ${nationality}`,
      ukCity && `UK City: ${ukCity}`,
      statusInUk && `Status in UK: ${statusInUk}`,
      previousSchengen && `Previous Schengen: ${previousSchengen}`,
      preferredResponse && `Preferred response: ${preferredResponse}`,
      message && `Message: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          service: "Free Consultation",
          destination: ukCity || nationality,
          message: details,
        }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.error || "Something went wrong. Please try again.");
      }

      form.reset();
      setSubmitted(true);
      onSuccess?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <span className="text-4xl">🎉</span>
        <h3 className="font-display text-xl font-bold text-navy-950">Thank You! Request Received.</h3>
        <p className="max-w-sm text-sm text-navy-700/70">
          Our expert will contact you within <strong>2 hours</strong> via your preferred method.
        </p>
        <Button
          href={siteConfig.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          size="md"
        >
          💬 WhatsApp for Instant Help
        </Button>
        {variant === "contact" ? (
          <Button variant="ghost" size="md" onClick={() => setSubmitted(false)}>
            Submit another enquiry
          </Button>
        ) : null}
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {variant === "hero" ? (
        <div className="grid grid-cols-2 gap-2 rounded-2xl border border-blue-600/10 bg-gradient-to-r from-blue-600/5 to-gold-500/10 p-3 text-xs text-navy-800">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm">
              <BadgeCheck className="h-4 w-4" />
            </span>
            <span>
              <strong className="block text-navy-950">100% Free</strong>
              No obligation
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm">
              <ShieldCheck className="h-4 w-4" />
            </span>
            <span>
              <strong className="block text-navy-950">Secure &amp; Private</strong>
              GDPR protected
            </span>
          </div>
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <Field icon={UserRound} label="Full Name *" htmlFor={`${variant}-name`} className="sm:col-span-2">
        <input id={`${variant}-name`} name="name" required type="text" placeholder="Your full name" className={inputClasses} />
      </Field>
      <Field icon={PhoneCall} label="Phone *" htmlFor={`${variant}-phone`}>
        <input id={`${variant}-phone`} name="phone" required type="tel" placeholder="+44 7000 000000" className={inputClasses} />
      </Field>
      <Field icon={Mail} label="Email *" htmlFor={`${variant}-email`}>
        <input id={`${variant}-email`} name="email" required type="email" placeholder="you@email.com" className={inputClasses} />
      </Field>
      <Field icon={Globe2} label="Nationality" htmlFor={`${variant}-nationality`}>
        <input id={`${variant}-nationality`} name="nationality" type="text" placeholder="e.g. Pakistani" className={inputClasses} />
      </Field>
      <Field icon={MapPinned} label="UK City" htmlFor={`${variant}-ukCity`}>
        <input id={`${variant}-ukCity`} name="ukCity" type="text" placeholder="e.g. London" className={inputClasses} />
      </Field>
      <Field icon={BadgeCheck} label="Status in UK" htmlFor={`${variant}-statusInUk`}>
        <select id={`${variant}-statusInUk`} name="statusInUk" defaultValue="" className={inputClasses}>
          <option value="" disabled>Select...</option>
          <option value="UK BRP">UK BRP</option>
          <option value="UK Citizen">UK Citizen</option>
          <option value="ILR / Settled Status">ILR / Settled Status</option>
          <option value="Student Visa">Student Visa</option>
          <option value="Work Visa">Work Visa</option>
          <option value="Other">Other</option>
        </select>
      </Field>
      <Field icon={History} label="Previous Schengen Visas?" htmlFor={`${variant}-previousSchengen`}>
        <select id={`${variant}-previousSchengen`} name="previousSchengen" defaultValue="" className={inputClasses}>
          <option value="" disabled>Select...</option>
          <option value="Yes – in last 3 years">Yes – in last 3 years</option>
          <option value="Yes – more than 3 years ago">Yes – more than 3 years ago</option>
          <option value="No – first time applying">No – first time applying</option>
        </select>
      </Field>
      <Field label="Preferred Response" htmlFor={`${variant}-preferredResponse`} className="sm:col-span-2">
        <div className="flex flex-wrap gap-2">
          {(["Call", "WhatsApp", "Email"] as const).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setPreferredResponse(option)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                preferredResponse === option
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-navy-950/12 bg-white text-navy-800 hover:border-blue-600/40"
              }`}
            >
              {option === "Call" ? "📞 Call" : option === "WhatsApp" ? "💬 WhatsApp" : "✉️ Email"}
            </button>
          ))}
        </div>
      </Field>
      {variant === "contact" ? (
        <Field icon={MessageCircle} label="Message" htmlFor={`${variant}-message`} className="sm:col-span-2">
          <textarea
            id={`${variant}-message`}
            name="message"
            rows={3}
            placeholder="Tell us about your travel plans..."
            className={inputClasses}
          />
        </Field>
      ) : null}

      {error ? (
        <p className="flex items-start gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 sm:col-span-2">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          {error}
        </p>
      ) : null}

      <Button
        type="submit"
        size="lg"
        className="shadow-lg shadow-blue-600/20 sm:col-span-2"
        disabled={submitting}
        icon={submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
      >
        {submitting ? "Submitting…" : "✈ Submit Free Request"}
      </Button>
      <p className="text-center text-xs text-navy-700/50 sm:col-span-2">
        🔒 Your data is 100% secure &amp; GDPR compliant
      </p>
      </form>
    </div>
  );
}

function asString(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

function Field({
  label,
  htmlFor,
  children,
  className,
  icon: Icon,
}: {
  icon?: LucideIcon;
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-1.5 transition-transform duration-200 focus-within:-translate-y-0.5 ${className ?? ""}`}>
      <label htmlFor={htmlFor} className="text-xs font-semibold text-navy-800">
        {label}
      </label>
      <div className="relative">
        {Icon ? <Icon className="pointer-events-none absolute left-3.5 top-3.5 z-10 h-4 w-4 text-navy-700/45" /> : null}
        {children}
      </div>
    </div>
  );
}
