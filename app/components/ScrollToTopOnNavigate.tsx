"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

function scrollToTop() {
  const options: ScrollToOptions = { top: 0, left: 0, behavior: "instant" };
  window.scrollTo(options);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

export default function ScrollToTopOnNavigate() {
  const pathname = usePathname();

  useEffect(() => {
    scrollToTop();

    // Run again after paint — layout may not be committed yet when pathname first changes
    const rafId = requestAnimationFrame(() => {
      scrollToTop();
    });

    // Run once more after a short delay (e.g. when navigating from homepage)
    const timeoutId = setTimeout(scrollToTop, 100);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
    };
  }, [pathname]);

  return null;
}