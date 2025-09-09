// import { Link } from "react-router-dom";

// export default function ThreadCard({ thread }) {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
//       <Link to={`/thread/${thread._id}`}>
//         <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600">
//           {thread.title}
//         </h3>
//       </Link>

//       <p className="text-gray-600 mb-4 line-clamp-2">{thread.content}</p>

//       <div className="flex items-center justify-between text-sm text-gray-500">
//         <span>By {thread.author?.name || "Unknown"}</span>
//         <div className="flex items-center space-x-4">
//           <span>{thread.views} views</span>
//           <span>{thread.replies} replies</span>
//           <span>{new Date(thread.createdAt).toLocaleDateString()}</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { Link } from "react-router-dom";

// // Slugify function inside ThreadCard
// function slugify(text) {
//   return text
//     .toString()
//     .toLowerCase()
//     .trim()
//     .replace(/[\s\W-]+/g, "-"); // spaces & special chars ko "-" me convert
// }

// export default function ThreadCard({ thread }) {
//   const slug = `${slugify(thread.title)}-${thread._id}`;

//   return (
//     <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
//       <Link to={`/thread/${slug}`}>
//         <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600">
//           {thread.title}
//         </h3>
//       </Link>

//       <p className="text-gray-600 mb-4 line-clamp-2">{thread.content}</p>

//       <div className="flex items-center justify-between text-sm text-gray-500">
//         <span>By {thread.author?.name || "Unknown"}</span>
//         <div className="flex items-center space-x-4">
//           <span>{thread.views} views</span>
//           <span>{thread.replies} replies</span>
//           <span>{new Date(thread.createdAt).toLocaleDateString()}</span>
//         </div>
//       </div>
//     </div>
//   );
// }
import { Link } from "react-router-dom";

// Slugify function inside ThreadCard
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-") // spaces & special chars → "-"
    .replace(/^-+|-+$/g, ""); // remove leading & trailing hyphens
}

export default function ThreadCard({ thread }) {
  const slug = slugify(thread.title);

  return (
    <div className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow">
      <Link to={`/thread/${slug}`}>
        <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600">
          {thread.title}
        </h3>
      </Link>

      <p className="text-gray-600 mb-4 line-clamp-2">{thread.content}</p>

      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>By {thread.author?.name || "Unknown"}</span>
        <div className="flex items-center space-x-4">
          <span>{thread.views} views</span>
          <span>{thread.replies} replies</span>
          <span>{new Date(thread.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}
