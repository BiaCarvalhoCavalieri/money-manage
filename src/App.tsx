import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./themes/default";
import { GlobalStyle } from "./styes/global";
import { Transactions } from "./pages/Transactions";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Transactions />
    </ThemeProvider>
  );
}
