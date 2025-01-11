
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
import { getTickets } from "@/lib/services/tickets";

const tickets = [
    {
        ticket: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        ticket: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        ticket: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        ticket: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        ticket: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        ticket: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        ticket: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
]


/* async function GetTikets() {

    try {
        const response = await fetch("http://localhost:8000/api/tickets",{
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            credentials: 'include',
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return false;
    }

}
 */



async function Tickets() {

    const data =await getTickets();
    console.log(data)
    console.log(data)
    
    return (
        <div>
            <h1>Tickes</h1>
            <Table className="max-w-5xl m-auto">
                <TableCaption>A list of your recent tickets.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Titulo</TableHead>
                        <TableHead>Descripción</TableHead>
                        <TableHead>priority</TableHead>
                        <TableHead className="text-right">status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                {data?.data?.map((ticket,index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{ticket.title}</TableCell>
                            <TableCell>{ticket.description}</TableCell>
                            <TableCell>{ticket.priority}</TableCell>
                            <TableCell className="text-right">{ticket.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
               
            </Table>
        </div>
    );
}

export default Tickets;