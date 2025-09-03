import { useParams, Link } from "react-router-dom";
import { useForum } from "../context/ForumContext";
import UserAvatar from "../components/Forum/UserAvatar";
import ThreadCard from "../components/Forum/ThreadCard";

export default function UserProfile() {
  const { userId } = useParams();
  const { threads } = useForum();
  const users = JSON.parse(localStorage.getItem("forum_users")) || [];

  const user = users.find((u) => u.id === userId);
  const userThreads = threads.filter((t) => t.authorId === userId);
  const userComments = threads.flatMap((t) =>
    (t.comments || []).filter((c) => c.authorId === userId)
  );

  if (!user) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800">User not found</h2>
        <p className="text-gray-600 mt-2">
          The requested user profile does not exist.
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
      {/* User Header */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex items-center">
          <UserAvatar user={user} size="large" />
          <div className="ml-6">
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-gray-600">@{user.username}</p>
            <p className="text-gray-500 mt-2">
              Member since {new Date(user.joinDate).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t">
          <div className="text-center">
            <p className="text-2xl font-bold">{userThreads.length}</p>
            <p className="text-gray-600">Threads</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">{userComments.length}</p>
            <p className="text-gray-600">Comments</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">0</p>
            <p className="text-gray-600">Likes</p>
          </div>
        </div>
      </div>

      {/* User Activity Tabs */}
      <div className="bg-white rounded-xl shadow-md mb-6">
        <div className="border-b">
          <ul className="flex flex-wrap -mb-px">
            <li className="mr-2">
              <button className="inline-block py-4 px-4 text-sm font-medium text-center text-blue-600 border-b-2 border-blue-600">
                Threads ({userThreads.length})
              </button>
            </li>
            <li className="mr-2">
              <button className="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 hover:text-gray-600 border-b-2 border-transparent">
                Comments ({userComments.length})
              </button>
            </li>
            <li className="mr-2">
              <button className="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 hover:text-gray-600 border-b-2 border-transparent">
                Likes (0)
              </button>
            </li>
          </ul>
        </div>

        <div className="p-6">
          {userThreads.length > 0 ? (
            <div className="space-y-4">
              {userThreads
                .slice()
                .reverse()
                .map((thread) => (
                  <ThreadCard key={thread.id} thread={thread} />
                ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <i className="fas fa-file-alt text-4xl mb-4"></i>
              <p>This user hasn't created any threads yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
