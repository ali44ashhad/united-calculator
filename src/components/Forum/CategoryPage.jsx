import { useParams } from "react-router-dom";
import { useForum } from "../context/ForumContext";
import ThreadCard from "../component/Forum/ThreadCard";

export default function CategoryPage() {
  const { categoryId } = useParams();
  const { categories, threads } = useForum();

  const category = categories.find((c) => c.id === categoryId);
  const categoryThreads = threads.filter((t) => t.categoryId === categoryId);

  if (!category) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800">Category not found</h2>
        <p className="text-gray-600 mt-2">
          The requested category does not exist.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg mb-6">
        <div className="flex items-center">
          <i className={`${category.icon} text-3xl mr-4`}></i>
          <div>
            <h1 className="text-3xl font-bold">{category.title}</h1>
            <p className="mt-2">{category.description}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Discussions</h2>
          <span className="text-gray-500">
            {categoryThreads.length} threads
          </span>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-4">
        {categoryThreads.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <i className="fas fa-comments text-4xl mb-4"></i>
            <p>
              No discussions yet in this category. Be the first to start a
              topic!
            </p>
          </div>
        ) : (
          categoryThreads
            .slice()
            .reverse()
            .map((thread) => <ThreadCard key={thread.id} thread={thread} />)
        )}
      </div>
    </div>
  );
}
