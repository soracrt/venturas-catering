"use client";

import { createContext, useContext, useEffect } from "react";
import { usePathname } from "next/navigation";

type ServiceTheme = "corporate" | "wedding" | "bento" | null;

interface ThemeContextType {
  serviceTheme: ServiceTheme;
}

const ThemeContext = createContext<ThemeContextType>({ serviceTheme: null });

function pathToTheme(pathname: string): ServiceTheme {
  if (pathname.startsWith("/services/corporate")) return "corporate";
  if (pathname.startsWith("/services/private"))   return "wedding";
  if (pathname.startsWith("/bento"))              return "bento";
  return null;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const pathname     = usePathname();
  const serviceTheme = pathToTheme(pathname);

  /* Apply service theme to <html> so the header accent line shifts */
  useEffect(() => {
    const html = document.documentElement;
    if (serviceTheme) {
      html.setAttribute("data-theme", serviceTheme);
    } else {
      html.removeAttribute("data-theme");
    }
  }, [serviceTheme]);

  return (
    <ThemeContext.Provider value={{ serviceTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
