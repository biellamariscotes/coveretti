# API Helper and External APIs

## What is an API Helper?

An **API Helper** is a centralized module or file where all the API calls are defined and managed. It abstracts HTTP requests (using Axios, fetch, etc.) so the components stay clean and focused on rendering UI.

### Benefits:

- Reusable API functions
- Centralized error and auth handling
- Easier to maintain and test
- Cleaner component code

---

## How to Use the API Helper

### (`src/lib/api.ts`):

```ts
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
```
