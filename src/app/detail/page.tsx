'use client'
import Footer from "@/components/footer";
import Header from "@/components/header";
import { faFacebook, faInstagram, faTiktok, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faMap, faStarHalfAlt } from "@fortawesome/free-regular-svg-icons";
import { faClose, faLocation, faPhone, faSearch, faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons/faBook";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function Home() {
  const [popUp, setPopUp] = useState(false);
  return (
    <>
    {/* pop up image */}
<div className={`fixed w-full h-screen backdrop-blur-md z-50 px-2 md:px-24 pt-48 md:pt-0 transition-all duration-300 ${popUp ? 'scale-100' : 'scale-0'}`}>
  <div className="flex justify-end">   
    <button className="px-2 py-1 mt-2 bg-red-500 rounded-sm " onClick={()=>setPopUp(false)}>
      <FontAwesomeIcon height={30} icon={faClose} color="white" />
    </button>
  </div>
<Image className="h-[200px] md:h-[550px] w-[100%] group-hover:scale-105 transition-all duration-300" width={0} height={0} sizes="100vw" src={"https://images.unsplash.com/photo-1479920252409-6e3d8e8d4866?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="Working"/>
</div>

   <main className="w-full">
 
 <Header/>

    <div className="min-h-screen p-4">
      <div className="md:flex">
        <div className="">
            <Image
                className="w-[140px] h-[140px] md:w-[240px] md:h-[240px] bg-red-200 mx-auto my-8 rounded-full"
                width={0}
                height={0}
                sizes="100vw"
                src={"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                alt="Technition image"
                />

            <div className="mx-auto flex justify-center">
              <div className="flex items-center">
              <FontAwesomeIcon width={25} icon={faStar} color="yellow"/>
              <FontAwesomeIcon width={25} icon={faStar} color="yellow"/>
              <FontAwesomeIcon width={25} icon={faStar} color="yellow"/>
              <FontAwesomeIcon width={25} icon={faStar} color="yellow"/>
              <FontAwesomeIcon width={25} icon={faStarHalfAlt} color="yellow"/>
              <p className="font-bold text-xl ml-2">4.5</p>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-3 mt-4 mb-10 mx-24 md:w-64">
              <div className="flex justify-center items-center">
                <Link href={'https://www.instagram.com/'}>
                <FontAwesomeIcon width={25} icon={faInstagram}/>
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <Link href={'https://x.com/'}>
                <FontAwesomeIcon width={25} icon={faTwitter}/>
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <Link href={'https://www.tiktok.com/en/'}>
                <FontAwesomeIcon width={25} icon={faFacebook}/>
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <Link href={'https://www.tiktok.com/en/'}>
                <FontAwesomeIcon width={25} icon={faTiktok}/>
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <Link href={'https://maps.app.goo.gl/YzdbGnh7pK6q7abr5'}>
                <FontAwesomeIcon width={25} icon={faMap}/>
                </Link>
              </div>
            
            </div>
        </div>
        <div className="">
          <h3 className="font-bold text-lg mt-16 md:mt-14 md:text-3xl mb-2">Service Title</h3>
          <h3 className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, possimus explicabo consequatur in illum facilis, magnam nesciunt aliquid, dolor nobis dolorem error similique a. Reprehenderit voluptatibus adipisci non placeat dignissimos laborum sint nemo iure maxime ipsam dolorum blanditiis consequatur voluptas ea, dolores dicta rerum sequi dolorem, repudiandae cumque earum magnam?</h3>
        </div>
      </div>
          <h3 className="font-bold text-lg mt-16 mb-2 md:text-3xl md:ml-4">Images List</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-10">
            <button className="h-[170px] md:h-[400px] w-[90%] mx-auto md:my-4 group overflow-clip shadow-lg" onClick={()=>setPopUp(true)}>
            <Image className="h-[170px] md:h-[400px] w-[100%] group-hover:scale-105 transition-all duration-300" width={0} height={0} sizes="100vw" src={"https://images.unsplash.com/photo-1479920252409-6e3d8e8d4866?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="Working"/>
            </button>
            <button className="h-[170px] md:h-[400px] w-[90%] mx-auto md:my-4 group overflow-clip shadow-lg" onClick={()=>setPopUp(true)}>
            <Image className="h-[170px] md:h-[400px] w-[100%] group-hover:scale-105 transition-all duration-300" width={0} height={0} sizes="100vw" src={"https://images.unsplash.com/photo-1479920252409-6e3d8e8d4866?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="Working"/>
            </button>
            <button className="h-[170px] md:h-[400px] w-[90%] mx-auto md:my-4 group overflow-clip shadow-lg" onClick={()=>setPopUp(true)}>
            <Image className="h-[170px] md:h-[400px] w-[100%] group-hover:scale-105 transition-all duration-300" width={0} height={0} sizes="100vw" src={"https://images.unsplash.com/photo-1479920252409-6e3d8e8d4866?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="Working"/>
            </button>
            <button className="h-[170px] md:h-[400px] w-[90%] mx-auto md:my-4 group overflow-clip shadow-lg" onClick={()=>setPopUp(true)}>
            <Image className="h-[170px] md:h-[400px] w-[100%] group-hover:scale-105 transition-all duration-300" width={0} height={0} sizes="100vw" src={"https://images.unsplash.com/photo-1479920252409-6e3d8e8d4866?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="Working"/>
            </button>
           </div>
        </div>
    
 <div className="fixed bottom-24 md:bottom-10 right-5">
  <Link href={'https://wa.me/1XXXXXXXXXX'}>
        <div className="flex justify-center items-center bg-green-500 py-2 px-3 rounded-full text-3xl">
          <FontAwesomeIcon icon={faWhatsapp} color="white"/>
        </div>
        </Link>
      </div> 
      <Footer/>
   </main>
   </>
  );
}
