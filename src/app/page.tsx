import Sidebar from "@/components/SideBar";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link";


export default function Home() {
  return (
    <div className=" w-full min-h-screen   bg-black">
      <header className="flex items-center justify-between  w-full  border-b-2 border-white">
        <div></div>

        <Link href="/dashboard" className={buttonVariants({ variant: "outline" })+ "rounded-[0px] bg-white text-black h-[60px] min-w-[200px] hover:text-white hover:border-2 hover:border-white"} >Dashboard</Link>

      </header>
    </div>
  );
}
