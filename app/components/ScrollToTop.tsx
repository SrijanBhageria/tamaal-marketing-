"use client";

import { useEffect, useLayoutEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function ScrollToTopInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Use useLayoutEffect for synchronous scroll before paint
  useLayoutEffect(() => {
    // Scroll to top immediately on any route change
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname, searchParams]);

  // Also handle on initial mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export function ScrollToTop() {
  return (
    <Suspense fallback={null}>
      <ScrollToTopInner />
    </Suspense>
  );
}
