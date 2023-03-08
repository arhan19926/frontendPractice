import React, { useState } from "react";
type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogin = () => {
    setUser({
      name: "Arhan",
      email: "ali.arhan19926@gmail.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>LOginUser</button>
      <button onClick={handleLogout}>UserLogout</button>
      <div>user name is {user?.name}</div>
      <div>user email is {user?.email}</div>
    </div>
  );
};
