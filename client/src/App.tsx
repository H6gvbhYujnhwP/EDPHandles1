/*
Design reminder for this file: Neo-Atelier Italian Editorial.
Preserve the full website structure with a stable routed shell.
The original homepage must remain at `/`, while the current in-progress editorial build lives at `/handles`.
*/
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import HandleFamilyPage from "./pages/HandleFamilyPage";
import Home from "./pages/Home";
import Handles from "./pages/Handles";
import HandlesShowcase from "./pages/HandlesShowcase";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/handles/catalogue" component={Handles} />
      <Route path="/handles/:slug" component={HandleFamilyPage} />
      <Route path="/handles" component={HandlesShowcase} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
