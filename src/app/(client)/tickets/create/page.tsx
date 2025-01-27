import CreateTicketForm from "@/components/client/CreateticketForm";

function CreateTicket() {
    return (
        <div className="    ">
            <h1 className="text-center p-8 text-3xl text-black">Crear Ticket</h1>
            <div>
                <CreateTicketForm />
                
            </div>
        </div>
    );
}

export default CreateTicket;