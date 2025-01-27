import AdminSidebar from "@/components/AdminSideBar";
import LogoutButton from "@/components/logout-button";
import Sidebar from "@/components/SideBar";
import { LayoutDashboard, LogOut, Settings, Ticket } from "lucide-react";
import Link from "next/link";

import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen w-full  ">
      <AdminSidebar/>
      <div className="grow ">
        <div className="w-full h-full flex flex-col gap-y-[2px] p-100">
          {children}
        </div>
      </div>
    </div>
  );
}

