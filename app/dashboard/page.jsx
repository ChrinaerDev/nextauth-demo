import { getServerSession } from 'next-auth'
import { options } from '../api/auth/[...nextauth]/options'
import Header from '../components/Header'
import { redirect } from 'next/navigation'

const page = async () => {

  const session = await getServerSession(options)
  if(!session){
    redirect("/")
  }
  return (
    <div className='w-full h-full flex flex-col'>
        <Header/>
        <div className='w-full h-[500px] flex flex-col'>
          <div className='flex flex-col w-fit h-full mx-auto'>
            <div className='text-2xl w-fit h-fit my-auto'>
                <strong>Welcome</strong><br></br>
                <strong>{session.user.id}</strong> Your password is <br></br>
                <s>I already have your id !!!</s>
            </div>
          </div>
        </div>
    </div>
  )
}

export default page

// export async function getServerSideProps(context){

//   const session = await getSession(context)

//   if(!session){
//     return {
//       redirect: {
//         destination: "/signin",
//         permanent: false
//       }
//     }
//   }
//   return {props: {user: session.user}}
// }