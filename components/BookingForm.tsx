"use client";

import { useState, type FormEvent } from "react";
import { Send, User, Phone, CalendarDays, Clock, MessageSquare } from "lucide-react";
import { services, site } from "@/lib/site-config";
import { whatsappLink } from "@/lib/utils";

export default function BookingForm({ className }: { className?: string }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(services[0].name);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const lines = [
      `Hi Blush & Glow, I'd like to book an appointment.`,
      ``,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      date ? `Preferred Date: ${date}` : "",
      time ? `Preferred Time: ${time}` : "",
      message ? `Message: ${message}` : "",
    ].filter(Boolean);

    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className ?? ""}`}
    >
      <Field icon={User} label="Full Name">
        <input
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="input-field"
        />
      </Field>

      <Field icon={Phone} label="Phone Number">
        <input
          required
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="03XX XXXXXXX"
          className="input-field"
        />
      </Field>

      <Field icon={MessageSquare} label="Service">
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="input-field"
        >
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>
      </Field>

      <Field icon={CalendarDays} label="Preferred Date">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="input-field"
        />
      </Field>

      <Field icon={Clock} label="Preferred Time">
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="input-field"
        />
      </Field>

      <Field icon={MessageSquare} label="Message (optional)" className="md:col-span-2">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          placeholder="Tell us more about your event or requirements..."
          className="input-field resize-none"
        />
      </Field>

      <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-1">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-rose px-7 py-3.5 text-sm uppercase tracking-wider text-white font-medium hover:bg-rose-dark transition-colors shadow-sm"
        >
          <Send size={16} />
          Request Appointment
        </button>
        <a
          href={`tel:${site.phoneIntl}`}
          className="text-sm text-charcoal-soft hover:text-rose transition-colors"
        >
          or call us at <span className="font-medium text-rose-dark">{site.phone}</span>
        </a>
      </div>

      {submitted && (
        <p className="md:col-span-2 text-sm text-sage mt-1">
          Thank you! We&apos;ve opened WhatsApp with your booking details — just hit send and
          our team will confirm shortly.
        </p>
      )}
    </form>
  );
}

function Field({
  icon: Icon,
  label,
  children,
  className,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-1.5 ${className ?? ""}`}>
      <span className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-charcoal-soft">
        <Icon size={13} />
        {label}
      </span>
      {children}
    </label>
  );
}
