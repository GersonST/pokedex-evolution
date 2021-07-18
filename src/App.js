import React from "react";
import Routes from "./routes";
import { ThemeProvider } from "styled-components";

import theme from "./styles/theme/index";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
