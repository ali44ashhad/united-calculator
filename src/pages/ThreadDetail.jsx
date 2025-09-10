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
import { useParams, Link, useNavigate } from "react-router-dom";
import { useForum } from "../contexts/ForumContext";
import ThreadCard from "../components/Forum/ThreadCard";
import CommentForm from "../components/Forum/CommentForm";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { getThreadBySlug } from "../services/api"; // ✅ Naya import

// ✅ Improved Slugify Function - Special characters handle karta hai
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD") // Special characters ko decompose karein (é -> e + ´)
    .replace(/[\u0300-\u036f]/g, "") // Combining diacritical marks hata dein
    .trim()
    .replace(/[^a-z0-9\s-]/g, "") // Alphabet, numbers, space, hyphen ke alawa sab hata dein
    .replace(/[\s—–-]+/g, "-") // spaces, em-dash, en-dash aur hyphens → single hyphen
    .replace(/^-+|-+$/g, ""); // start/end ke hyphens hata dein
}

export default function ThreadDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [thread, setThread] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { threads, getThread, createComment, fetchThreads } = useForum();

  useEffect(() => {
    loadThread();
  }, [slug]);

  const loadThread = async () => {
    try {
      setLoading(true);
      setError("");

      // ✅ Pehle threads list se match karein
      let matchedThread = threads.find((t) => slugify(t.title) === slug);

      // ✅ Agar thread list mein nahi mila, toh threads ko fetch karein
      if (!matchedThread && threads.length === 0) {
        await fetchThreads();
        matchedThread = threads.find((t) => slugify(t.title) === slug);
      }

      // ✅ Phir bhi nahi mila toh direct API se try karein
      if (!matchedThread) {
        try {
          const response = await getThreadBySlug(slug);
          if (response.data.success) {
            setThread(response.data.thread);
            return;
          }
        } catch (apiError) {
          console.log("Direct API call failed, trying fallback...");
        }

        // ✅ Last try: Pure threads list se manually dhundhein
        const allThreads = await fetchAllThreads();
        matchedThread = allThreads.find((t) => slugify(t.title) === slug);

        if (!matchedThread) {
          setError("Thread not found");
          return;
        }
      }

      // ✅ Finally thread data load karein
      const threadData = await getThread(matchedThread._id);
      setThread(threadData);
    } catch (err) {
      setError(
        err.response?.data?.message || err.message || "Failed to load thread"
      );
      console.error("Load Thread Error:", err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Agar threads list empty hai toh fetch karne ke liye function
  const fetchAllThreads = async () => {
    try {
      const response = await api.get("/threads?limit=1000");
      return response.data.threads || [];
    } catch (error) {
      console.error("Error fetching all threads:", error);
      return [];
    }
  };

  const handleAddComment = async (content) => {
    if (!thread) return;
    try {
      await createComment(thread._id, content);
      await loadThread(); // refresh after comment
    } catch (err) {
      console.error("Post Comment error", err);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center text-red-600 mb-4">{error}</div>
        <div className="text-center">
          <button
            onClick={() => navigate("/forum")}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Back to Forum
          </button>
        </div>
      </div>
    );
  }

  if (!thread) return <div className="text-center py-12">Thread not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back to forum */}
      <Link
        to="/forum"
        className="text-blue-500 hover:text-blue-700 mb-6 inline-block"
      >
        ← Back to Forum
      </Link>

      {/* Full thread details */}
      <ThreadCard thread={thread} full={true} />

      {/* Comments Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-6">
          Comments ({thread.comments?.length || 0})
        </h2>

        {/* Comment Form */}
        <CommentForm threadId={thread._id} onCommentAdded={handleAddComment} />

        {/* Comment List */}
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
