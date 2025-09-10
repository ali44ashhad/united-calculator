// import { useState } from "react";
// import { useAuth } from "../contexts/AuthContext";
// import { useForum } from "../contexts/ForumContext";
// import ThreadCard from "../components/Forum/ThreadCard";
// import NewThreadModal from "../components/Forum/NewThreadModal";
// import LoadingSpinner from "../components/UI/LoadingSpinner";

// export default function ForumPage() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const { user } = useAuth();
//   const { threads, loading, createThread } = useForum();

//   const handleCreateThread = async (threadData) => {
//     await createThread(threadData);
//   };

//   if (loading) return <LoadingSpinner />;

//   return (
//     <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-bold text-gray-900">Community Forum</h1>

//         {user && (
//           <button
//             onClick={() => setIsModalOpen(true)}
//             className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
//           >
//             New Thread
//           </button>
//         )}
//       </div>

//       {!user && (
//         <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
//           <p className="text-yellow-800">
//             Please login to create new threads and comment on existing ones.
//           </p>
//         </div>
//       )}

//       <div className="space-y-6">
//         {threads.length === 0 ? (
//           <div className="text-center py-12">
//             <div className="text-6xl mb-4">📝</div>
//             <h3 className="text-xl font-semibold text-gray-600 mb-2">
//               No threads yet
//             </h3>
//             <p className="text-gray-500">Be the first to start a discussion!</p>
//           </div>
//         ) : (
//           threads.map((thread) => (
//             <ThreadCard key={thread._id} thread={thread} />
//           ))
//         )}
//       </div>

//       <NewThreadModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         onCreate={handleCreateThread}
//       />
//     </div>
//   );
// }

import { useState } from "react";
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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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

      {!user && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <p className="text-yellow-800">
            Please login to create new threads and comment on existing ones.
          </p>
        </div>
      )}

      <div className="space-y-6">
        {threads.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No threads yet
            </h3>
            <p className="text-gray-500">Be the first to start a discussion!</p>
          </div>
        ) : (
          threads.map((thread) => (
            <ThreadCard key={thread._id} thread={thread} />
          ))
        )}
      </div>

      <NewThreadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateThread}
      />
    </div>
  );
}
