import { useParams, Link } from "react-router-dom";
import { useForum } from "../context/ForumContext";
import { useAuth } from "../context/AuthContext";
import CommentForm from "../components/Forum/CommentForm";
import UserAvatar from "../components/Forum/UserAvatar";

export default function ThreadDetail() {
  const { id } = useParams();
  const { threads, addComment } = useForum();
  const { currentUser } = useAuth();

  const thread = threads.find((t) => t.id === id);

  if (!thread) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800">Thread not found</h2>
        <p className="text-gray-600 mt-2">
          The requested discussion thread does not exist.
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
      {/* Thread Content */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            <UserAvatar user={thread} size="large" />
            <div className="ml-4">
              <Link
                to={`/community/profile/${thread.authorId}`}
                className="font-semibold text-lg hover:text-blue-600"
              >
                {thread.author}
              </Link>
              <p className="text-sm text-gray-500">
                {new Date(thread.date).toLocaleDateString()} at{" "}
                {new Date(thread.date).toLocaleTimeString()}
              </p>
            </div>
          </div>
          <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {thread.category}
          </span>
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          {thread.title}
        </h1>

        <div className="prose max-w-none mb-6">
          <p className="whitespace-pre-line">{thread.content}</p>
        </div>

        <div className="flex items-center text-sm text-gray-500 border-t pt-4">
          <button className="flex items-center mr-4 hover:text-blue-500">
            <i className="far fa-thumbs-up mr-1"></i> Like
          </button>
          <button className="flex items-center mr-4 hover:text-blue-500">
            <i className="far fa-comment mr-1"></i> {thread.replies} comments
          </button>
          <button className="flex items-center hover:text-blue-500">
            <i className="far fa-eye mr-1"></i> {thread.views} views
          </button>
        </div>
      </div>

      {/* Comments Section */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Comments ({thread.comments ? thread.comments.length : 0})
        </h2>

        {thread.comments && thread.comments.length > 0 ? (
          <div className="space-y-6">
            {thread.comments.map((comment) => (
              <div
                key={comment.id}
                className="border-b pb-6 last:border-0 last:pb-0"
              >
                <div className="flex items-start mb-4">
                  <UserAvatar user={comment} />
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between items-start">
                      <Link
                        to={`/community/profile/${comment.authorId}`}
                        className="font-semibold hover:text-blue-600"
                      >
                        {comment.author}
                      </Link>
                      <span className="text-sm text-gray-500">
                        {new Date(comment.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-gray-700 mt-2 whitespace-pre-line">
                      {comment.content}
                    </p>

                    <div className="flex items-center text-sm text-gray-500 mt-3">
                      <button className="flex items-center mr-4 hover:text-blue-500">
                        <i className="far fa-thumbs-up mr-1"></i> Like
                      </button>
                      <button className="flex items-center hover:text-blue-500">
                        <i className="fas fa-reply mr-1"></i> Reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            <i className="far fa-comments text-4xl mb-4"></i>
            <p>No comments yet. Be the first to comment!</p>
          </div>
        )}
      </div>

      {/* Comment Form */}
      {currentUser ? (
        <CommentForm threadId={thread.id} />
      ) : (
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <p className="text-gray-600 mb-4">
            You need to be logged in to comment
          </p>
          <Link
            to="/community"
            onClick={() =>
              document.dispatchEvent(
                new CustomEvent("showAuthModal", { detail: "login" })
              )
            }
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Log In
          </Link>
        </div>
      )}
    </div>
  );
}
