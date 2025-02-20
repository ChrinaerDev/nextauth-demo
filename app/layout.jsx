import React from 'react'
import '@/app/globals.css'

const AppLayout = ({children}) => {
  return (
    <html>
      <head>
        <title>Auth</title>
      </head>
      <body>
       <div className='w-screen  h-screen'>{children}</div>
      </body>
    </html>
  )
}

export default AppLayout