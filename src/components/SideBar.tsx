"use client";
import { useState } from "react";
import { Home, Ticket, Bell, ArrowRightToLine, ArrowLeftToLine } from "lucide-react"; // Iconos de Lucide
import { Button } from "./ui/button"; // Suponiendo que tienes este componente Button
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion"; // Importar componentes Accordion de ShadCN
import { LinksListSiderBar } from "@/data/client/SideBarClient";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

   // Función para obtener el icono según el nombre del enlace
   const getIcon = (name:string) => {
    switch (name) {
      case "Home":
        return <Home />;
      case "Tickets":
        return <Ticket />;
      case "notificaciones":
        return <Bell />;
    }
  };

  return (
    <div
      className={`${isOpen ? "w-64" : "w-16"} transition-all duration-300 bg-gray-800 text-white p-4 sticky left-0 top-0 h-screen`}
    >
      {/* Toggle Button */}
      <Button onClick={toggleSidebar} className="mb-4">
        {isOpen ? <ArrowLeftToLine />: <ArrowRightToLine />}
      </Button>

      {/* Sidebar Content */}
      <div >
        {/* <h2 className="text-xl">Dashboard</h2> */}
        <ul className="mt-4 space-y-4">
          {LinksListSiderBar.map((link, index) => (
            index !== 2 && (<li key={index}>
              {/* Si tiene subenlaces, usar Accordion */}
              { (link.subLinks && isOpen ) ? (
                <Accordion type="single" collapsible>
                  <AccordionItem value={link.name}>
                    <AccordionTrigger className="flex items-center space-x-2">
                      <a className="flex  space-x-2">
                      {getIcon(link.name)}
                      <span className={`${isOpen ? "inline" : "hidden"}`}>{link.name}</span>
                      </a>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="pl-6 mt-2 space-y-2">
                        {link.subLinks.map((subLink, subIndex) => (
                          <li key={subIndex}>
                            <a href={subLink.url} className="flex items-center space-x-2">
                               
                              <span className={`${isOpen ? "inline" : "hidden"}`}>{subLink.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
                // Enlaces sin subenlaces
                <a href={link.url} className="flex items-center space-x-2">
                  {getIcon(link.name)}
                  <span className={`${isOpen ? "inline" : "hidden"}`}>{link.name}</span>
                </a>
              )}
            </li>)
          ))}
        </ul>
      </div>
    </div>
  );
}
