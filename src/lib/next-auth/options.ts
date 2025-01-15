import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { login } from "@/lib/services/auth";

const secret = process.env.NEXTAUTH_SECRET;

export const options: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log({ credentials });
        try {
          if (!credentials?.email || !credentials.password) {
            return null;
          }

          // Llamada al servicio para autenticar al usuario
          const res = await login(credentials?.email, credentials?.password);

          if (!res?.user) return null;

          const { user, token } = res;

          // Devolver los datos relevantes del usuario
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            accessToken: token,
            area: user.area_id,
            role: user.role,
          };
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",  // Asegúrate de que esta ruta sea correcta
    signOut: "/auth/login", // Asegúrate de que esta ruta sea correcta
  },
  secret,
  callbacks: {
    // Aquí agregamos los datos del usuario al JWT
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.accessToken = user.accessToken;
        token.area_id = user.area;
        token.role = user.role;
      }
      return token;
    },
    // Agregar los datos del token a la sesión
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.accessToken = token.accessToken;
        session.user.area = token.area;
        session.user.role = token.role;
      }
      return session;
    },
    // Lógica de redirección después de iniciar sesión
    async redirect({ url, baseUrl }) {
      // Verifica si la URL de redirección es igual a la baseUrl (raíz de la app)
      if (url === baseUrl || url.startsWith(baseUrl)) {
        return `${baseUrl}/dashboard`;  // Redirige a /dashboard
      }
      return baseUrl; // Si no, redirige a la URL base predeterminada
    },
  },
};
