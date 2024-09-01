import { createContext, useContext, useEffect, useState } from "react";

type ThemeProviderProbs = {
  children: React.ReactNode
}
type ContextValue = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>
}
const storedTheme = localStorage.getItem("theme");
const currentTheme = storedTheme !== null ? storedTheme : "light";

const ThemeContext = createContext<ContextValue>({} as ContextValue);
export function ThemeProvider({ children }:ThemeProviderProbs) {
  const [theme, setTheme] = useState<string>(currentTheme);
  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html")!.classList.add("dark");
    } else {
      document.querySelector("html")!.classList.remove("dark");
    }
    localStorage.setItem("theme", `${theme}`);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export const useThemeContext = () => useContext(ThemeContext);
