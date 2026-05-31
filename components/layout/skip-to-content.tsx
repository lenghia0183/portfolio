"use client";

import { useI18n } from "@/lib/i18n";
import type { ReactNode } from "react";

export function SkipToContent(): ReactNode {
  const { t } = useI18n();

  return (
    <a href="#main-content" className="skip-to-content">
      {t.skipToContent}
    </a>
  );
}
