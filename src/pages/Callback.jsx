// src/pages/Callback.jsx
import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { completeGithubAuth } from "../api/auth";

export default function Callback() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const code = params.get("code");
    const state = params.get("state");

    if (!code) return;

    async function completeAuth() {
      try {
        const result = await completeGithubAuth(code, state);

        // You can store token or rely on cookies
        console.log("Auth success:", result);

        navigate("/dashboard");
      } catch (err) {
        console.error(err);
        navigate("/");
      }
    }

    completeAuth();
  }, []);

  return <p>Completing authentication...</p>;
}
