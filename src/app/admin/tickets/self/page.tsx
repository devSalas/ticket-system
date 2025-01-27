
import TicketTable from "@/components/client/TicketTable";
import {  getUserTickets } from "@/lib/services/tickets";



async function Tickets() {


    const data = await getUserTickets();
    console.log(11,data)
    if (!data) return (<div>Ocurrio un error al pedir lo datos</div>)

 
    return (
        <div>
            <h1 className="text-center py-8 text-3xl">Mis Tickets Creados</h1>
            <TicketTable data={data}/>
        </div>
    );
}

export default Tickets;