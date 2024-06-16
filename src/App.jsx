import React from "react";
import Container from "@mui/material/Container";

import Header from "./components/Header";
import { Home } from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Container>
        <Home />
      </Container>
    </QueryClientProvider>
  );
};

export default App;
