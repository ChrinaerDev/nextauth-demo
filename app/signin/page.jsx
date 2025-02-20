'use client'
import { useState } from 'react'
import {signIn} from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useSearchParams } from 'next/navigation'

const SignInForm = () => {

  const [credentials, setCredentials] = useState({username: "", password: "" })

  const path = usePathname()
  const params = useSearchParams()
  const router = useRouter()
  const handleSubmit = async(e)=>{
    e.preventDefault()

    const res = await signIn("credentials", 
      {
        redirect: false,
        username: credentials.username,
        password: credentials.password
      }
    )

    if(res.error){
      alert("Invalid username or password")
    }else{
      if(path.startsWith("/api")){
        router.push("/dashboard")
      }else{
        alert(params.get('callbackUrl'))
        router.push(`./${params.get('callbackUrl')}`)
      }
      
    }
  }
  return (
    <div className='w-full h-full bg-white flex-col'>
        <div className='mx-auto h-full w-fit flex flex-col '>
            <form onSubmit={handleSubmit} className='px-2 gap-4 flex flex-col w-[300px] h-[400px] my-auto bg-gray-50 shadow-md rounded-md '>
                <div className='text-black font-bold text-center py-4 w-full h-fit'>
                    SignIn-to-Auth
                </div>
                <div className='w-full h-[50px] items-center flex flex-row'>
                <input onChange={
                  (e)=>{
                    setCredentials({...credentials, username: e.target.value})
                  }} 
                  className='pl-2 mx-auto bg-gray-200 rounded-md w-[95%] h-[50px]' type="text" placeholder='Enter your name' id="" />
                </div>
                <div className='w-full h-[50px] items-center flex flex-row'>
                <input onChange={
                  (e)=>{
                    setCredentials({...credentials, password: e.target.value})
                  }
                 } 
                  className='pl-2 mx-auto bg-gray-200 rounded-md w-[95%] h-[50px]' type="password" placeholder='Enter your name' id="" />
                </div>
                <button type="submit" className='transition-all rounded-md text-white w-full h-fit py-6 text-center bg-blue-500 hover:bg-blue-400'>SignUp</button>
            </form>
        </div>
    </div>
  )
}

export default SignInForm