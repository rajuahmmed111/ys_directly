"use client";

import { signIn } from "@/auth";
import React from "react";

const LoginButton = () => {
  const handleLogin = () => {
    signIn();
    console.log("Login clicked");
  };

  return (
    <div>
      <button onClick={handleLogin}>
        <span>Login</span>
      </button>
    </div>
  );
};

export default LoginButton;
