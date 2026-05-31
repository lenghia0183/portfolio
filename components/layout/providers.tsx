"use client";

import { ReducedMotionProvider } from "@/lib/motion";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { I18nProvider } from "@/lib/i18n";
import { MixpanelProvider } from "@/components/layout/mixpanel-provider";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }): ReactNode {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <I18nProvider>
        <ReducedMotionProvider>
          <MixpanelProvider>
            <SmoothScroll>{children}</SmoothScroll>
          </MixpanelProvider>
        </ReducedMotionProvider>
      </I18nProvider>
    </ThemeProvider>
  );
}
