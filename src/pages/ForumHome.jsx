import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useForum } from "../context/ForumContext";
import ForumHeader from "../components/Forum/ForumHeader";
import ForumStats from "../components/Forum/ForumStats";
import CategoryCard from "../components/Forum/CategoryCard";
import ThreadCard from "../components/Forum/ThreadCard";
import AuthModal from "../components/Forum/AuthModal";
import NewTopicModal from "../components/Forum/NewTopicModal";
import CategoryList from "../components/Forum/CategoryList";

export default function ForumHome() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState("login");
  const [newTopicModalOpen, setNewTopicModalOpen] = useState(false);

  const { currentUser } = useAuth();
  const { categories, threads } = useForum();

  const showAuthModal = (mode) => {
    setAuthModalMode(mode);
    setAuthModalOpen(true);
  };

  const showNewTopicModal = () => {
    if (!currentUser) {
      showAuthModal("login");
      return;
    }
    setNewTopicModalOpen(true);
  };

  return (
    <div>
      <ForumHeader />
      <ForumStats />

      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Discussion Categories
          </h2>
          <button
            onClick={showNewTopicModal}
            className="text-blue-500 hover:text-blue-700 flex items-center"
          >
            <i className="fas fa-plus mr-2"></i> New Topic
          </button>
        </div>

        <CategoryList categories={categories} />
      </section>

      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Recent Discussions
          </h2>
          <button className="text-blue-500 hover:text-blue-700">
            View All
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4">
          {threads.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <i className="fas fa-comments text-4xl mb-4"></i>
              <p>No discussions yet. Be the first to start a topic!</p>
            </div>
          ) : (
            threads
              .slice()
              .reverse()
              .map((thread) => <ThreadCard key={thread.id} thread={thread} />)
          )}
        </div>
      </section>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authModalMode}
      />

      <NewTopicModal
        isOpen={newTopicModalOpen}
        onClose={() => setNewTopicModalOpen(false)}
      />
    </div>
  );
}
