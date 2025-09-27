import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/style.scss";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme, lightTheme } from "./pages/widgets/theme";

const Root = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CssBaseline />
      <App isDark={isDark} setIsDark={setIsDark} />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
