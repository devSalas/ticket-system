"use server";

import { getServerSession } from "next-auth";
import { baseUrl } from "./baseUrl";
import { options } from "../next-auth/options";

export const getTickets = async () => {
  const session = await getServerSession(options);

  const res = await fetch(`${baseUrl}/tickets`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${session?.user.accessToken}`,
    },
  });
  const json = await res.json();
  console.log({ data: json });
  return json;
};
