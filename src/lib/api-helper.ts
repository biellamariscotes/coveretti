// src/lib/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: "https://api-inference.huggingface.co",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_HF_API_TOKEN}`,
  },
});

export const get = async <T>(
  resource: string,
  id?: string | number
): Promise<T> => {
  const url = id ? `/${resource}/${id}` : `/${resource}`;
  const res = await api.get(url);
  return res.data;
};

export const create = async <T>(resource: string, data: T): Promise<T> => {
  const res = await api.post(`/${resource}`, data);
  return res.data;
};

export const update = async <T>(
  resource: string,
  id: string | number,
  data: Partial<T>
): Promise<T> => {
  const res = await api.put(`/${resource}/${id}`, data);
  return res.data;
};

export const remove = async (
  resource: string,
  id: string | number
): Promise<void> => {
  await api.delete(`/${resource}/${id}`);
};

export default api;
