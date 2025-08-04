import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import CalculatorPage from "./pages/CalculatorPage";
import AllCalculators from "./pages/AllCalculators";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-white text-gray-800 min-h-screen flex flex-col">
        <Header />

        <div className="flex flex-1 justify-center">
          <div className="w-full max-w-[1150px] flex flex-col md:flex-row gap-4 px-4 py-6">
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:category" element={<CategoryPage />} />
                <Route path="/:category/:id" element={<CalculatorPage />} />
                <Route path="/all-calculators" element={<AllCalculators />} />
              </Routes>
            </main>
            <Sidebar />
          </div>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
