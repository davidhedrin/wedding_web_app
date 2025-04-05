'use client'

import Link from "next/link"
import { useState } from "react"

const Navbar = () => {

    const appName = process.env.APPS_NAME || "Weeds-App";

    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const menu = [
        { name: "Layanan", url: "/" },
        { name: "Venue", url: "/about" },
        { name: "Dresses", url: "/contact" },
        { name: "Contact", url: "/contact" },
    ]
    return (
      <>
      <nav className="bg-white w-full border-b border-gray-200 shadow-sm fixed z-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className=" flex justify-between h-16 items-center ">
            {/* Logo / Brand */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold text-gray-800">
                {appName}
              </Link>
            </div>
  
            {/* Menu Items */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex space-x-6">
                {
                  menu.map((item, index) => (
                  <Link key={index} href={item.url} className="text-gray-600 hover:text-black">
                    { item.name }
                  </Link>

                  ))
                }
              </div>

              <div className="hidden md:inline-block">
                  <Link href="/login" className="px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded hover:bg-slate-900">
                      Login
                  </Link>
              </div>
            </div>
  
            {/* TODO: Tambahkan menu mobile di sini kalau perlu */}
            <div className="md:hidden">
              <button onClick={toggleMenu}>
                {isOpen ? (
                    <i className='bx bx-x text-xl'></i>
                ): (
                    <i className='bx bx-menu text-xl'></i>
                )}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className="md:hidden fixed w-full top-0 left-0 pt-32 pb-16 bg-white shadow-lg z-40 transition-transform duration-300 ease-in-out transform flex justify-center items-center"
        style={{ transform: isOpen ? 'translateY(0)' : 'translateY(-100%)' }}
      >
        <div className="">
          <div className="flex flex-col space-y-4">
            {
              menu.map((item, index) => (
              <Link key={index} href={item.url} className="text-gray-600 hover:text-black">
                { item.name }
              </Link>

              ))
            }
          </div>
        </div>
      </div>
      </>
    )
}

export default Navbar;