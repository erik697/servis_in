import Footer from "@/components/footer";
import Header from "@/components/header";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faLocation, faPhone, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons/faBook";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import Image from "next/image";
import Link from "next/link";


interface Product{
  name : string,
  category : string,
  address : string,
  phone : string,
  email : string,
  gender : string,
  description : string
}

let categories = [
  {name : 'Electrician'},
  {name : 'Builder'},
  {name : 'AC'},
  {name : 'Plumber'},
  {name : 'Computer'},
  {name : 'Car'},
  {name : 'Phone'},
]

let products = [
  {name : 'Budi Setiawan', category : 'AC', address : 'Br. Suda kanginan, kediri, tabanan', phone : '0812344747', email : 'budiawan@gmail.com', gender : 'male', description : 'saya sudah mulai belajar tentang komputer mulai sejak umur saya 3 bulan' },
  {name : 'Rudi Tabuti', category : 'AC', address : 'Br. Suda kanginan, kediri, tabanan', phone : '0812344747', email : 'budiawan@gmail.com', gender : 'male', description : 'saya sudah mulai belajar tentang komputer mulai sejak umur saya 3 bulan'},
  {name : 'Laksman', category : 'AC', address : 'Br. Suda kanginan, kediri, tabanan', phone : '0812344747', email : 'budiawan@gmail.com', gender : 'male', description : 'saya sudah mulai belajar tentang komputer mulai sejak umur saya 3 bulan'},
]
const Categories = ({name} : {name : string}) => {
return (
  <div className="px-3 justify-center snap-center">
            <div className="w-16 h-16 rounded-full bg-slate-200 flex flex-wrap items-center justify-center">
<FontAwesomeIcon width={25} icon={faPhone}/>
            </div>
            <p className="text-center text-sm">{name}</p>
        </div>
)
}

const Products = ({product, key} : {product : Product, key : number}) =>{
return (
  <div key={key} className="group w-[300px] h-[350px] perspective-800 group mx-auto">
  <div className="md:backface-hidden md:transform transition duration-[1.0s] md:group-hover:rotate-y-180 
      rounded-lg shadow-lg absolute t-0">
   
  <Link href={"/detail"} className="shadow-lg bg-slate-50 rounded-md">
  <Image
  width={0}
  height={0}
  sizes="100vw"
  className="w-full h-52 bg-gray-500 rounded-md"
src="https://media.istockphoto.com/id/1347475562/id/foto/teknisi-ti-terfokus-pencahayaan-memeriksa-perangkat-keras-komputer.jpg?s=1024x1024&w=is&k=20&c=LATeffs_LGrD4pyP44c4TcM-QsMbeVX2A6F1mzA9Ir8="
alt="Picture of the author"
/>
  
  <div className="p-2">
  <h5 className="font-bold">{product.category}</h5>
  <h5 className="font-bold">{product.name}</h5>
  <p className="text-sm">star 4.5 | 8 people</p>
  </div>
  </Link>
  </div>
  <div className="hidden md:block backface-hidden md:transform transition duration-[1.0s] -rotate-y-180 md:group-hover:rotate-y-0 
      rounded-lg shadow-lg absolute t-0">
 <div className="p-4">
  <h5 className="font-bold">{product.name}</h5>
  <hr className="mb-4" />
  <p className="text-sm"><span className="font-bold">Email</span> : {product.email}</p>
  <p className="text-sm"><span className="font-bold">Address</span> : {product.address}</p>
  <p className="text-sm"><span className="font-bold">Gender</span> : {product.gender}</p>
  <p className="text-sm"><span className="font-bold">Description</span> : {product.description}</p>
  <div className=" flex items-center justify-center my-4">
  <Link href={"/detail"} className="bg-green-500 text-white px-3 py-2 rounded-lg">Detail</Link>
  </div>
  </div>
  </div>
</div>
)
}

export default function Home() {
  return (
    <>
   <main className="w-full">
    {/* Profile */}
    <Header/>

    <div className="min-h-screen">

    {/* Searching */}
    <div className="sticky top-0 left-0 py-4 bg-white w-full z-50">
      <div className="flex bg-slate-100 mx-4 my-2 p-4 rounded-md shadow-lg">
          <div className="h-4 w-4 mr-3">
          <FontAwesomeIcon width={20} icon={faSearch} />
          </div>
          <input type="text" className="bg-transparent focus:outline-none w-full" placeholder="Search" />
      </div>
    </div>
    

      {/* product */}
      <div className="md:grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 w-full p-4">
      {products && products.map((item, key)=>(
        <Products product={item} key={key} />
      ))

      } 
      
      </div>
      </div>


{/* Footer Menu */}
    <Footer/>
   </main>
   </>
  );
}
