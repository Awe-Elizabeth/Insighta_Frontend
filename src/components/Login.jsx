import { getGithubAuthUrl } from "../api/auth";

export default function Login() {
  const handleLogin = async () => {
    const authorizeUrl = await getGithubAuthUrl();
    console.log(authorizeUrl);

    window.location.href = authorizeUrl;
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login with GitHub</button>
    </div>
  );
}
