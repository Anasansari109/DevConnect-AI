const BASE_URL = "http://localhost:5000/api";

// 🔐 Signup
export const signupUser = async (data) => {
  const res = await fetch(`${BASE_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

// 🔐 Login
export const loginUser = async (data) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

// 📝 Create Post
export const createPost = async (data) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

export const getPosts = async () => {
  const res = await fetch("http://localhost:5000/api/posts");
  return res.json();
};

// ❤️ Like Post
export const likePost = async (id) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}/posts/${id}/like`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};

// 🗑 Delete Post
export const deletePost = async (id) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}/posts/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};

// 🤖 AI Improve
export const improvePost = async (text) => {
  const res = await fetch(`${BASE_URL}/ai/improve`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  return res.json();
};