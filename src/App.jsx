import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ForumProvider } from "./context/ForumContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import CalculatorPage from "./pages/CalculatorPage";
import AllCalculators from "./pages/AllCalculators";
import ForumHome from "./pages/ForumHome";
import ScrollToTop from "./ScrollToTop";
import ThreadDetail from "./pages/ThreadDetail";
import UserProfile from "./pages/UserProfile";
import CommunityCategoryPage from "./pages/CommunityCategoryPage"; // Add this import

function App() {
  return (
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

                    {/* Calculator Routes */}
                    <Route path="/:category" element={<CategoryPage />} />
                    <Route path="/:category/:id" element={<CalculatorPage />} />
                    <Route
                      path="/all-calculators"
                      element={<AllCalculators />}
                    />

                    {/* Community Routes - SPECIFIC ROUTES FIRST */}
                    <Route
                      path="/community/category/:categoryId"
                      element={<CommunityCategoryPage />}
                    />
                    <Route
                      path="/community/thread/:id"
                      element={<ThreadDetail />}
                    />
                    <Route
                      path="/community/profile/:userId"
                      element={<UserProfile />}
                    />
                    <Route path="/community" element={<ForumHome />} />
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
  );
}

export default App;
