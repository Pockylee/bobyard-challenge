import { useComments } from "./hooks/useComments";
import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";

export default function App() {
  const { comments, loading, error, add, update, remove } = useComments();

  const handleAdd = async (text) => {
    await add(text);
  };

  const handleSave = async (id, patch) => {
    await update(id, patch);
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this comment?")) return;
    await remove(id);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 w-full">
      <h1 className="text-center text-3xl font-bold mb-8 text-white">
        Comments
      </h1>

      {error && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
          {error}
        </div>
      )}

      <CommentForm onSubmit={handleAdd} loading={loading} />

      <CommentList
        comments={comments}
        onSave={handleSave}
        onDelete={handleDelete}
        loading={loading}
      />
    </div>
  );
}
