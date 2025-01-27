// Sidebar.tsx
// "use client"; Esto asegura que el código siguiente se ejecute en el cliente

//import { useState } from "react";
import { Home, Ticket, Bell, ArrowRightToLine, ArrowLeftToLine, LayoutDashboard, FolderKey } from "lucide-react"; // Iconos de Lucide
import { Button } from "./ui/button"; // Suponiendo que tienes este componente Button
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion"; // Importar componentes Accordion de ShadCN
import LogoutButton from "./logout-button";
import Link from "next/link";
import AdminLink from "./client/AdminLink";
import { AdminLinksListSiderBar } from "@/data/client/SideBarAdmin";

export default function AdminSidebar() {

  const isOpen = true;

  // Función para obtener el icono según el nombre del enlace
  const getIcon = (name: string) => {
    switch (name) {
      case "Home":
        return <Home />;
      case "Tickets":
        return <Ticket />;
      case "Admin":
        return <FolderKey />;
      case "Dashboard":
        return <LayoutDashboard />;
      case "notificaciones":
        return <Bell />;
    }
  };

  return (
    <div
      className={`${isOpen ? "w-64" : "w-16"} transition-all duration-300 bg-gray-800 text-white p-4 sticky left-0 top-0 h-screen flex flex-col gap-4 justify-between`}
    >

      <div className="flex flex-col gap-8">
        <h1 className="text-white font-bold text-4xl">Sunetya.</h1>
        <div>
            <ul className="mt-4 space-y-4">
              {AdminLinksListSiderBar.map((link, index) => (
                (
                  <li key={index}>
                    {link.subLinks && isOpen ? (
                      <Accordion type="single" collapsible>
                        <AccordionItem value={link.name}>
                          <AccordionTrigger className="flex items-center space-x-2">
                            <Link href={link.url} className="flex  space-x-2">
                              {getIcon(link.name)}
                              <span className={`${isOpen ? "inline" : "hidden"}`}>{link.name}</span>
                            </Link>
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="pl-6 mt-2 space-y-2">
                              {link.subLinks.map((subLink, subIndex) => (
                                <li key={subIndex}>
                                  <Link href={subLink.url} className="flex items-center space-x-2">
                                    <span className={`${isOpen ? "inline" : "hidden"}`}>{subLink.name}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : (
                      <Link href={link.url} className="flex items-center jus space-x-2">
                        {getIcon(link.name)}
                        <span className={`${isOpen ? "inline" : "hidden"}`}>{link.name}</span>
                      </Link>
                    )}
                  </li>
                )
              ))}
            </ul>
          </div>
      </div>
      <LogoutButton />
    </div>
  );
}
