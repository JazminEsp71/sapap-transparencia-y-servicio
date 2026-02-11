import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Transparencia from "./pages/Transparencia";
import Leyes from "./pages/Leyes";
import Tramites from "./pages/Tramites";
import PagoEnLinea from "./pages/PagoEnLinea";
import Contacto from "./pages/Contacto";
import Conocenos from "./pages/Conocenos";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/transparencia" element={<Transparencia />} />
          <Route path="/leyes" element={<Leyes />} />
          <Route path="/tramites" element={<Tramites />} />
          <Route path="/pago" element={<PagoEnLinea />} />
          <Route path="/conocenos" element={<Conocenos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
