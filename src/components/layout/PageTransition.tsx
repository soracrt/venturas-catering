"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname    = usePathname();
  const [displayed, setDisplayed] = useState(children);
  const [exiting,   setExiting]   = useState(false);
  const pendingRef  = useRef<React.ReactNode>(null);
  const isMounted   = useRef(false);

  useEffect(() => {
    // Don't animate on first load — only on navigation
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    // Capture the incoming page before swapping
    pendingRef.current = children;

    // Hold the old page and play exit animation
    setExiting(true);

    // After exit completes, swap in the new page and enter
    const t = setTimeout(() => {
      setDisplayed(pendingRef.current);
      setExiting(false);
    }, 500);

    return () => clearTimeout(t);
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={exiting ? "page-exit" : "page-enter"}>
      {displayed}
    </div>
  );
}
