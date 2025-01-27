import AdminTicketTable from "@/components/admin/AdminTicketTable";
import { Input } from "@/components/ui/input";
import { getTickets } from "@/lib/services/tickets";
import { Filter, Search } from "lucide-react";
import Link from "next/link";
import React from "react";

type SearchParams = Promise<{ query: string | undefined }>
 
export default async function TicketsPage({searchParams}: {
  searchParams: SearchParams
}) {
  const {query} = (await searchParams) 
 

  return (
    <div className=" min-h-screen p-[100px]">
      <div className="flex flex-col gap-8">
        <AdminTicketTable search={query}  />
      </div>
    </div>
  )
}
