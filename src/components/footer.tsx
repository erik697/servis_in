'use client'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { faBook, faDatabase, faHome, faToolbox } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

function Footer() {
    const pathname = usePathname()
  return (
   
     <div className="sticky bottom-0 left-0 bg-slate-100 w-full grid grid-cols-4 gap-2 border-t md:hidden">
    <Link href={'/'} className="my-3">
    
    {pathname == "/detail" ?
     <>
     <div className="flex flex-wrap items-center justify-center">
     <FontAwesomeIcon height={20} icon={faToolbox} color={pathname == "/detail" ? 'blue' : "gray"} />
     </div>
   <div className={`text-center ${pathname == "/detail" ? "text-blue-500" : "text-gray-500"}`}>Detail</div>
   </>
   :
   <>
   <div className="flex flex-wrap items-center justify-center">
   <FontAwesomeIcon height={20} icon={faHome} color={pathname == "/" ? 'blue' : "gray"} />
   </div>
 <div className={`text-center ${pathname == "/" ? "text-blue-500" : "text-gray-500"}`}>Home</div>
 </>
  }
 
    </Link>
   
    <Link href={'favorite'} className="my-3">
      <div className="flex flex-wrap items-center justify-center">
    <FontAwesomeIcon height={20} icon={faHeart} color={pathname == "/favorite" ? 'blue' : "gray"}  />
    </div>
    <div className={`text-center ${pathname == "/favorite" ? "text-blue-500" : "text-gray-500"}`}>Favorite</div>
    
    </Link>
    <Link href={'history'} className="my-3">
      <div className="flex flex-wrap items-center justify-center">
    <FontAwesomeIcon height={20} icon={faBook} color={pathname == "/history" ? 'blue' : "gray"} />
    </div>
    <div className={`text-center ${pathname == "/history" ? "text-blue-500" : "text-gray-500"}`}>History</div>
    </Link>
    
    <Link href={'profile'} className="my-3">
      <div className="flex flex-wrap items-center justify-center">
    <FontAwesomeIcon height={20} icon={faUser} color={pathname == "/profile" ? 'blue' : "gray"} />
    </div>
    <div className={`text-center ${pathname == "/profile" ? "text-blue-500" : "text-gray-500"}`}>Profile</div>
    
    </Link>
      </div>
     
  )
}

export default Footer
