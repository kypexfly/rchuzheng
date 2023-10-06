"use client";

import { ContactFormSchema } from "@/lib/validators";
import { useState } from "react";
import { Icons } from "../icons";
import { Section } from "../section";
import { StaggerAnimateInView, fadeInTop } from "../stagger-animate";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const initialFormState = {
  name: "",
  email: "",
  message: "",
};

export function ContactSection() {
  const [form, setForm] = useState(initialFormState);

  const [isError, setIsError] = useState(false);
  const [sending, setSending] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    try {
      const payload = ContactFormSchema.parse(form);

      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setForm(initialFormState);
        setIsError(false);
      }
    } catch (err) {
      setIsError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <Section id="contact" className="sm:px-8 container my-0">
      <StaggerAnimateInView variants={fadeInTop}>
        <h2 className="leading-relaxed text-2xl font-bold">Contact</h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base mb-3">
          Got a project or question in mind?
        </p>

        <div className="flex-1 text-muted-foreground">
          <form onSubmit={handleOnSubmit} className="space-y-4 max-w-2xl flex-auto">
            <div className="flex gap-3">
              <Input
                className="mt-2"
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleOnChange}
                required
              />

              <Input
                className="mt-2"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleOnChange}
                required
              />
            </div>

            <Textarea
              className="mt-2"
              name="message"
              rows={8}
              placeholder="Your message"
              value={form.message}
              onChange={handleOnChange}
              required
            />

            <Button
              disabled={sending}
              size="lg"
              className="sm:w-1/3 text-center text-indigo-100 border-indigo-500 hover:text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500"
            >
              <Icons.send className="w-5 h-5 mr-2" />
              <span className="relative">{sending ? "Sending..." : "Send"}</span>
            </Button>

            {isError && <p className="text-red-500">Something went wrong. Try again later.</p>}
          </form>
        </div>
      </StaggerAnimateInView>
    </Section>
  );
}
