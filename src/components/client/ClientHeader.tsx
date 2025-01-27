import { options } from "@/lib/next-auth/options";
import { getServerSession } from "next-auth";

async function ClientHeader() {
    const session = await getServerSession(options);
    
    const name = session?.user?.name

    return ( 
        <header>
            <strong className="text-4xl">Bienvenido, {name}! </strong>
        </header>
     );
}

export default ClientHeader;