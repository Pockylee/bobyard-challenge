import axios from "axios";

const api = axios.create({ baseURL: "/api" });

export const listComments = () => api.get("/comments/").then((r) => r.data);
export const addComment = (text) =>
  api.post("/comments/", { text, likes: 0, image: "" }).then((r) => r.data);
export const updateComment = (id, patch) =>
  api.patch(`/comments/${id}/`, patch).then((r) => r.data);
export const deleteComment = (id) => api.delete(`/comments/${id}/`);
