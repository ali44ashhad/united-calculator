import { useForum } from "../../context/ForumContext";

export default function ForumStats() {
  const { threads } = useForum();
  const users = JSON.parse(localStorage.getItem("forum_users")) || [];

  // Calculate total posts (threads + replies)
  let totalPosts = threads.length;
  threads.forEach((thread) => {
    totalPosts += thread.replies || 0;
  });

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h3 className="text-xl font-semibold mb-4">Community Statistics</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-4 bg-blue-50 rounded-lg">
          <p className="text-3xl font-bold text-blue-600">{users.length}</p>
          <p className="text-gray-600">Members</p>
        </div>
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <p className="text-3xl font-bold text-green-600">{threads.length}</p>
          <p className="text-gray-600">Threads</p>
        </div>
        <div className="text-center p-4 bg-purple-50 rounded-lg">
          <p className="text-3xl font-bold text-purple-600">{totalPosts}</p>
          <p className="text-gray-600">Posts</p>
        </div>
        <div className="text-center p-4 bg-yellow-50 rounded-lg">
          <p className="text-3xl font-bold text-yellow-600">
            {Math.floor(Math.random() * 50) + 1}
          </p>
          <p className="text-gray-600">Online</p>
        </div>
      </div>
    </div>
  );
}
