// import { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import { useForum } from "../contexts/ForumContext";
// import ThreadCard from "../components/Forum/ThreadCard";
// import CommentForm from "../components/Forum/CommentForm";
// import LoadingSpinner from "../components/UI/LoadingSpinner";

// // Slugify function to match URL
// function slugify(text) {
//   return text
//     .toString()
//     .toLowerCase()
//     .trim()
//     .replace(/[\s\W-]+/g, "-")
//     .replace(/^-+|-+$/g, "");
// }

// export default function ThreadDetail() {
//   const { slug } = useParams();
//   const [thread, setThread] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const { threads, getThread, createComment } = useForum();

//   useEffect(() => {
//     loadThread();
//   }, [slug]);

//   const loadThread = async () => {
//     try {
//       setLoading(true);
//       const matchedThread = threads.find((t) => slugify(t.title) === slug);
//       if (!matchedThread) {
//         setError("Thread not found");
//         return;
//       }
//       const threadData = await getThread(matchedThread._id);
//       setThread(threadData);
//     } catch (err) {
//       setError(err.message || "Failed to load thread");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleAddComment = async (content) => {
//     if (!thread) return;
//     try {
//       await createComment(thread._id, content);
//       await loadThread(); // refresh after comment
//     } catch (err) {
//       console.error("Post Comment error", err);
//     }
//   };

//   if (loading) return <LoadingSpinner />;
//   if (error)
//     return <div className="text-center py-12 text-red-600">{error}</div>;
//   if (!thread) return <div className="text-center py-12">Thread not found</div>;

//   return (
//     <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       {/* Back to forum */}
//       <Link
//         to="/forum"
//         className="text-blue-500 hover:text-blue-700 mb-6 inline-block"
//       >
//         ← Back to Forum
//       </Link>

//       {/* Full thread details */}
//       <ThreadCard thread={thread} full={true} />

//       {/* Comments Section */}
//       <div className="mt-8">
//         <h2 className="text-2xl font-semibold mb-6">
//           Comments ({thread.comments?.length || 0})
//         </h2>

//         {/* Comment Form */}
//         <CommentForm threadId={thread._id} onCommentAdded={handleAddComment} />

//         {/* Comment List */}
//         <div className="mt-8 space-y-6">
//           {thread.comments?.length === 0 ? (
//             <div className="text-center py-8 text-gray-500">
//               <p>No comments yet. Be the first to comment!</p>
//             </div>
//           ) : (
//             thread.comments.map((comment) => (
//               <div
//                 key={comment._id}
//                 className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow"
//               >
//                 <div className="flex items-start space-x-4">
//                   <div className="flex-shrink-0">
//                     <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
//                       {comment.author?.name?.charAt(0)?.toUpperCase() || "U"}
//                     </div>
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex items-center space-x-2 mb-2">
//                       <span className="font-semibold text-gray-900">
//                         {comment.author?.name || "Unknown"}
//                       </span>
//                       <span className="text-sm text-gray-500">
//                         {new Date(comment.createdAt).toLocaleDateString()}
//                       </span>
//                     </div>
//                     <p className="text-gray-700">{comment.content}</p>
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ThreadCard from "../components/Forum/ThreadCard";
import CommentForm from "../components/Forum/CommentForm";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import api from "../services/api";

export default function ThreadDetail() {
  const { slug } = useParams();
  const [thread, setThread] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadThread();
  }, [slug]);

  const loadThread = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/threads/slug/${slug}`);
      setThread(response.data.thread);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load thread");
      console.error("Error loading thread:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddComment = async (content) => {
    if (!thread) return;

    try {
      const response = await api.post(`/comments/thread/${thread._id}`, {
        content,
      });

      // Refresh the thread to get updated comments
      await loadThread();
    } catch (err) {
      throw new Error(err.response?.data?.message || "Failed to post comment");
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link
          to="/forum"
          className="text-blue-500 hover:text-blue-700 mb-6 inline-block"
        >
          ← Back to Forum
        </Link>
        <div className="text-center py-12 text-red-600 bg-red-50 rounded-lg p-4">
          {error}
        </div>
      </div>
    );
  }

  if (!thread) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link
          to="/forum"
          className="text-blue-500 hover:text-blue-700 mb-6 inline-block"
        >
          ← Back to Forum
        </Link>
        <div className="text-center py-12">Thread not found</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link
        to="/forum"
        className="text-blue-500 hover:text-blue-700 mb-6 inline-block"
      >
        ← Back to Forum
      </Link>

      <ThreadCard thread={thread} full={true} />

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-6">
          Comments ({thread.replies || 0})
        </h2>

        <CommentForm threadId={thread._id} onCommentAdded={handleAddComment} />

        <div className="mt-8 space-y-6">
          {thread.comments?.length === 0 ? (
            <div className="text-center py-8 text-gray-500 bg-gray-50 rounded-lg">
              <p>No comments yet. Be the first to comment!</p>
            </div>
          ) : (
            thread.comments.map((comment) => (
              <div
                key={comment._id}
                className="bg-white border border-gray-200 p-4 rounded-lg"
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {comment.author?.name?.charAt(0)?.toUpperCase() || "U"}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-semibold text-gray-900">
                        {comment.author?.name || "Unknown"}
                      </span>
                      <span className="text-sm text-gray-500">
                        {new Date(comment.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-gray-700">{comment.content}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
