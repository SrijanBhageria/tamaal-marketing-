"use client";

import { useEffect, ReactNode } from "react";
import { theme } from "@/app/constants/theme";

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  useEffect(() => {
    const root = document.documentElement;
    
    // Inject CSS variables into :root
    Object.entries(theme.colors).forEach(([key, value]) => {
      // Convert camelCase to kebab-case for CSS variable names
      const cssVarName = `--color-${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
      root.style.setProperty(cssVarName, value);
    });
  }, []);

  return <>{children}</>;
}
