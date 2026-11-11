"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="border-border bg-secondary/50 rounded-2xl border p-6 text-sm leading-relaxed"
        role="status"
      >
        پیام شما ثبت شد (نمایشی). برای اتصال به ایمیل یا پیامک واقعی، تنظیمات ارسال را بعداً فعال
        کنید.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">نام</Label>
          <Input id="name" name="name" autoComplete="name" required placeholder="نام شما" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">شماره تماس</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            placeholder="۰۹۱۲…"
            dir="ltr"
            className="text-end"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject">موضوع</Label>
        <Input id="subject" name="subject" placeholder="مثلاً: مشاوره رنگ کرم‌پودر" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">پیام</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="نیاز خود را بنویسید…"
        />
      </div>
      <Button type="submit" size="lg" className="w-full sm:w-auto">
        ارسال پیام
      </Button>
    </form>
  );
}
