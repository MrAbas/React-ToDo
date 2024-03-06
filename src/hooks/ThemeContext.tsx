import { useContext } from "react";
import ThemeContext from "../providers/ThemeProvider";

export const useThemeContext = () => useContext(ThemeContext);
