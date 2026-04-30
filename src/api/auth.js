import axios from "axios";

const base = "https://localhost:7227";
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
  const res = await axios.get(`/api/get_user`, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(res.data);
  return res.data;
}
