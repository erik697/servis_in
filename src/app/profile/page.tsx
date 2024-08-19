import Footer from "@/components/footer";
import Header from "@/components/header";
import { faFacebook, faInstagram, faTiktok, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faMap, faStarHalfAlt } from "@fortawesome/free-regular-svg-icons";
import { faClose, faFemale, faLocation, faMale, faMars, faPhone, faSearch, faStar, faUser, faVenus } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons/faBook";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function Home() {

  const profile = {
    name : "I Komang Sindhu Tohir",
    phone : "0812345677",
    address : "Br. suda kanginan, Kediri, Tabanan",
    gender : "male"
  }

  return (
    <>

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
          <h3 className="font-bold text-lg mt-16 md:mt-14 md:text-3xl mb-2">Profile</h3>

          <div className="grid grid-cols-2 gap-y-4">
            <h3 className="text-lg font-semibold">Name</h3>
            <h3 className="text-lg">{profile.name}</h3>

            <h3 className="text-lg font-semibold">Phone</h3>
            <h3 className="text-lg">{profile.phone}</h3>

            <h3 className="text-lg font-semibold">Address</h3>
            <h3 className="text-lg">{profile.address}</h3>

            <h3 className="text-lg font-semibold">Gender</h3>
            <h3 className=""><FontAwesomeIcon width={30} icon={profile.gender == "male" ? faMars : faVenus} /></h3>
          </div>
        </div>
      </div>
        </div>
    
      <Footer/>
   </main>
   </>
  );
}
