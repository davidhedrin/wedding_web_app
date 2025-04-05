import Navbar from '@/components/nav-home'
import React from 'react'

export default function GuestLayout({children}:{children:React.ReactNode}) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}
