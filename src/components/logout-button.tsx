"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import React from "react";

export default function LogoutButton() {
  return (
    <button onClick={() => signOut({ callbackUrl: "/auth/login" })} className="border-2 border-white px-2 rounded-md">
      <LogOut/>
    </button>
  );
}
