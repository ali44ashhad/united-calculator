import { createContext, useContext, useState, useEffect } from "react";

const ForumContext = createContext();

export function useForum() {
  return useContext(ForumContext);
}

export function ForumProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    // Load initial data from localStorage
    const storedCategories = JSON.parse(
      localStorage.getItem("forum_categories")
    );
    const storedThreads = JSON.parse(localStorage.getItem("forum_threads"));

    if (storedCategories && storedCategories.length > 0) {
      setCategories(storedCategories);
    } else {
      // Initialize with default categories
      const defaultCategories = [
        {
          id: "general",
          icon: "fas fa-calculator",
          title: "General Calculators",
          description:
            "Discuss basic and scientific calculators, tips and tricks",
          threads: 0,
          color: "bg-blue-500",
        },
        {
          id: "financial",
          icon: "fas fa-chart-line",
          title: "Financial Calculators",
          description:
            "Conversations about loan, mortgage, and investment calculators",
          threads: 0,
          color: "bg-green-500",
        },
        {
          id: "scientific",
          icon: "fas fa-flask",
          title: "Scientific Calculators",
          description:
            "Advanced calculator discussions for students and professionals",
          threads: 0,
          color: "bg-purple-500",
        },
        {
          id: "programming",
          icon: "fas fa-code",
          title: "Programming Calculators",
          description:
            "Custom calculator development and programming discussions",
          threads: 0,
          color: "bg-red-500",
        },
      ];
      setCategories(defaultCategories);
      localStorage.setItem(
        "forum_categories",
        JSON.stringify(defaultCategories)
      );
    }

    if (storedThreads) {
      setThreads(storedThreads);
    }
  }, []);
  const addComment = (threadId, commentData) => {
    const user = JSON.parse(localStorage.getItem("forum_current_user"));
    if (!user) {
      throw new Error("You must be logged in to comment");
    }

    const newComment = {
      id: Date.now().toString(),
      content: commentData.content,
      author: user.name,
      authorId: user.id,
      date: new Date().toISOString(),
      parentId: commentData.parentId || null,
    };

    const updatedThreads = threads.map((thread) => {
      if (thread.id === threadId) {
        const updatedThread = {
          ...thread,
          replies: (thread.replies || 0) + 1,
          comments: [...(thread.comments || []), newComment],
        };
        return updatedThread;
      }
      return thread;
    });

    setThreads(updatedThreads);
    localStorage.setItem("forum_threads", JSON.stringify(updatedThreads));

    return newComment;
  };

  const createThread = (threadData) => {
    const newThread = {
      id: Date.now().toString(),
      ...threadData,
      date: new Date().toISOString(),
      replies: 0,
      views: 0,
    };

    const updatedThreads = [...threads, newThread];
    setThreads(updatedThreads);
    localStorage.setItem("forum_threads", JSON.stringify(updatedThreads));

    // Update category thread count
    const updatedCategories = categories.map((category) => {
      if (category.id === threadData.categoryId) {
        return { ...category, threads: category.threads + 1 };
      }
      return category;
    });

    setCategories(updatedCategories);
    localStorage.setItem("forum_categories", JSON.stringify(updatedCategories));

    return newThread;
  };

  const value = {
    categories,
    threads,
    createThread,
    addComment,
  };

  return (
    <ForumContext.Provider value={value}>{children}</ForumContext.Provider>
  );
}

// Add this function to your ForumContext

// Add addComment to the context value
