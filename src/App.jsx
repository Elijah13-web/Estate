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
    <div className=" overflow-hidden font-serif container mx-auto">
      <ScrollToTop />

      <main className="">
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

