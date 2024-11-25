import { getTickets } from "@/lib/services/tickets";
import React from "react";

export default function TicketsPage() {
  const tickets = getTickets();
  console.log({ tickets });

  return <div>{JSON.stringify(tickets)}</div>;
}
