import { useState, createContext, PropsWithChildren } from "react";

const currentTheme = { light: "light", dark: "dark" } as const;
type currentThemeType = (typeof currentTheme)[keyof typeof currentTheme]; //same result as currentThemeType = "light" | "dark"

export const ThemeContext = createContext({
  theme: { currentTheme: currentTheme.light },
} as {
  theme: { currentTheme: currentThemeType };
  toggleTheme: () => void;
});

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<{
    currentTheme: currentThemeType;
  }>({
    currentTheme: "light",
  });

  const toggleTheme = () => {
    setTheme(
      theme.currentTheme === "light"
        ? { currentTheme: "dark" }
        : { currentTheme: "light" }
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
