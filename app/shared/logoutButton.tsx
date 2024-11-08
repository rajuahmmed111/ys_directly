"use client"

import { signOut } from "@/auth";
import React from "react";

const LogoutButton = () => {
  const handleLogout = () => {
    signOut({ redirectTo: "/" });
    console.log("logged out");
  };

  return (
    <div>
      <button onClick={handleLogout}>
        <span>Logout</span>
      </button>
    </div>
  );
};

export default LogoutButton;
