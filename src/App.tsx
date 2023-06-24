import { globalStyle } from "./styles/GlobalStyle";
import { Global } from "@emotion/react";
import { QueryClientProvider, QueryClient } from "react-query";
import { SDSThemeProvider } from "@semicolondsm/react-emotion-theme";
import MainPage from "./pages/main";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: 1000,
      refetchInterval: 0,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <SDSThemeProvider mode="light-only">
      <QueryClientProvider client={queryClient}>
        <Global styles={globalStyle} />
        <MainPage />
      </QueryClientProvider>
    </SDSThemeProvider>
  );
}

export default App;
