"use server";

import { getServerSession } from "next-auth";
import { baseUrl } from "./baseUrl";
import { options } from "../next-auth/options";



export const getUserTickets = async () => {
  const session = await getServerSession(options);
  console.log(`Bearer ${session?.user.id}`)
  const res = await fetch(`${baseUrl}/users/${session?.user.id}/tickets`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${session?.user.accessToken}`,
    },
  });
  const json = await res.json();
  console.log("respuesta",json)
  return json;
};
export const getTickets = async () => {
  const session = await getServerSession(options);
  console.log(`Bearer ${session?.user.id}`)
  const res = await fetch(`${baseUrl}/users/${session?.user.id}/tickets`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${session?.user.accessToken}`,
    },
  });
  const json = await res.json();
  console.log("respuesta",json)
  return json;
};


