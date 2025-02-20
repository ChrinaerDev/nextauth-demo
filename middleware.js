import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req){

    if(req.nextUrl.pathname.startsWith("/signin") ||
       req.nextUrl.pathname.startsWith("/api/auth")  ){
        return NextResponse.next()
    }

    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

    if(!token){
        const loginUrl = new URL("/signin", req.url)

        loginUrl.searchParams.set("callbackUrl", req.nextUrl.pathname)
        return NextResponse.redirect(loginUrl)
    }else{
        if(req.nextUrl.pathname.startsWith("/api/seed")){
            return NextResponse.redirect(new URL("/forbidden", req.url))
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/dashboard/:path*", "/pp/:path*", "/api/:path*"]
}