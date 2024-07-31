import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faPhone, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons/faBook";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import Image from "next/image";

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
  {name : 'Budi Setiawan', category : 'AC' },
  {name : 'Rudi Tabuti', category : 'AC'},
  {name : 'Laksman', category : 'AC'},
  {name : 'Rio Aditya', category : 'AC'},
  {name : 'Rahmat', category : 'AC'},
  {name : 'Ken', category : 'AC'},
  {name : 'Kyo', category : 'AC'},
]
const Categories = ({name} : {name : string}) => {
return (
  <div className="px-3 justify-center">
            <div className="w-16 h-16 rounded-full bg-slate-200 flex flex-wrap items-center justify-center">
<FontAwesomeIcon width={25} icon={faPhone}/>
            </div>
            <p className="text-center text-sm">{name}</p>
        </div>
)
}

const Products = ({name, category} : {name : string, category:string}) =>{
return (
  <div className="shadow-lg bg-slate-50 rounded-md">
  <Image
  width={0}
  height={0}
  sizes="100vw"
  className="w-full h-52 bg-gray-500 rounded-md"
src="https://media.istockphoto.com/id/1347475562/id/foto/teknisi-ti-terfokus-pencahayaan-memeriksa-perangkat-keras-komputer.jpg?s=1024x1024&w=is&k=20&c=LATeffs_LGrD4pyP44c4TcM-QsMbeVX2A6F1mzA9Ir8="
alt="Picture of the author"
/>
  
  <div className="p-2">
  <h5 className="font-bold">{category}</h5>
  <h5 className="font-bold">{name}</h5>
  <p className="text-sm">star 4.5 | 8 people</p>
  </div>
  </div>
)
}

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
      
      <div className="">
      <FontAwesomeIcon width={30} icon={faHeart} />
      </div>
    </div>
    {/* Searching */}
      <div className="flex bg-slate-100 mx-4 my-2 p-4 rounded-md shadow-lg">
          <div className="h-4 w-4 mr-3">
          <FontAwesomeIcon width={20} icon={faSearch} />
          </div>
          <input type="text" className="bg-transparent focus:outline-none" placeholder="Search" />
      </div>

      {/* adsense */}
      <div className="">
      <Image
        width={0}
        height={0}
        sizes="100vw"
        className="w-[90%] h-[90px] bg-red-50 mx-auto mt-4"
      src="https://media.istockphoto.com/id/1411398003/id/foto/botol-semprot-plastik-kosong-dan-kemasan-di-atas-meja-kayu-putih-untuk-desain-kemasan.jpg?s=1024x1024&w=is&k=20&c=BL_sMfNwQqrdiNUi9nLSVvv2nGCwR1xB9CZWlYxowck="
      alt="Picture of the author"
    />
      
      </div>
      {/* categori */}
      <div className="overflow-x-scroll flex flex-row my-4 w-full">
        {categories && categories.map((item, key)=>(
          <Categories name={item.name} />
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
      <div className="grid grid-cols-2 gap-3 w-full p-4">
      {products && products.map((item, key)=>(
        <Products name={item.name} category={item.category} />
      ))

      } 
      
      </div>

      <div className="sticky bottom-0 left-0 bg-slate-100 w-full grid grid-cols-4 gap-2 border-t">
    <div className="my-3">
      <div className="flex flex-wrap items-center justify-center">
      <FontAwesomeIcon width={25} icon={faHome} />
      </div>
    <p className="text-center">Home</p>
    </div>
    <div className="my-3">
      <div className="flex flex-wrap items-center justify-center">
    <FontAwesomeIcon width={25} icon={faUser} />
    </div>
    <p className="text-center">Profile</p>
    
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
   </main>
   </>
  );
}
