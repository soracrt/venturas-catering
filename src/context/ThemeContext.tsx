"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { usePathname } from "next/navigation";

type ServiceTheme = "corporate" | "wedding" | "bento" | null;

interface ThemeContextType {
  serviceTheme: ServiceTheme;
  eveningMode: boolean;
  toggleEveningMode: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  serviceTheme: null,
  eveningMode: false,
  toggleEveningMode: () => {},
});

function pathToTheme(pathname: string): ServiceTheme {
  if (pathname.startsWith("/services/corporate")) return "corporate";
  if (pathname.startsWith("/services/private"))   return "wedding";
  if (pathname.startsWith("/bento"))              return "bento";
  return null;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const pathname     = usePathname();
  const serviceTheme = pathToTheme(pathname);

  const [eveningMode, setEveningMode] = useState(false);

  /* Restore evening preference */
  useEffect(() => {
    try {
      if (localStorage.getItem("venturas-evening") === "true") {
        setEveningMode(true);
      }
    } catch {}
  }, []);

  /* Apply service theme to <html> so the header accent line shifts */
  useEffect(() => {
    const html = document.documentElement;
    if (serviceTheme) {
      html.setAttribute("data-theme", serviceTheme);
    } else {
      html.removeAttribute("data-theme");
    }
  }, [serviceTheme]);

  /* Apply evening mode to <html> */
  useEffect(() => {
    const html = document.documentElement;
    if (eveningMode) {
      html.setAttribute("data-evening", "true");
    } else {
      html.removeAttribute("data-evening");
    }
    try {
      localStorage.setItem("venturas-evening", String(eveningMode));
    } catch {}
  }, [eveningMode]);

  const toggleEveningMode = useCallback(() => setEveningMode((v) => !v), []);

  return (
    <ThemeContext.Provider value={{ serviceTheme, eveningMode, toggleEveningMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
