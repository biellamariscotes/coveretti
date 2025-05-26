// src/lib/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.example.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getPosts = async () => {
  const res = await api.get("/posts");
  return res.data;
};

export const createPost = async (data: { title: string }) => {
  const res = await api.post("/posts", data);
  return res.data;
};
