"use server";

import { baseUrl } from "./baseUrl";

export const login = async (email: string, password: string) => {
  console.log(`${baseUrl}/login`)
  const res = await fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const json = await res.json();
  console.log({ data: json },"entro aqui----------------");
  return json;
};
