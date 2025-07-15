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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const { error } = await res.json();
        throw new Error(error || "Failed");
      }
      setDone(true);
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("Unexpected error");
    } finally {
      setSubmitting(false);
    }
  }

  if (done)
    return (
      <p className="rounded-lg bg-green-50 p-6 text-center text-green-700 shadow">
        Thanks! We’ll contact you shortly.
      </p>
    );

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("grid gap-4", submitting && "opacity-60")}
    >
      <Input
        placeholder="Your name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
      <Input
        type="email"
        placeholder="Email (optional)"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <Input
        type="tel"
        placeholder="Phone (optional)"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <Textarea
        placeholder="How can we help?"
        rows={4}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        required
      />
      {error && (
        <p className="rounded-md bg-red-50 p-3 text-sm text-red-700 shadow-sm">
          {error}
        </p>
      )}
      <Button type="submit" disabled={submitting}>
        {submitting ? "Sending…" : "Send Enquiry"}
      </Button>
    </form>
  );
}
