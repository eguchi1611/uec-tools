import { ColorMode } from "@/@types";
import { ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type ColorModeContextType = {
  setColorMode: (mode: ColorMode) => void;
} | null;

const ColorModeContext = createContext<ColorModeContextType>(null);

export function CustomThemeProvider(props: PropsWithChildren) {
  const [mode, setMode] = useState<ColorMode>("light");

  const setColorMode = useCallback((mode: ColorMode) => {
    setMode(mode);
  }, []);

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(() => {
    let colorMode: ColorMode = "dark";

    if (mode === "system") {
      colorMode = prefersDarkMode ? "dark" : "light";
    } else {
      colorMode = mode;
    }

    return createTheme({
      palette: {
        mode: colorMode,
      },
    });
  }, [prefersDarkMode, mode]);

  return (
    <ColorModeContext.Provider value={{ setColorMode }}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export function useSetColorMode() {
  const context = useContext(ColorModeContext);
  if (context === null) {
    throw "CustomThemeProviderでラップしてください";
  }

  return context.setColorMode;
}
