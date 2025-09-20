import { useState } from "react";
import Avatar from "./Avatar";

const CommentCard = ({ comment, onSave, onDelete }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(comment.text);

  const handleSave = () => {
    onSave(comment.id, { text });
    setEditing(false);
  };

  const handleCancel = () => {
    setText(comment.text);
    setEditing(false);
  };

  return (
    <div className="border border-gray-200 rounded-xl p-4 mb-3 bg-white shadow-sm">
      {/* Author info and likes and timestamp */}
      <div className="flex gap-3 items-center mb-3">
        <Avatar author={comment.author} />
        <div className="flex-1">
          <div className="font-semibold text-gray-900">{comment.author}</div>
          <div className="text-xs text-gray-500">
            {new Date(comment.date).toLocaleString()} • {comment.likes} likes
          </div>
        </div>
      </div>

      {/* Comment text section */}
      {editing ? (
        <>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={3}
          />
          <div className="flex gap-2 mt-3">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <p className="text-gray-800 mb-3 leading-relaxed">{comment.text}</p>
      )}

      {/* Attached image */}
      {comment.image && !editing && (
        <div className="mb-3 text-center">
          <img
            src={comment.image}
            alt="Attached image"
            className="max-w-xs max-h-48 w-auto h-auto rounded-lg border border-gray-200 mx-auto object-contain"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      )}

      {/* Action buttons */}
      {!editing && (
        <div className="flex gap-2">
          <button
            onClick={() => setEditing(true)}
            className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(comment.id)}
            className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition-colors"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default CommentCard;
