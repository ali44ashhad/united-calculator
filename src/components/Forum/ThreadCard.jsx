import { Link } from "react-router-dom";

export default function ThreadCard({ thread }) {
  return (
    <Link to={`/community/thread/${thread.id}`}>
      <div className="thread-item bg-white p-4 rounded-lg shadow mb-4 border-l-4 border-blue-500 cursor-pointer hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-1">{thread.title}</h3>
            <div className="flex items-center text-sm text-gray-500">
              <span className="mr-3">By: {thread.author}</span>
              <span className="mr-3">
                <i className="far fa-comment mr-1"></i> {thread.replies || 0}
              </span>
              <span>
                <i className="far fa-eye mr-1"></i> {thread.views || 0}
              </span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
              {thread.category}
            </span>
            <p className="text-sm text-gray-500 mt-2">
              {new Date(thread.date).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
