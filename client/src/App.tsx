import { Switch, Route } from "wouter";
import { AnimatePresence } from "framer-motion";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import ConnectivityPage from "@/pages/connectivity";
import CloudServicesPage from "@/pages/cloud-services";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";
import IndustriesPage from "@/pages/industries";
import GetQuotePage from "@/pages/get-quote";
import SecurityPage from "@/pages/security";
import HardwarePage from "@/pages/hardware";
import ValueServicesPage from "@/pages/value-services";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <AnimatePresence mode="wait">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/connectivity" component={ConnectivityPage} />
        <Route path="/cloud-services" component={CloudServicesPage} />
        <Route path="/security" component={SecurityPage} />
        <Route path="/hardware" component={HardwarePage} />
        <Route path="/value-services" component={ValueServicesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/industries" component={IndustriesPage} />
        <Route path="/get-quote" component={GetQuotePage} />
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
