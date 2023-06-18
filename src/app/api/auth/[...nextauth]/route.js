import connectDB from "@/utils/db";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/user";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        await connectDB();
        try {
          const user = await User.findOne({ email: credentials.email });
          if (
            user &&
            (await bcrypt.compare(credentials.password, user.password))
          ) {
            return user;
          } else {
            throw new Error("Invalid email or password");
          }
        } catch (error) {
          throw new Error(error.message);
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
