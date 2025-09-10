// import { Link } from "react-router-dom";

// // Slugify function inside ThreadCard
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

export default function ThreadCard({ thread, full = false }) {
  const slug = slugify(thread.title);

  return (
    <div className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow">
      {!full ? (
        <Link to={`/thread/${slug}`}>
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
