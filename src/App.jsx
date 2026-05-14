import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import CalculatorPage from "./pages/CalculatorPage";
import AllCalculators from "./pages/AllCalculators";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import ScrollToTop from "./ScrollToTop";
import NotFound from "./pages/NotFound";
import ErrorBoundary from "./components/UI/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <div className="bg-background text-on-background min-h-screen flex flex-col">
          <Header />

          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/all-calculators" element={<AllCalculators />} />
              {/* Calculator routes (after static paths so /all-calculators etc. match first) */}
              <Route path="/:category" element={<CategoryPage />} />
              <Route path="/:category/:id" element={<CalculatorPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Sidebar from "./components/Sidebar";
// import Home from "./pages/Home";
// import CategoryPage from "./pages/CategoryPage";
// import CalculatorPage from "./pages/CalculatorPage";
// import AllCalculators from "./pages/AllCalculators";
// import ScrollToTop from "./ScrollToTop";
// import NotFound from "./pages/NotFound";
// import ErrorBoundary from "./components/UI/ErrorBoundary";

// function App() {
//   return (
//     <ErrorBoundary>
//       <Router>
//         <ScrollToTop />
//         <div className="bg-white text-gray-800 min-h-screen flex flex-col">
//           <Header />

//           <div className="flex flex-1 justify-center">
//             <div className="w-full max-w-[1150px] flex flex-col md:flex-row gap-4 px-4 py-6">
//               <main className="flex-1">
//                 <Routes>
//                   {/* Main Routes */}
//                   <Route path="/" element={<Home />} />

//                   {/* Calculator Routes */}
//                   <Route path="/:category" element={<CategoryPage />} />
//                   <Route path="/:category/:id" element={<CalculatorPage />} />
//                   <Route path="/all-calculators" element={<AllCalculators />} />

//                   {/* Fallback */}
//                   <Route path="*" element={<NotFound />} />
//                 </Routes>
//               </main>

//               <Sidebar />
//             </div>
//           </div>

//           <Footer />
//         </div>
//       </Router>
//     </ErrorBoundary>
//   );
// }

// export default App;
