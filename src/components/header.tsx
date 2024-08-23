import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faBook, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <>
       {/* Profile */}
       <div className="flex justify-between p-4">
      <div className="flex">
        <Link href={'profile'} className="">
        <Image
        width={0}
        height={0}
        sizes="100vw"
        className="w-10 h-10 rounded-full bg-slate-500"
      src="https://media.istockphoto.com/id/1476170969/id/foto/potret-pemuda-siap-kerja-konsep-bisnis.jpg?s=1024x1024&w=is&k=20&c=4COVCz0wDi5Jo2cxQGOaA_I-fm2cy1iy9OWwx56R1xs="
      alt="Picture of the author"
    />
        </Link>
        <div className="ml-4">
          <div className="text-sm">Welcome !</div>
          <div className="text-black">Budi Santoso</div>
        </div>
      </div>
      
      <div className="md:hidden">
      <FontAwesomeIcon width={30} icon={faHeart} />
      </div>
      <div className="hidden md:grid grid-cols-3 gap-4">
      <Link href={'/'} className="my-3">
      <div className="hover:mt-[-4px] transition-all duration-200 hover:shadow-xl">
      <div className="flex flex-wrap items-center justify-center ">
      <FontAwesomeIcon width={25} icon={faHome} />
      </div>
    <div className="text-center">Homes</div>
    </div>
    </Link>
   
    <Link href={'/favorite'} className="my-3">
    <div className="hover:mt-[-4px] transition-all duration-200 hover:shadow-xl">
      <div className="flex flex-wrap items-center justify-center">
    <FontAwesomeIcon height={25} icon={faHeart} />
    </div>
    <div className="text-center">Favorit</div>
    </div>
    </Link>

    <Link href={'/history'} className="my-3">
    <div className="hover:mt-[-4px] transition-all duration-200 hover:shadow-xl">
      <div className="flex flex-wrap items-center justify-center">
    <FontAwesomeIcon height={25} icon={faBook} />
    </div>
    <div className="text-center">History</div>
    </div>
    </Link>
      </div>
    </div>
    </>
  )
}

export default Header
