import { faFacebook, faInstagram, faTiktok, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faMap, faStarHalfAlt } from "@fortawesome/free-regular-svg-icons";
import { faLocation, faPhone, faSearch, faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons/faBook";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import Image from "next/image";


export default function Home() {
  return (
    <>
   <main className="w-full">
    {/* Profile */}
    <div className="flex justify-between p-4">
      <div className="flex">
        <div className="">
        <Image
        width={0}
        height={0}
        sizes="100vw"
        className="w-10 h-10 rounded-full bg-slate-500"
      src="https://media.istockphoto.com/id/1476170969/id/foto/potret-pemuda-siap-kerja-konsep-bisnis.jpg?s=1024x1024&w=is&k=20&c=4COVCz0wDi5Jo2cxQGOaA_I-fm2cy1iy9OWwx56R1xs="
      alt="Picture of the author"
    />
        </div>
        <div className="ml-4">
          <p className="text-sm">Welcome !</p>
          <p className="text-black">Budi Santoso</p>
        </div>
      </div>
      
      <div className="md:hidden">
      <FontAwesomeIcon width={30} icon={faHeart} />
      </div>
      <div className="hidden md:grid grid-cols-3 gap-4">
      <div className="my-3">
      <div className="flex flex-wrap items-center justify-center">
      <FontAwesomeIcon width={25} icon={faHome} />
      </div>
    <p className="text-center">Home</p>
    </div>
   
    <div className="my-3">
      <div className="flex flex-wrap items-center justify-center">
    <FontAwesomeIcon width={25} icon={faHeart} />
    </div>
    <p className="text-center">Favorit</p>
    
    </div>
    <div className="my-3">
      <div className="flex flex-wrap items-center justify-center">
    <FontAwesomeIcon width={25} icon={faBook} />
    </div>
    <p className="text-center">History</p>
    </div>
      </div>
    </div>


    <div className="min-h-screen p-4">
      <Image
          className="w-[340px] h-[340px] bg-red-200 mx-auto my-8 rounded-lg"
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

      <div className="grid grid-cols-5 gap-3 mt-4 mb-10 mx-24 md:mx-96">
        <div className="flex justify-center items-center">
          <FontAwesomeIcon width={25} icon={faInstagram}/>
        </div>
        <div className="flex justify-center items-center">
          <FontAwesomeIcon width={25} icon={faTwitter}/>
        </div>
        <div className="flex justify-center items-center">
          <FontAwesomeIcon width={25} icon={faFacebook}/>
        </div>
        <div className="flex justify-center items-center">
          <FontAwesomeIcon width={25} icon={faTiktok}/>
        </div>
        <div className="flex justify-center items-center">
          <FontAwesomeIcon width={25} icon={faMap}/>
        </div>
       
      </div>

      <h3 className="font-bold text-lg mt-16 mb-2">Service Title</h3>
      <h3 className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, possimus explicabo consequatur in illum facilis, magnam nesciunt aliquid, dolor nobis dolorem error similique a. Reprehenderit voluptatibus adipisci non placeat dignissimos laborum sint nemo iure maxime ipsam dolorum blanditiis consequatur voluptas ea, dolores dicta rerum sequi dolorem, repudiandae cumque earum magnam?</h3>
      <h3 className="font-bold text-lg mt-16 mb-2">Image</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-10">
        <Image className="h-[170px] md:h-[400px] w-[90%] bg-red-200 mx-auto md:my-4" width={0} height={0} sizes="100vw" src={"https://images.unsplash.com/photo-1479920252409-6e3d8e8d4866?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="Working"/>
        <Image className="h-[170px] md:h-[400px] w-[90%] bg-red-200 mx-auto md:my-4" width={0} height={0} sizes="100vw" src={"https://images.unsplash.com/photo-1479920252409-6e3d8e8d4866?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="Working"/>
        <Image className="h-[170px] md:h-[400px] w-[90%] bg-red-200 mx-auto md:my-4" width={0} height={0} sizes="100vw" src={"https://images.unsplash.com/photo-1479920252409-6e3d8e8d4866?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="Working"/>
        <Image className="h-[170px] md:h-[400px] w-[90%] bg-red-200 mx-auto md:my-4" width={0} height={0} sizes="100vw" src={"https://images.unsplash.com/photo-1479920252409-6e3d8e8d4866?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="Working"/>
      </div>
    </div>

      <div className="sticky bottom-0 left-0 bg-slate-100 w-full grid grid-cols-4 gap-2 border-t md:hidden">
    <div className="my-3">
      <div className="flex flex-wrap items-center justify-center">
      <FontAwesomeIcon width={25} icon={faHome} />
      </div>
    <p className="text-center">Home</p>
    </div>
   
    <div className="my-3">
      <div className="flex flex-wrap items-center justify-center">
    <FontAwesomeIcon width={25} icon={faHeart} />
    </div>
    <p className="text-center">Favorit</p>
    
    </div>
    <div className="my-3">
      <div className="flex flex-wrap items-center justify-center">
    <FontAwesomeIcon width={25} icon={faBook} />
    </div>
    <p className="text-center">History</p>
    </div>
    
    <div className="my-3">
      <div className="flex flex-wrap items-center justify-center">
    <FontAwesomeIcon width={25} icon={faUser} />
    </div>
    <p className="text-center">Profile</p>
    
    </div>
      </div>
      <div className="fixed bottom-24 md:bottom-0 right-5">
        <div className="flex justify-center items-center bg-green-500 py-2 px-3 rounded-full">
          <FontAwesomeIcon width={35} icon={faWhatsapp} color="white"/>
        </div>
      </div>
   </main>
   </>
  );
}
