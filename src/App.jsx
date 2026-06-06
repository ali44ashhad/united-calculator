import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ScrollToTop from "./ScrollToTop";
import ErrorBoundary from "./components/UI/ErrorBoundary";

const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const CalculatorPage = lazy(() => import("./pages/CalculatorPage"));
const AllCalculators = lazy(() => import("./pages/AllCalculators"));
const About = lazy(() => import("./pages/About"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <div className="bg-background text-on-background min-h-screen flex flex-col">
          <Header />

          <div className="flex-1">
            <Suspense fallback={null}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/all-calculators" element={<AllCalculators />} />
                <Route path="/:category" element={<CategoryPage />} />
                <Route path="/:category/:id" element={<CalculatorPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </div>

          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
