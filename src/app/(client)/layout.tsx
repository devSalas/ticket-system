import Sidebar from "@/components/SideBar";
import { Input } from "@/components/ui/input";

function Layout({ children }: { children: React.ReactNode }) {
    return (<div className="relative flex min-h-screen w-full  ">
        <Sidebar />
        <div className="grow ">
            <div className="w-full h-full flex flex-col gap-y-[2px]">
                {children}
            </div>
        </div>
    </div>);
}

export default Layout;