import LogoutButton from "@/components/logout-button";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <LogoutButton />
      {children}
    </div>
  );
}
