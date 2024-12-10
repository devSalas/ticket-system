import Sidebar from "@/components/SideBar";
import { Input } from "@/components/ui/input";

function Layout({ children }: { children: React.ReactNode }) {
    return (<div className="relative flex min-h-screen w-full gap-20 bg-slate-300">
        <Sidebar />
        <div className="grow ">
            <div className="w-full h-full flex flex-col gap-y-[2px]">
                <header>
                    <div>
                        <div>Dashboard</div>
                    </div>
                    <div>
                        <Input></Input>
                    </div>
                </header>
                {children}
            </div>
        </div>
    </div>);
}

export default Layout;