import { useEffect, useState } from "react";
import { listComments, addComment, updateComment, deleteComment } from "./api";

function CommentCard({ c, onSave, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(c.text);

  return (
    <div
      style={{
        border: "1px solid #eee",
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
      }}
    >
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <img
          src={
            c.image ||
            `https://ui-avatars.com/api/?name=${encodeURIComponent(c.author)}`
          }
          alt=""
          width={40}
          height={40}
          style={{ borderRadius: "50%" }}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <div>
          <div style={{ fontWeight: 600 }}>{c.author}</div>
          <div style={{ fontSize: 12, opacity: 0.7 }}>
            {new Date(c.date).toLocaleString()} • {c.likes} likes
          </div>
        </div>
      </div>

      {editing ? (
        <>
          <textarea
            style={{ width: "100%", marginTop: 8 }}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
            <button
              onClick={() => {
                onSave(c.id, { text });
                setEditing(false);
              }}
            >
              Save
            </button>
            <button
              onClick={() => {
                setText(c.text);
                setEditing(false);
              }}
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <p style={{ marginTop: 8 }}>{c.text}</p>
      )}

      {!editing && (
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => onDelete(c.id)}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [items, setItems] = useState([]);
  const [newText, setNewText] = useState("");

  const refresh = () => listComments().then(setItems);
  useEffect(() => {
    refresh();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!newText.trim()) return;
    await addComment(newText.trim());
    setNewText("");
    refresh();
  };

  const handleSave = async (id, patch) => {
    await updateComment(id, patch);
    refresh();
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this comment?")) return;
    await deleteComment(id);
    refresh();
  };

  return (
    <div style={{ maxWidth: 720, margin: "40px auto", padding: "0 16px" }}>
      <h1>Comments</h1>

      <form
        onSubmit={handleAdd}
        style={{ display: "flex", gap: 8, marginBottom: 16 }}
      >
        <input
          style={{ flex: 1, padding: 8 }}
          placeholder='Write a comment as "Admin"...'
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {items.map((c) => (
        <CommentCard
          key={c.id}
          c={c}
          onSave={handleSave}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}
