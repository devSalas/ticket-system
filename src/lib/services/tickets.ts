"use server";

import { getServerSession } from "next-auth";
import { baseUrl } from "./baseUrl";
import { options } from "../next-auth/options";



export const getUserTickets = async () => {
  try {
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
  return json;
  } catch (error) {
    return false
  }
};


export const getTickets = async (search:string | undefined) => {

  try {
    let url;
  const session = await getServerSession(options);
  if(!search){
    url=`${baseUrl}/tickets`
  }else{
    url = `${baseUrl}/tickets?search=${search}&page=${1}`
  }
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${session?.user.accessToken}`,
    },
  });

  const json = await res.json();
  if(!(json.success)){
    return false
  }else{
    return json;
  }

  } catch (error) {
    return false
  }
};


