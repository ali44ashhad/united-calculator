// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./contexts/AuthContext";
// import { ForumProvider } from "./contexts/ForumContext";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Sidebar from "./components/Sidebar";
// import Home from "./pages/Home";
// import CategoryPage from "./pages/CategoryPage";
// import CalculatorPage from "./pages/CalculatorPage";
// import AllCalculators from "./pages/AllCalculators";
// import ScrollToTop from "./ScrollToTop";
// import ThreadDetail from "./pages/ThreadDetail";
// import ForumPage from "./pages/ForumPage";
// import NotFound from "./pages/NotFound";
// import ErrorBoundary from "./components/UI/ErrorBoundary";

// function App() {
//   return (
//     <ErrorBoundary>
//       <AuthProvider>
//         <ForumProvider>
//           <Router>
//             <ScrollToTop />
//             <div className="bg-white text-gray-800 min-h-screen flex flex-col">
//               <Header />

//               <div className="flex flex-1 justify-center">
//                 <div className="w-full max-w-[1150px] flex flex-col md:flex-row gap-4 px-4 py-6">
//                   <main className="flex-1">
//                     <Routes>
//                       {/* Home Route */}
//                       <Route path="/" element={<Home />} />

//                       {/* Calculator Routes */}
//                       <Route path="/:category" element={<CategoryPage />} />
//                       <Route
//                         path="/:category/:id"
//                         element={<CalculatorPage />}
//                       />
//                       <Route
//                         path="/all-calculators"
//                         element={<AllCalculators />}
//                       />

//                       {/* Community Routes - SPECIFIC ROUTES FIRST */}
//                       <Route path="/thread" element={<ForumPage />} />
//                       {/* <Route path="/thread/:id" element={<ThreadDetail />} /> */}
//                       <Route path="/thread/:slug" element={<ThreadDetail />} />
//                       <Route path="*" element={<NotFound />} />
//                     </Routes>
//                   </main>
//                   <Sidebar />
//                 </div>
//               </div>

//               <Footer />
//             </div>
//           </Router>
//         </ForumProvider>
//       </AuthProvider>
//     </ErrorBoundary>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ForumProvider } from "./contexts/ForumContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import CalculatorPage from "./pages/CalculatorPage";
import AllCalculators from "./pages/AllCalculators";
import ScrollToTop from "./ScrollToTop";
import ThreadDetail from "./pages/ThreadDetail";
import ForumPage from "./pages/ForumPage";
import NotFound from "./pages/NotFound";
import ErrorBoundary from "./components/UI/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <ForumProvider>
          <Router>
            <ScrollToTop />
            <div className="bg-white text-gray-800 min-h-screen flex flex-col">
              <Header />

              <div className="flex flex-1 justify-center">
                <div className="w-full max-w-[1150px] flex flex-col md:flex-row gap-4 px-4 py-6">
                  <main className="flex-1">
                    <Routes>
                      {/* Home Route */}
                      <Route path="/" element={<Home />} />

                      {/* Forum Routes - SPECIFIC ROUTES FIRST */}
                      <Route path="/forum" element={<ForumPage />} />
                      <Route path="/thread/:slug" element={<ThreadDetail />} />

                      {/* Calculator Routes */}
                      <Route path="/:category" element={<CategoryPage />} />
                      <Route
                        path="/:category/:id"
                        element={<CalculatorPage />}
                      />
                      <Route
                        path="/all-calculators"
                        element={<AllCalculators />}
                      />

                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </main>
                  <Sidebar />
                </div>
              </div>

              <Footer />
            </div>
          </Router>
        </ForumProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
