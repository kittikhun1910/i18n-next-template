import { useTranslations } from "next-intl";
import React from "react";

export default function Footer() {
  const t = useTranslations("AboutPage");
  return (
    <div>
      <h1 className="text-4xl mb-4 font-semibold">{t("title")}</h1>
      <p>{t("description")}</p>
    </div>
  );
}
