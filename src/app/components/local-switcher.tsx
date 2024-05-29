"use client";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useTransition } from "react";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChangeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocals = e.target.value;

    startTransition(() => {
      router.replace(`/${nextLocals}`);
    });
  };
  return (
    <label className="border-2 rounded ">
      <p className="sr-only">change language </p>
      <select
        defaultValue={localActive}
        disabled={isPending}
        className="bg-transparent py-2"
        onChange={onSelectChangeLanguage}
      >
        <option value="th">ไทย</option>
        <option value="en">English</option>
      </select>
    </label>
  );
}
