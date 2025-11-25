import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/User"
import Payment from "@/models/Payment"
import connectDB from "@/db/connectDb"


const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if(account.provider === "github" || account.provider === "google"){
        await connectDB()
        // check if user already exist
        const currentUser = await User.findOne({email: user.email})
        if(!currentUser){
          // create a new user
          const newUser = User.create({
            email: user.email,
            username: user.email.split("@")[0]
          })
        } 
        return true
      }
    },
    
    async session({ session, user, token }) {
      const dbUser = await User.findOne({email: session.user.email})
      // console.log(dbUser)
      session.user.name = dbUser.username
      return session
    },
  }
})
export {handler as GET, handler as POST}