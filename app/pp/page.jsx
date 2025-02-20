

const page = () => {
  return (
    <div className='w-full h-full flex'>
      <div className='w-fit h-full mx-auto flex'>
        <div className='w-[300px] h-fit my-auto bg-gray-50 rounded-md shadow-md'>
          <div className='w-full h-[100px] flex flex-col p-4'>
            <div className='w-full h-[30%] text-center flex'>
              <div className='w-full h-fit my-auto text-center'>This is the welcome page</div>
            </div>
            <div className='w-full h-[70%] text-center flex my-4'>
              <strong>Pseudo-Page</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page