"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>();

  const onSubmit = async (data: ContactFormValues) => {
    const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAIL_TEMPL_ID;
    const publicKey = process.env.NEXT_PUBLIC_PUB_EMAIL_API_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setErrorMessage("Contact service is not configured.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          to_name: "Carter S.",
          from_name: data.name,
          reply_to: data.email,
          message: data.message,
        },
        {
          publicKey,
          limitRate: {
            throttle: 30000,
          },
        }
      );
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        "Unable to send message right now. Please wait a moment and try again."
      );
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-canvas border border-line text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <input
            className={inputClass}
            type="text"
            placeholder="Name"
            aria-invalid={Boolean(errors.name)}
            {...register("name", { required: "Please enter your name." })}
          />
          {errors.name && (
            <p className="text-xs text-accent">{errors.name.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <input
            className={inputClass}
            type="email"
            placeholder="Email"
            aria-invalid={Boolean(errors.email)}
            {...register("email", {
              required: "Please enter your email address.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address.",
              },
            })}
          />
          {errors.email && (
            <p className="text-xs text-accent">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <textarea
          rows={7}
          className={inputClass}
          placeholder="Your message..."
          aria-invalid={Boolean(errors.message)}
          {...register("message", {
            required: "Please enter a message.",
            minLength: {
              value: 50,
              message: "Message must be at least 50 characters.",
            },
            maxLength: {
              value: 256,
              message: "Message must be 256 characters or fewer.",
            },
          })}
        />
        {errors.message && (
          <p className="text-xs text-accent">{errors.message.message}</p>
        )}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="min-h-[20px] text-sm" role="status" aria-live="polite">
          {status === "success" && (
            <p className="text-emerald-700 dark:text-emerald-400 font-medium">
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-accent font-medium">{errorMessage}</p>
          )}
        </div>

        <button
          className="px-6 py-2.5 rounded-lg bg-ink text-canvas hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-medium cursor-pointer w-fit self-end"
          type="submit"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
