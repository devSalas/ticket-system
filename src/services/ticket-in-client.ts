import { baseUrlClient } from "@/lib/services/baseUrl";
import { getSession } from "next-auth/react"

export const createTickets = async (newTicket: any) => {
    const session = await getSession();
    console.log(newTicket, `${baseUrlClient}/tickets`)
    const { title, description, category_id, priority, status } = newTicket;
    const res = await fetch(`${baseUrlClient}/tickets`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json', // Si estás enviando JSON
        'Accept': 'application/json', // Acepta respuestas en JSON
        'Authorization': `Bearer ${session?.user.accessToken}`
      },
      credentials: 'include', // Incluye cookies de sesión
      body: JSON.stringify({
        title,
        description,
        category_id,
        area_id: 1,
        priority,
        status:"open"
      }),
  
    });
    return res;
    
  }