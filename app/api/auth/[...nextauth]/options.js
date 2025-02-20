import CredentialsProvider from "next-auth/providers/credentials";

export const options = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                username: {
                    label: 'username',
                    placeholder: 'Enter your username',
                    type: 'text'
                },
                password: {
                    label: 'password',
                    placeholder: 'Enter your password',
                    type: 'password'
                }
            },
            async authorize(credentials){
                const user = {
                    id: "bc5e7a44-807a-4410-b86b-d83ca16590e5",
                    username: "geraud",
                    password: "prolifick"
                }

                if(credentials?.username === user.username && credentials?.password === user.password){
                    return user
                }else{
                    return null
                }
            }
        }),
    ],
    pages:{
        signIn: "/signin"
    },
    callbacks: {
        async session({session, token}){
            session.user.id = token.sub
            return session
        },
        async jwt({token, user}){
            if(user) token.sub = user.id
            return token
        }
    }
}