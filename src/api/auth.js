import axios from "axios";

const base = import.meta.env.VITE_API_BASE_URL;
export async function getGithubAuthUrl() {
  const res = await axios.get(`${base}/auth/github/`, {
    credentials: "include",
  });
  return res.data.url;
}

export async function completeGithubAuth(code, state) {
  const res = await axios.post(
    `${base}/auth/github/callback`,
    { code, state },
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  console.log(res.data);
  return res.data;
}

export async function fetchUserData() {
  const isDev = import.meta.env.DEV;

  const url = isDev
    ? "/api/get_user" // uses Vite proxy
    : `${import.meta.env.VITE_API_BASE_URL}/api/users/me`;

  const res = await axios.get(url, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(res.data);
  return res.data;
}
