import ClientHeader from "@/components/client/ClientHeader";
import DashboardPanel from "@/components/Dashboard-panel";
import LogoutButton from "@/components/logout-button";

function Dashboard() {
    return (
        <div className="p-[50px]">
           <div className="w-full min-h-screen">
                <ClientHeader/>
                <DashboardPanel/>
           </div>   
        </div>
    );
}

export default Dashboard;