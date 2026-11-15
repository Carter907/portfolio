"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [status, setStatus] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = (params) => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPL_ID,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUB_EMAIL_API_KEY,
          limitRate: {
            throttle: 30000, // you can not send more than one email per 30 seconds.
          },
        }
      )
      .then(
        () => {
          setStatus(1);
        },
        () => {
          setStatus(2);
        }
      );
  };

  const onSubmit = (data) => {
    const templateParams = {
      to_name: "Carter S.",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    };

    sendEmail(templateParams);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-canvas border border-line text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          className={inputClass}
          type="text"
          placeholder="Name"
          aria-invalid={Boolean(errors.name)}
          {...register("name", { required: true })}
        />
        <input
          className={inputClass}
          type="email"
          placeholder="Email"
          aria-invalid={Boolean(errors.email)}
          {...register("email", { required: true })}
        />
      </div>

      <textarea
        rows={7}
        className={inputClass}
        placeholder="Your message..."
        aria-invalid={Boolean(errors.message)}
        {...register("message", {
          required: true,
          max: 256,
          min: 50,
        })}
      />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="min-h-[20px] text-sm">
          {status === 1 ? (
            <p className="text-emerald-700 dark:text-emerald-400 font-medium">
              Message sent successfully!
            </p>
          ) : status === 2 ? (
            <p className="text-accent font-medium">
              Please wait before sending another message.
            </p>
          ) : null}
        </div>

        <button
          className="px-6 py-2.5 rounded-lg bg-ink text-canvas hover:bg-accent transition-colors text-sm font-medium cursor-pointer w-fit self-end"
          type="submit"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
