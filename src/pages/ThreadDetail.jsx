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

// import { useState, useEffect } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import { useForum } from "../contexts/ForumContext";
// import ThreadCard from "../components/Forum/ThreadCard";
// import CommentForm from "../components/Forum/CommentForm";
// import LoadingSpinner from "../components/UI/LoadingSpinner";
// import api from "../services/api";

// // Slugify function to create URL-friendly slugs
// function slugify(text) {
//   return text
//     .toString()
//     .toLowerCase()
//     .trim()
//     .replace(/\s+/g, "-")
//     .replace(/[^\w\-]+/g, "")
//     .replace(/\-\-+/g, "-")
//     .replace(/^-+/, "")
//     .replace(/-+$/, "");
// }

// // Function to find a thread by its slug
// function findThreadBySlug(threads, slug) {
//   return threads.find((thread) => {
//     const threadSlug = slugify(thread.title);
//     return threadSlug === slug;
//   });
// }

// export default function ThreadDetail() {
//   const { slug } = useParams();
//   const navigate = useNavigate();
//   const [thread, setThread] = useState(null);
//   const [comments, setComments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const { threads, getThread, createComment } = useForum();

//   useEffect(() => {
//     loadThreadData();
//   }, [slug, threads]);

//   const loadThreadData = async () => {
//     try {
//       setLoading(true);
//       setError("");

//       // Find the thread by slug in the existing threads list
//       const matchedThread = findThreadBySlug(threads, slug);

//       if (!matchedThread) {
//         setError("Thread not found");
//         setLoading(false);
//         return;
//       }

//       // Get the full thread details using the ID
//       const threadData = await getThread(matchedThread._id);
//       setThread(threadData);

//       // Load comments for this thread
//       const commentsResponse = await api.get(
//         `/comments/thread/${matchedThread._id}`
//       );
//       setComments(commentsResponse.data.comments || []);
//     } catch (err) {
//       console.error("Error loading thread:", err);
//       setError(err.response?.data?.message || "Failed to load thread");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleAddComment = async (content) => {
//     if (!thread) return;

//     try {
//       const newComment = await createComment(thread._id, content);
//       setComments((prev) => [...prev, newComment]);

//       // Update the reply count in the thread
//       setThread((prev) => ({
//         ...prev,
//         replies: prev.replies + 1,
//       }));
//     } catch (err) {
//       throw new Error(err.response?.data?.message || "Failed to post comment");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="max-w-4xl mx-auto px-4 py-8">
//         <LoadingSpinner />
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="max-w-4xl mx-auto px-4 py-8">
//         <Link
//           to="/forum"
//           className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
//         >
//           &larr; Back to Forum
//         </Link>
//         <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">
//           <p className="font-medium">Error loading thread</p>
//           <p>{error}</p>
//         </div>
//       </div>
//     );
//   }

//   if (!thread) {
//     return (
//       <div className="max-w-4xl mx-auto px-4 py-8">
//         <Link
//           to="/forum"
//           className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
//         >
//           &larr; Back to Forum
//         </Link>
//         <div className="text-center py-12">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">
//             Thread Not Found
//           </h2>
//           <p className="text-gray-600">
//             The thread you're looking for doesn't exist.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-8">
//       {/* Navigation */}
//       <Link
//         to="/forum"
//         className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
//       >
//         <svg
//           className="w-5 h-5 mr-2"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M10 19l-7-7m0 0l7-7m-7 7h18"
//           />
//         </svg>
//         Back to Forum
//       </Link>

//       {/* Thread Content */}
//       <ThreadCard thread={thread} full={true} />

//       {/* Comments Section */}
//       <div className="mt-12">
//         <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b">
//           Comments ({thread.replies || 0})
//         </h2>

//         {/* Comment Form */}
//         <div className="mb-8">
//           <CommentForm
//             threadId={thread._id}
//             onCommentAdded={handleAddComment}
//           />
//         </div>

//         {/* Comments List */}
//         {comments.length === 0 ? (
//           <div className="bg-gray-50 rounded-lg p-8 text-center">
//             <div className="text-gray-400 mb-3">
//               <svg
//                 className="w-12 h-12 mx-auto"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={1.5}
//                   d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
//                 />
//               </svg>
//             </div>
//             <p className="text-gray-500">
//               No comments yet. Be the first to share your thoughts!
//             </p>
//           </div>
//         ) : (
//           <div className="space-y-6">
//             {comments.map((comment) => (
//               <div
//                 key={comment._id}
//                 className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm"
//               >
//                 <div className="flex items-start space-x-4">
//                   <div className="flex-shrink-0">
//                     <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
//                       {comment.author?.name?.charAt(0)?.toUpperCase() || "U"}
//                     </div>
//                   </div>
//                   <div className="flex-1 min-w-0">
//                     <div className="flex items-baseline space-x-2 mb-2">
//                       <h4 className="font-semibold text-gray-900 truncate">
//                         {comment.author?.name || "Unknown User"}
//                       </h4>
//                       <span className="text-xs text-gray-500">
//                         {new Date(comment.createdAt).toLocaleDateString(
//                           "en-US",
//                           {
//                             year: "numeric",
//                             month: "short",
//                             day: "numeric",
//                             hour: "2-digit",
//                             minute: "2-digit",
//                           }
//                         )}
//                       </span>
//                     </div>
//                     <p className="text-gray-700 whitespace-pre-wrap">
//                       {comment.content}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useForum } from "../contexts/ForumContext";
import ThreadCard from "../components/Forum/ThreadCard";
import CommentForm from "../components/Forum/CommentForm";
import LoadingSpinner from "../components/UI/LoadingSpinner";

export default function ThreadDetail() {
  const { slug } = useParams();
  const [thread, setThread] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { getThread, createComment } = useForum();
  const navigate = useNavigate();

  useEffect(() => {
    loadThread();
  }, [slug]);

  const loadThread = async () => {
    try {
      setLoading(true);
      // Extract ID from slug (last part after last dash)
      const id = slug.split("-").pop();

      const threadData = await getThread(id);
      setThread(threadData);
    } catch (err) {
      setError(err.message || "Failed to load thread");
      console.error("Error loading thread:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddComment = async (content) => {
    if (!thread) return;
    try {
      await createComment(thread._id, content);
      await loadThread(); // refresh after comment
    } catch (err) {
      console.error("Post Comment error", err);
      throw err; // Re-throw to handle in CommentForm
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error)
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="text-red-600 mb-4">{error}</div>
        <Link to="/forum" className="text-blue-500 hover:text-blue-700">
          ← Back to Forum
        </Link>
      </div>
    );
  if (!thread) return <div className="text-center py-12">Thread not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        to="/forum"
        className="text-blue-500 hover:text-blue-700 mb-6 inline-block"
      >
        ← Back to Forum
      </Link>

      <ThreadCard thread={thread} full={true} />

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-6">
          Comments ({thread.comments?.length || 0})
        </h2>

        <CommentForm threadId={thread._id} onCommentAdded={handleAddComment} />

        <div className="mt-8 space-y-6">
          {thread.comments?.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <p>No comments yet. Be the first to comment!</p>
            </div>
          ) : (
            thread.comments.map((comment) => (
              <div
                key={comment._id}
                className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {comment.author?.name?.charAt(0)?.toUpperCase() || "U"}
                    </div>
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
