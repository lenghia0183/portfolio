"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import type { ReactNode } from "react";
import { track, EVENTS } from "@/lib/mixpanel";

const PAGE_NAMES: Record<string, string> = {
  "/": "Trang chủ",
  "/projects": "Dự án",
  "/about": "Giới thiệu",
  "/contact": "Liên hệ",
};

export function MixpanelProvider({ children }: { children: ReactNode }): ReactNode {
  const pathname = usePathname();

  useEffect(() => {
    track(EVENTS.XEM_TRANG, { trang: PAGE_NAMES[pathname] ?? pathname });
  }, [pathname]);

  return <>{children}</>;
}
