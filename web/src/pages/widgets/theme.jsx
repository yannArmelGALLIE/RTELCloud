import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#0A0A23" },
    background: { default: "#0A0A23", paper: "#1D2951" },
    text: { primary: "#ffffff" },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#0A0A23" },
    background: { default: "#ffffff", paper: "#f5f5f5" },
    text: { primary: "#0A0A23" },
  },
});


