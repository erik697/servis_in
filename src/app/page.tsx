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
  {name : 'Rio Aditya', category : 'AC', address : 'Br. Suda kanginan, kediri, tabanan', phone : '0812344747', email : 'budiawan@gmail.com', gender : 'male', description : 'saya sudah mulai belajar tentang komputer mulai sejak umur saya 3 bulan'},
  {name : 'Rahmat', category : 'AC', address : 'Br. Suda kanginan, kediri, tabanan', phone : '0812344747', email : 'budiawan@gmail.com', gender : 'male', description : 'saya sudah mulai belajar tentang komputer mulai sejak umur saya 3 bulan'},
  {name : 'Ken', category : 'AC', address : 'Br. Suda kanginan, kediri, tabanan', phone : '0812344747', email : 'budiawan@gmail.com', gender : 'male', description : 'saya sudah mulai belajar tentang komputer mulai sejak umur saya 3 bulan'},
  {name : 'Kyo', category : 'AC', address : 'Br. Suda kanginan, kediri, tabanan', phone : '0812344747', email : 'budiawan@gmail.com', gender : 'male', description : 'saya sudah mulai belajar tentang komputer mulai sejak umur saya 3 bulan'},
]
const Categories = ({name, key} : {name : string, key:number}) => {
return (
  <div key={key} className="px-3 justify-center snap-center">
            <div className="w-16 h-16 rounded-full bg-slate-200 flex flex-wrap items-center justify-center">
<FontAwesomeIcon width={25} icon={faPhone}/>
            </div>
            <p className="text-center text-sm">{name}</p>
        </div>
)
}

const Products = ({product, key} : {product : Product, key:number}) =>{
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

  {/* District */}
  <div className="flex md:hidden flex-row pt-4 px-4 justify-center items-center">
      <div className="">
        <FontAwesomeIcon width={25} icon={faLocation}  />
      </div>
      <select className="p-2 focus:outline-none border-b-2 w-full" name="" id="">
          <option className="my-2" value="">{"< - - Select Location - - >"}</option>
          <option className="my-2" value="">{"Kediri"}</option>
          <option className="my-2" value="">{"Belalang"}</option>
        </select>
     </div>

    {/* Searching */}
    <div className="sticky top-0 left-0 py-4 bg-white w-full z-50">
      <div className="flex bg-slate-100 mx-4 my-2 p-4 rounded-md shadow-lg">
          <div className="h-4 w-4 mr-3">
          <FontAwesomeIcon width={20} icon={faSearch} />
          </div>
          <input type="text" className="bg-transparent focus:outline-none w-full" placeholder="Search" />
      </div>

      <div className="w-full p-4 hidden md:grid grid-cols-2 gap-3">
        <select className="p-2 flex flex-row focus:outline-none border-b-2" name="" id="">
          <option className="my-2" value="">{"< - - Select Category - - >"}</option>
          {categories && categories.map((item, key)=>(
                    <option key={key} className="my-2" value="">{item.name}</option>

        ))}
        </select>

        <select className="p-2 flex flex-row focus:outline-none border-b-2" name="" id="">
          <option className="my-2" value="">{"< - - Select Location - - >"}</option>
          
        </select>
      </div>

      </div>
      {/* adsense */}
      <div className="">
      <Image
        width={0}
        height={0}
        sizes="100vw"
        className="w-[90%] h-[90px] md:h-[200px] bg-red-50 mx-auto my-4"
      src="data:image/jpeg;base64,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"
      alt="Picture of the author"
    />
      
      </div>

      


      {/* categori */}
      <div className="snap-x snap-mandatory overflow-x-scroll flex flex-row my-4 w-full md:hidden">
        {categories && categories.map((item, key)=>(
          <Categories key={key} name={item.name} />
        ))}
        
       
      </div>

   
     

      {/* Most Populer */}
      <>
      <div className="flex justify-between px-4">  
        <h3 className="font-bold">Most Populer</h3>
        <div className="">See All</div>
      </div>
      <div className="overflow-x-scroll flex flex-row my-4 w-full">
        <div className="px-3 justify-center">
            <div className="rounded-full py-1 px-2 border-2 border-black ">
            <p>See All</p>
            </div>
        </div>
       
      </div>
      </>

      {/* product */}
      <div className="md:grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 w-full p-4">
      {products && products.map((item, key)=>(
        <Products key={key} product={item} />
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
