import { useParams, Link } from "react-router-dom";
import { useForum } from "../context/ForumContext";
import { useAuth } from "../context/AuthContext";
import ThreadCard from "../components/Forum/ThreadCard";
import AuthModal from "../components/Forum/AuthModal";
import { useState } from "react";

export default function CommunityCategoryPage() {
  const { categoryId } = useParams();
  const { categories, threads } = useForum();
  const { currentUser } = useAuth();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState("login");

  const category = categories.find((c) => c.id === categoryId);
  const categoryThreads = threads.filter((t) => t.categoryId === categoryId);

  const showAuthModal = (mode) => {
    setAuthModalMode(mode);
    setAuthModalOpen(true);
  };

  if (!category) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800">Category not found</h2>
        <p className="text-gray-600 mt-2">
          The requested category does not exist.
        </p>
        <Link
          to="/community"
          className="text-blue-500 hover:underline mt-4 inline-block"
        >
          ← Back to Community
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Category Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg mb-6">
        <div className="flex items-center">
          <i className={`${category.icon} text-3xl mr-4`}></i>
          <div>
            <h1 className="text-3xl font-bold">{category.title}</h1>
            <p className="mt-2">{category.description}</p>
          </div>
        </div>
      </div>

      {/* Threads Header */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Discussions</h2>
          <div className="flex items-center space-x-4">
            <span className="text-gray-500">
              {categoryThreads.length} threads
            </span>
            {currentUser ? (
              <Link
                to="/community"
                onClick={(e) => {
                  e.preventDefault();
                  // You'll need to implement a way to pre-select the category
                  // in the new topic modal
                  document.dispatchEvent(
                    new CustomEvent("showNewTopicModal", {
                      detail: { categoryId },
                    })
                  );
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                New Topic
              </Link>
            ) : (
              <button
                onClick={() => showAuthModal("login")}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Login to Post
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Threads List */}
      <div className="bg-white rounded-xl shadow-md p-4">
        {categoryThreads.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <i className="fas fa-comments text-4xl mb-4"></i>
            <p>
              No discussions yet in this category. Be the first to start a
              topic!
            </p>
            {!currentUser && (
              <button
                onClick={() => showAuthModal("register")}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 transition"
              >
                Register to Get Started
              </button>
            )}
          </div>
        ) : (
          categoryThreads
            .slice()
            .reverse()
            .map((thread) => <ThreadCard key={thread.id} thread={thread} />)
        )}
      </div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authModalMode}
      />
    </div>
  );
}
