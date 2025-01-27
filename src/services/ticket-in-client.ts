import { baseUrlClient } from "@/lib/services/baseUrl";
import { getSession } from "next-auth/react"
import { useSession } from "next-auth/react";

export const createTickets = async (newTicket: any) => {
  try {
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
        status: "open"
      }),

    });
    return res;
  } catch (error) {
    return false
  }

}





export const updateTicket = async (ticketUpdate:any, id: string) => {
  try {
    const session = await getSession();
    const res = await fetch(`http://localhost:8000/api/tickets/update/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json', // Si estás enviando JSON
        'Accept': 'application/json', // Acepta respuestas en JSON
        'Authorization': `Bearer ${session?.user.accessToken}`
      },
      body: JSON.stringify({...ticketUpdate}),
      credentials: 'include', // Incluye cookies de sesión

    })
    const json = await res.json()
      return json;
  } catch (error) {
    return false;
  }
}