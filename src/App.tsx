import React, { useEffect } from "react";
import GlobalStyles, { Container } from "./styles/global";
import AppRoutes from "./routes/AppRoutes";

function App() {
  useEffect(() => {
    return () => sessionStorage.clear();
  }, []);

  return (
    <Container>
      <GlobalStyles />
      <AppRoutes />
    </Container>
  );
}

export default App;
