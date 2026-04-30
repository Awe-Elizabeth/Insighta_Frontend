// src/pages/Dashboard.jsx
import { useEffect, useState } from "react";
import { fetchUserData } from "../api/auth";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadUser() {
      try {
        var userData = await fetchUserData();
        console.log("user data: ", userData);
        setUser(userData.user);
      } catch (err) {
        console.error(err);
        setUser(null);
      }
    }

    loadUser();
  }, []);

  if (!user) {
    return <p>Loading dashboard...</p>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard</h1>

      <div style={{ marginTop: 20 }}>
        <p>
          <strong>Username:</strong> {user?.name}
        </p>
        <p>
          <strong>Email:</strong> {user?.email}
        </p>

        {user.avatarUrl && (
          <img
            src={user.avatarUrl}
            alt="avatar"
            width={80}
            style={{ borderRadius: "50%" }}
          />
        )}
      </div>
    </div>
  );
}
