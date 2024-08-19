// 'use client'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { faBook, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

function Footer() {
    // const pathname = usePathname()
  return (
   
     <div className="sticky bottom-0 left-0 bg-slate-100 w-full grid grid-cols-4 gap-2 border-t md:hidden">
    <Link href={'/'} className="my-3">
      <div className="flex flex-wrap items-center justify-center">
      <FontAwesomeIcon height={25} icon={faHome} />
      </div>
    <p className="text-center">Home</p>
    </Link>
   
    <Link href={'favorite'} className="my-3">
      <div className="flex flex-wrap items-center justify-center">
    <FontAwesomeIcon height={25} icon={faHeart}  />
    </div>
    <p className="text-center">Favorite</p>
    
    </Link>
    <Link href={'history'} className="my-3">
      <div className="flex flex-wrap items-center justify-center">
    <FontAwesomeIcon height={25} icon={faBook}  />
    </div>
    <p className="text-center">History</p>
    </Link>
    
    <Link href={'profile'} className="my-3">
      <div className="flex flex-wrap items-center justify-center">
    <FontAwesomeIcon height={25} icon={faUser}  />
    </div>
    <p className="text-center">Profile</p>
    
    </Link>
      </div>
     
  )
}

export default Footer
