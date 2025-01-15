import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

// Rutas que serán públicas
const publicRoutes = [
  "/auth/login",
  "/auth/register",
  "/api/auth",
  "/",                // Homepage
  "/about",           // Ejemplo de página pública
  "/contact",         // Ejemplo de página pública
];

// Rutas que comienzan con estos prefijos serán públicas
const publicPathPrefixes = [
  "/_next",          // Archivos del sistema Next.js
  "/images",         // Ejemplo para archivos estáticos
  "/favicon",        // Favicon y relacionados
  "/api/auth",       // Endpoints de autenticación
];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  
  // Verificar si la ruta actual es pública
  const isPublicRoute = publicRoutes.includes(pathname) ||
    publicPathPrefixes.some(prefix => pathname.startsWith(prefix));

  if (isPublicRoute) {
    return NextResponse.next();
  }

  // Verificar el token de autenticación
  const token = await getToken({ 
    req, 
    secret: process.env.NEXTAUTH_SECRET 
  });
  console.log("¿hay token?",token )
  // Si no hay token, redirigir al login
  if (!token) {
    // Guardar la URL original para redirigir después del login
    const url = new URL('/auth/login', req.url);
    url.searchParams.set('callbackUrl', encodeURI(pathname));
    return NextResponse.redirect(url);
  }

  // Opcional: Verificar roles específicos
  if (pathname.startsWith('/admin') && token.role !== 'admin') {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Coincide con todas las rutas excepto:
     * 1. /api/auth* (endpoints de autenticación)
     * 2. /_next/static (archivos estáticos)
     * 3. /_next/image (optimización de imágenes)
     * 4. /favicon.ico (favicon)
     */
    '/((?!api/auth|_next/static|_next/image|favicon.ico).*)',
  ],
};