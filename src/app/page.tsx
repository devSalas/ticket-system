import Sidebar from "@/components/SideBar";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link";


export default function Home() {
  return (
    <div className=" w-full min-h-screen  flex flex-col">
      <header className="flex items-center justify-between  w-full  border-b-2 border-black">
        <div className="ml-8">
          <strong className="text-[24px] ">Sunetya</strong>
        </div>

        <Link href="/dashboard" className={buttonVariants({ variant: "outline" }) + "rounded-[0px] bg-black text-white h-[60px] min-w-[200px] hover:border-2 hover:border-black"} >Dashboard</Link>

      </header>
      <main className=" grow flex justify-start items-center p-[100px]">
        <h1 className="text-[100px]">
        <span className="text-blue-500">SISTEMA</span> <br />
          DE <span className="text-blue-500">TICKET</span> DE <br/>
           MESA DE <span className="text-blue-500">AYUDA</span> 
        </h1>

      </main>
    </div>
  );
}
