// import { Link } from "react-router-dom";

// function slugify(text) {
//   return text
//     .toString()
//     .toLowerCase()
//     .trim()
//     .replace(/[\s\W-]+/g, "-") // spaces & special chars → "-"
//     .replace(/^-+|-+$/g, ""); // remove leading & trailing hyphens
// }

// export default function ThreadCard({ thread, full = false }) {
//   const slug = slugify(thread.title);

//   return (
//     <div className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow">
//       {!full ? (
//         <Link to={`/thread/${slug}`}>
//           <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600">
//             {thread.title}
//           </h3>
//         </Link>
//       ) : (
//         <h1 className="text-2xl font-bold text-gray-900 mb-4">
//           {thread.title}
//         </h1>
//       )}

//       {full ? (
//         <p className="text-gray-700 whitespace-pre-line">{thread.content}</p>
//       ) : (
//         <p className="text-gray-600 mb-4 line-clamp-2">{thread.content}</p>
//       )}

//       <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
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

export default function ThreadCard({ thread, full = false }) {
  return (
    <div className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow">
      {!full ? (
        <Link to={`/thread/${thread.slug}`}>
          <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600">
            {thread.title}
          </h3>
        </Link>
      ) : (
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          {thread.title}
        </h1>
      )}

      {full ? (
        <p className="text-gray-700 whitespace-pre-line">{thread.content}</p>
      ) : (
        <p className="text-gray-600 mb-4 line-clamp-2">{thread.content}</p>
      )}

      <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
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
