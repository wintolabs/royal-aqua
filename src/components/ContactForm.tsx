"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  function validate(): string | null {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.trim()) return "Please enter your email.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return "Please enter a valid email address.";
    if (!form.message.trim()) return "Please enter a message.";
    return null;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const v = validate();
    if (v) {
      setError(v);
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Failed to send. Please try again.");
      }

      setDone(true);
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("Unexpected error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <p className="rounded-lg bg-green-50 p-6 text-center text-green-700 shadow">
        Thanks! We’ll contact you shortly.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("grid gap-4", submitting && "opacity-60")}
    >
      {/* Name */}
      <div className="grid gap-1.5">
        <label htmlFor="ra-name" className="text-sm font-medium text-slate-700">
          Name <span className="text-red-500">*</span>
        </label>
        <Input
          id="ra-name"
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
      </div>

      {/* Email (mandatory) */}
      <div className="grid gap-1.5">
        <label
          htmlFor="ra-email"
          className="text-sm font-medium text-slate-700"
        >
          Email <span className="text-red-500">*</span>
        </label>
        <Input
          id="ra-email"
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
      </div>

      {/* Phone (optional) */}
      <div className="grid gap-1.5">
        <label
          htmlFor="ra-phone"
          className="text-sm font-medium text-slate-700"
        >
          Phone (optional)
        </label>
        <Input
          id="ra-phone"
          type="tel"
          placeholder="10-digit mobile"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
      </div>

      {/* Message */}
      <div className="grid gap-1.5">
        <label htmlFor="ra-msg" className="text-sm font-medium text-slate-700">
          How can we help? <span className="text-red-500">*</span>
        </label>
        <Textarea
          id="ra-msg"
          placeholder="Tell us your issue or service need…"
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        />
      </div>

      {error && (
        <p className="rounded-md bg-red-50 p-3 text-sm text-red-700 shadow-sm">
          {error}
        </p>
      )}

      <Button
        type="submit"
        disabled={submitting}
        className="bg-blue-500 hover:bg-blue-600"
      >
        {submitting ? "Sending…" : "Send Enquiry"}
      </Button>
    </form>
  );
}
