import { getTickets } from "@/lib/services/tickets";
import React from "react";

export default function TicketsPage() {
  const tickets = getTickets();
  console.log({ tickets });

  return (
      <div>
        <div className="max-w-7xl m-auto">
        <h1 className="text-center ">Lista de Tickets</h1>
        </div>
      </div>
  )
}
