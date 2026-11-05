"use client";

import { useState } from "react";
import Link from "next/link";
import { developers } from "@/lib/data";

const REQUESTS = ["Consultation", "Request latest pricing", "Availability", "Brochure"];

function Field({ name, label, required, error, children }) {
  return (
    <div className={`field ${error ? "has-error" : ""}`}>
      <label htmlFor={name}>{label}{required && <span aria-hidden="true"> *</span>}</label>
      {children}
      {error && <p className="field-error">{error}</p>}
    </div>
  );
}

export default function InquiryForm({ project = null, defaultRequest = "Consultation" }) {
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    const v = Object.fromEntries(new FormData(e.currentTarget).entries());
    const err = {};
    if (!v.name?.trim()) err.name = "Enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(v.email || "")) err.email = "Enter a valid email address.";
    if (!/^[+\d][\d\s()-]{6,}$/.test((v.phone || "").trim())) err.phone = "Enter a valid WhatsApp or phone number.";
    if (!v.consent) err.consent = "Please accept the privacy policy to continue.";
    setErrors(err);
    if (Object.keys(err).length) return;
    if (v.website) { setDone(true); return; } // honeypot: bots fill the hidden field
    // TODO: connect to the backend / managed form service when it is ready.
    console.log("Inquiry (frontend only):", { ...v, project });
    setDone(true);
  }

  if (done) {
    return (
      <div className="form-success" role="status">
        <h3>Inquiry received</h3>
        <p>
          Thank you for contacting Dalera Properties. Your inquiry has been received. Our team
          will review your requirements and contact you using the details provided.
        </p>
      </div>
    );
  }

  return (
    <form className="inquiry-form" onSubmit={onSubmit} noValidate>
      {project && <input type="hidden" name="project" value={project} />}
      <div className="form-grid">
        <Field error={errors.name} name="name" label="Full name" required>
          <input id="name" name="name" type="text" autoComplete="name" />
        </Field>
        <Field error={errors.email} name="email" label="Email address" required>
          <input id="email" name="email" type="email" autoComplete="email" />
        </Field>
        <Field error={errors.phone} name="phone" label="WhatsApp / phone" required>
          <input id="phone" name="phone" type="tel" autoComplete="tel" />
        </Field>
        {project ? (
          <Field error={errors.requestType} name="requestType" label="Request type">
            <select id="requestType" name="requestType" defaultValue={defaultRequest}>
              {REQUESTS.map((r) => <option key={r}>{r}</option>)}
            </select>
          </Field>
        ) : (
          <Field error={errors.country} name="country" label="Country / current location">
            <input id="country" name="country" type="text" />
          </Field>
        )}
        <Field error={errors.budget} name="budget" label="Investment budget (AED)">
          <input id="budget" name="budget" type="text" inputMode="numeric" />
        </Field>
        {project ? (
          <Field error={errors.unit} name="unit" label="Interested unit type">
            <input id="unit" name="unit" type="text" />
          </Field>
        ) : (
          <Field error={errors.developer} name="developer" label="Preferred developer">
            <select id="developer" name="developer" defaultValue="">
              <option value="">No preference</option>
              {developers.map((d) => <option key={d.slug}>{d.name}</option>)}
            </select>
          </Field>
        )}
        {project ? (
          <Field error={errors.channel} name="channel" label="Preferred contact channel">
            <select id="channel" name="channel" defaultValue="WhatsApp">
              <option>WhatsApp</option><option>Phone call</option><option>Email</option>
            </select>
          </Field>
        ) : (
          <Field error={errors.ptype} name="ptype" label="Property type">
            <select id="ptype" name="ptype" defaultValue="">
              <option value="">Not sure yet</option>
              <option>Apartment</option><option>Villa</option><option>Townhouse</option>
            </select>
          </Field>
        )}
      </div>
      <Field error={errors.message} name="message" label="Message">
        <textarea id="message" name="message" rows={4} />
      </Field>

      {/* Honeypot anti-spam field, hidden from people */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className={`field consent ${errors.consent ? "has-error" : ""}`}>
        <label className="check">
          <input type="checkbox" name="consent" />
          <span>
            I agree to be contacted by Dalera Properties and I have read the{" "}
            <Link href="/privacy-policy">Privacy Policy</Link>. <span aria-hidden="true">*</span>
          </span>
        </label>
        {errors.consent && <p className="field-error">{errors.consent}</p>}
      </div>
      <p className="form-note">Fields marked * are required.</p>
      <button type="submit" className="btn btn--gold">Send Inquiry</button>
    </form>
  );
}
