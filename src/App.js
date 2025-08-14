import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ScrollToTopButton from "./components/ScrollToTopButton";
import WhatsAppFloatingIcon from "./components/WhatsAppButton";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Manufacturing from "./pages/Manufacturing";
import IndustriesServed from "./pages/Industries Served";
import Gallary from "./pages/Gallary";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GetQuote from "./pages/Get a Quote";
import NotFound from "./pages/NotFound";

// Product detail pages
import TorsionSpringPage from "./pages/TorsionSpringPage";
import WireFormPage from "./pages/WireFormPage";
import ExtensionSpringPage from "./pages/ExtensionSpringPage";
import ConicalSpringPage from "./pages/ConicalSpringPage";
import CompressionSpringPage from "./pages/CompressionSpringPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Sidebar />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          
          {/* Product details routes */}
          <Route path="/products/torsion" element={<TorsionSpringPage />} />
          <Route path="/products/wireform" element={<WireFormPage />} />
          <Route path="/products/extension" element={<ExtensionSpringPage />} />
          <Route path="/products/conical" element={<ConicalSpringPage />} />
          <Route path="/products/compression" element={<CompressionSpringPage />} />

          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/industries-served" element={<IndustriesServed />} />
          <Route path="/gallary" element={<Gallary />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-quote" element={<GetQuote />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      <WhatsAppFloatingIcon />
      <ScrollToTopButton />
    </Router>
  );
}

export default App;
