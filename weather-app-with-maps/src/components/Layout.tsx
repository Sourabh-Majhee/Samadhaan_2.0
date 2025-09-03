import React, { type PropsWithChildren } from 'react'

const Layout = ({children}:PropsWithChildren) => {
  return (
      <div className='bg-gradien'>
          {children}
      </div>
  )
}

export default Layout