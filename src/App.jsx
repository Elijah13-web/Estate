import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import FloatingWhatsApp from "./components/FloatingWhatsApp.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import DocumentsPage from "./pages/DocumentsPage.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col font-serif mx-auto container">
      <ScrollToTop />

      <main className="flex-grow">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
             <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/documents" element={<DocumentsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </main>
       <FloatingWhatsApp />
    </div>
  );
}

export default App;

// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";
// import Index from "./pages/Index";
// import AboutPage from "./pages/AboutPage";
// import ServicesPage from "./pages/ServicesPage";
// import ProjectsPage from "./pages/ProjectsPage";
// import DocumentsPage from "./pages/DocumentsPage";
// import ContactPage from "./pages/ContactPage";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Routes>
//           <Route element={<Layout />}>
//             <Route path="/" element={<Index />} />
//            
//             
//             
//             <Route path="/contact" element={<ContactPage />} />
//           </Route>
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;
