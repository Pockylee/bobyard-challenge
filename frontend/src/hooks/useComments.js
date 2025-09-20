import { useState, useEffect } from "react";
import { listComments, addComment, updateComment, deleteComment } from "../api";

export const useComments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refresh = async () => {
    try {
      setLoading(true);
      const data = await listComments();
      setComments(data);
      setError(null);
    } catch (err) {
      setError("Failed to load comments");
      console.error("Error fetching comments:", err);
    } finally {
      setLoading(false);
    }
  };

  const add = async (text) => {
    try {
      await addComment(text);
      await refresh();
    } catch (err) {
      setError("Failed to add comment");
      console.error("Error adding comment:", err);
    }
  };

  const update = async (id, patch) => {
    try {
      await updateComment(id, patch);
      await refresh();
    } catch (err) {
      setError("Failed to update comment");
      console.error("Error updating comment:", err);
    }
  };

  const remove = async (id) => {
    try {
      await deleteComment(id);
      await refresh();
    } catch (err) {
      setError("Failed to delete comment");
      console.error("Error deleting comment:", err);
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  return {
    comments,
    loading,
    error,
    add,
    update,
    remove,
    refresh,
  };
};
