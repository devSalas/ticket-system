import { options } from "@/lib/next-auth/options";
import { FolderKey } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";

export  default  async  function AdminLink() {
    const session = await getServerSession(options);

    const role = session?.user?.role
    return (
        <>
        {role === "admin" && <Link href={"/admin"} className="text-white flex gap-2"><FolderKey  />Admin</Link> }
        </>
    );
}

