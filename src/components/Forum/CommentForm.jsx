// import { useState } from "react";
// import { useAuth } from "../../contexts/AuthContext";

// export default function CommentForm({ threadId, onCommentAdded }) {
//   const [content, setContent] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const { user } = useAuth();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!content.trim()) return;

//     setLoading(true);
//     setError("");

//     try {
//       // This will be implemented in the parent component
//       await onCommentAdded(content);
//       setContent("");
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!user) {
//     return (
//       <div className="bg-white p-4 rounded-lg shadow-md">
//         <p className="text-gray-600">Please login to leave a comment</p>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow">
//       <h3 className="text-lg font-semibold mb-3">Leave a comment</h3>

//       {error && (
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//           {error}
//         </div>
//       )}

//       <form onSubmit={handleSubmit}>
//         <textarea
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           placeholder="Write your comment here..."
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           rows="4"
//           required
//         />

//         <button
//           type="submit"
//           disabled={loading || !content.trim()}
//           className="mt-3 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors "
//         >
//           {loading ? "Posting..." : "Post Comment"}
//         </button>
//       </form>
//     </div>
//   );
// }

import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

export default function CommentForm({ threadId, onCommentAdded }) {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    setLoading(true);
    setError("");

    try {
      await onCommentAdded(content);
      setContent("");
    } catch (err) {
      setError(err.message || "Failed to post comment");
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <p className="text-gray-600">Please login to leave a comment</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow">
      <h3 className="text-lg font-semibold mb-3">Leave a comment</h3>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your comment here..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          required
        />

        <button
          type="submit"
          disabled={loading || !content.trim()}
          className="mt-3 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          {loading ? "Posting..." : "Post Comment"}
        </button>
      </form>
    </div>
  );
}
