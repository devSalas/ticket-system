import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret });

  // Verifica si la solicitud es a una ruta protegida
  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");

  if (isAdminRoute) {
    if (!token) {
      return NextResponse.redirect("/auth/login");
    }
  }

  // Si todo está bien, continúa con la solicitud
  return NextResponse.next();
}

// Aplica el middleware a las rutas que empiezan con `/admin`
export const config = {
  matcher: ["/admin/:path*"],
};
