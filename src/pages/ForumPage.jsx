import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useAuth } from "../contexts/AuthContext";
import { useForum } from "../contexts/ForumContext";
import ThreadCard from "../components/Forum/ThreadCard";
import NewThreadModal from "../components/Forum/NewThreadModal";
import LoadingSpinner from "../components/UI/LoadingSpinner";

export default function ForumPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useAuth();
  const { threads, loading, createThread } = useForum();

  const handleCreateThread = async (threadData) => {
    await createThread(threadData);
  };

  if (loading) return <LoadingSpinner />;

  return (
    <main className="  mx-auto   py-8">
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Community Forum | United Calculator</title>
        <meta
          name="description"
          content="Join the United Calculator Community Forum. Start new discussions, ask questions, and share knowledge about finance, calculators, and tools."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.unitedcalculator.net/thread" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Community Forum | United Calculator"
        />
        <meta
          property="og:description"
          content="Discover discussions, ask questions, and share insights in the United Calculator Forum."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/thread"
        />
        <meta
          name="twitter:title"
          content="Community Forum | United Calculator"
        />
        <meta
          name="twitter:description"
          content="Engage in conversations about finance and calculators. Join the United Calculator Forum today."
        />

        {/* ✅ Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DiscussionForum",
            name: "United Calculator Community Forum",
            description:
              "Join discussions, share knowledge, and ask questions about finance, calculators, and tools.",
            url: "https://www.unitedcalculator.net/thread",
            discussionUrl: "https://www.unitedcalculator.net/thread",
            potentialAction: {
              "@type": "CreateAction",
              target: "https://www.unitedcalculator.net/thread",
              result: {
                "@type": "DiscussionForumPosting",
                name: "Start a new discussion",
              },
            },
          })}
        </script>
      </Helmet>

      {/* Page Heading */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Community Forum</h1>

        {user && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            New Thread
          </button>
        )}
      </div>

      {/* Login Notice */}
      {!user && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <p className="text-yellow-800">
            Please login to create new threads and comment on existing ones.
          </p>
        </div>
      )}

      {/* Threads List */}
      <section aria-label="Forum Threads" className="space-y-6">
        {threads.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📝</div>
            <h2 className="text-xl font-semibold text-gray-600 mb-2">
              No threads yet
            </h2>
            <p className="text-gray-500">Be the first to start a discussion!</p>
          </div>
        ) : (
          threads.map((thread) => (
            <article key={thread._id}>
              <ThreadCard thread={thread} />
            </article>
          ))
        )}
      </section>

      {/* Modal */}
      <NewThreadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateThread}
      />
    </main>
  );
}
