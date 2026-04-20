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
import About from "./pages/About";
import Contact from "./pages/Contact";
import HandleFamilyPage from "./pages/HandleFamilyPage";
import Handles from "./pages/Handles";
import HandlesShowcase from "./pages/HandlesShowcase";
import Home from "./pages/Home";
import InternalFittings from "./pages/InternalFittings";
import TradePortal from "./pages/TradePortal";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/internal-fittings" component={InternalFittings} />
      <Route path="/about" component={About} />
      <Route path="/trade-portal" component={TradePortal} />
      <Route path="/contact" component={Contact} />
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
