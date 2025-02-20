'use client'
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

const Header = ()=>{

    const router = useRouter()

    const handleSignout = async ()=>{
        await signOut({
            redirect: false
        })
        router.push("/")
    }
    
    return(
        <div className="w-full h-[50px] bg-blue-500 flex flex-row justify-evenly">
            <div className="w-fit h-full flex px-2">
                <div className="text-white font-bold text-lg w-full h-fit my-auto text-center">
                    Welcome to the user account page
                </div>
            </div>
            <button onClick={handleSignout} className="w-fit h-full flex bg-red-300 px-2">
                <div className="text-red-500 font-bold text-lg w-full h-fit my-auto text-center">
                    SignOut
                </div>
            </button>
        </div>
    )
}

export default Header