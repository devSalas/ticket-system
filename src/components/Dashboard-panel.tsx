import { getUserTickets } from "@/lib/services/tickets";

async function DashboardPanel() {
    const data = await getUserTickets()

    return (
        <div className="p-16 flex flex-col">

            <div className="w-60 h-60 rounded-lg bg-gray-800 text-white p-4 flex flex-col">
                <h2 className="text-xl text-center ">Cantidad de Tickets</h2>
                <div className="text-[70px] flex justify-center  items-center  grow">
                    {data?.length}
                </div>
            </div>

        </div>
    );
}

export default DashboardPanel;