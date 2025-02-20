

const page = () => {
  return (
    <div className='w-full h-full flex'>
      <div className='w-fit h-full mx-auto flex'>
        <div className='w-[300px] h-fit my-auto bg-red-300 rounded-md shadow-md'>
          <div className='w-full h-[100px] flex flex-col p-4'>
            <div className='w-full h-[30%] text-center flex text-red-500'>
              <div className='w-full h-fit my-auto text-center'>FORBIDDENN !!!</div>
            </div>
            <div className='w-full h-[70%] text-center flex my-4 text-red-500'>
              <strong>You don't have access to this page</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page