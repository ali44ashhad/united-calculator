// import { createContext, useContext, useState, useEffect } from "react";
// import api from "../services/api";

// const ForumContext = createContext();
// export const useForum = () => useContext(ForumContext);

// export const ForumProvider = ({ children }) => {
//   const [threads, setThreads] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // Get all threads
//   const getThreads = async () => {
//     setLoading(true);
//     try {
//       const response = await api.get("/threads");
//       setThreads(response.data.threads);
//     } catch (error) {
//       console.error("Failed to fetch threads:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Create a new thread
//   const createThread = async (threadData) => {
//     try {
//       const response = await api.post("/threads", threadData);
//       setThreads((prev) => [response.data.thread, ...prev]);
//       return response.data.thread;
//     } catch (error) {
//       throw new Error(
//         error.response?.data?.message || "Failed to create thread"
//       );
//     }
//   };

//   // Get a single thread by ID
//   const getThread = async (id) => {
//     try {
//       const response = await api.get(`/threads/${id}`);
//       return response.data.thread;
//     } catch (error) {
//       throw new Error(
//         error.response?.data?.message || "Failed to fetch thread"
//       );
//     }
//   };

//   // Create a comment for a thread
//   const createComment = async (threadId, content) => {
//     try {
//       const response = await api.post(`/comments/thread/${threadId}`, {
//         content,
//       });
//       return response.data.comment;
//     } catch (error) {
//       throw new Error(
//         error.response?.data?.message || "Failed to create comment"
//       );
//     }
//   };

//   useEffect(() => {
//     getThreads();
//   }, []);

//   return (
//     <ForumContext.Provider
//       value={{
//         threads,
//         loading,
//         getThreads,
//         createThread,
//         getThread,
//         createComment,
//       }}
//     >
//       {children}
//     </ForumContext.Provider>
//   );
// };

import { createContext, useContext, useState, useEffect } from "react";
import api from "../services/api";

const ForumContext = createContext();
export const useForum = () => useContext(ForumContext);

export const ForumProvider = ({ children }) => {
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Get all threads
  const getThreads = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get("/threads");
      setThreads(response.data.threads);
      return response.data.threads;
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || "Failed to fetch threads";
      setError(errorMsg);
      console.error("Failed to fetch threads:", error);
      throw new Error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  // Create a new thread
  const createThread = async (threadData) => {
    setError(null);
    try {
      const response = await api.post("/threads", threadData);
      setThreads((prev) => [response.data.thread, ...prev]);
      return response.data.thread;
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || "Failed to create thread";
      setError(errorMsg);
      throw new Error(errorMsg);
    }
  };

  // Get a single thread by ID
  const getThread = async (id) => {
    setError(null);
    try {
      const response = await api.get(`/threads/${id}`);
      return response.data.thread;
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || "Failed to fetch thread";
      setError(errorMsg);
      throw new Error(errorMsg);
    }
  };

  // Create a comment for a thread
  const createComment = async (threadId, content) => {
    setError(null);
    try {
      const response = await api.post(`/comments/thread/${threadId}`, {
        content,
      });
      return response.data.comment;
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || "Failed to create comment";
      setError(errorMsg);
      throw new Error(errorMsg);
    }
  };

  // Find a thread by its slug
  const findThreadBySlug = (slug) => {
    return threads.find((thread) => {
      const threadSlug = thread.title
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]+/g, "")
        .replace(/\-\-+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "");
      return threadSlug === slug;
    });
  };

  // Clear error
  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    getThreads();
  }, []);

  return (
    <ForumContext.Provider
      value={{
        threads,
        loading,
        error,
        getThreads,
        createThread,
        getThread,
        createComment,
        findThreadBySlug,
        clearError,
      }}
    >
      {children}
    </ForumContext.Provider>
  );
};
