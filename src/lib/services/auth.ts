"use server";

import { baseUrl } from "./baseUrl";

export const login = async (email: string, password: string) => {
  const res = await fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const json = await res.json();
  console.log({ data: json });
  return json;
};
