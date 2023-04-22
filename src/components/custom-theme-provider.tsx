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

const ColorModeContext = createContext({
  setColorMode: (mode: ColorMode) => {},
});

export function CustomThemeProvider({ children }: PropsWithChildren) {
  const [mode, setMode] = useState<ColorMode>("system");

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
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export function useSetColorMode() {
  const setColorMode = useContext(ColorModeContext);
  return setColorMode;
}
