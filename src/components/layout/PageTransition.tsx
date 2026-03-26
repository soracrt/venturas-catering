"use client";

import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    /*
     * key={pathname} causes React to destroy + recreate this div on every
     * route change, which replays the CSS animation cleanly.
     */
    <div key={pathname} className="page-enter">
      {children}
    </div>
  );
}
