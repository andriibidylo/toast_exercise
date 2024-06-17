import React from "react";
import Container from "@mui/material/Container";

import Header from "./components/Header";
import { Home } from "./pages/Home";
import { QueryClientProvider } from "@tanstack/react-query";
import { setupQueryClient } from "./query/setupQueryClient";
import { useShowError } from "./hooks/useShowError";
import { useMemo } from "react";

const App = () => {

  const { showError, ErrorComponent } = useShowError();

  const queryClient = useMemo(() => setupQueryClient(showError), [showError]);

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Container>
        <Home />
        {ErrorComponent}
      </Container>
    </QueryClientProvider>
  );
};

export default App;
