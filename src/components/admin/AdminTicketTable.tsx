import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { TicketPrioritySelector } from "./TicketPrioritySelector"
import { getTickets } from "@/lib/services/tickets";
import { TicketStatusSelector } from "./TicketStatusSelector";
import {  Search } from "lucide-react";
import { Input } from "../ui/input";
import Link from "next/link";
import { redirect } from "next/navigation";

type PriorityKey = "low" | "medium" | "high";
type statusKey = "open" | "in_progress" | "resolved";



interface Ticket {
  id: string;
  title: string;
  description: string;
  priority: PriorityKey;
  status: statusKey;
}



async function AdminTicketTable({search}:{search:string | undefined}) {
  

  const tickets = await getTickets(search)

  console.log(39,tickets)
  if(!tickets){
    redirect("/auth/login")
  }

 


  return (
      <div className="flex flex-col gap-16">
        <div className="flex justify-between">
          <div className="flex gap-2 ">
            <Search size={40} /> <Input className="bg-[#d8d4d4] max-w-[300px]" placeholder="Buscar en tickets " />
          </div>
          <Link href={"/admin/tickets/create"} className="bg-[#0831c4] text-white  flex items-center py-4 px-6 rounded-lg">
              Crear Ticket
            </Link>
        </div>
        <Table className="max-w-5xl m-auto">
          <TableCaption>A list of your recent tickets.</TableCaption>
          <TableHeader className="">
            <TableRow className="bg-gray-300">
              <TableHead className="w-[100px] font-bold">Id</TableHead>
              <TableHead className="w-[400px] font-bold">Titulo</TableHead>
              {/* <TableHead className="font-bold">Descripción</TableHead> */}
              <TableHead className="font-bold">Prioridad</TableHead>
              <TableHead className="text-right font-bold">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tickets.data.map((ticket: Ticket) => (
              <TableRow key={ticket.id}>
                <TableCell className="font-medium">{ticket.id}</TableCell>
                <TableCell className="font-medium flex flex-col gap-4">
                  {ticket.title} <br />
                  <span className="text-blue-500">{ticket.creator.name}</span>
                </TableCell>
                {/*  <TableCell>{ticket.description}</TableCell> */}
                <TableCell>
                  <TicketPrioritySelector priority={ticket.priority} id={ticket.id} />
                </TableCell>
                <TableCell className="text-right">
                  <TicketStatusSelector status={ticket.status} id={ticket.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      );
};

      export default AdminTicketTable ;
