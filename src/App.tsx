import React from "react";
import GlobalStyles, { Container } from "./styles/global";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Container>
      <GlobalStyles />
      <AppRoutes />
    </Container>
  );
}

export default App;
