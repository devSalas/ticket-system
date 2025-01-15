
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


type PriorityKey = "low" | "middle" | "high";

const priority: Record<PriorityKey, string> = {
  low: "bajo",
  middle: "medio",
  high: "alto",
};

interface Ticket {
  title: string;
  description: string;
  priority: PriorityKey;
  status: string;
}

const TicketTable: React.FC<{ data: Ticket[] }> = ({ data }) => {
    
  return (
    <Table className="max-w-5xl m-auto">
                <TableCaption>A list of your recent tickets.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px] font-bold">Titulo</TableHead>
                        <TableHead className="font-bold">Descripción</TableHead>
                        <TableHead className="font-bold">priority</TableHead>
                        <TableHead className="text-right font-bold">status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data?.map((ticket, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{ticket.title}</TableCell>
                            <TableCell>{ticket.description}</TableCell>
                            <TableCell>{ticket.priority || "Desconocido"}</TableCell>
                            <TableCell className="text-right">{ticket.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>
  );
};

export default TicketTable;
