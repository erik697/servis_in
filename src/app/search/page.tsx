'use client'
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { faAlignLeft, faArrowLeft, faClockRotateLeft, faSearch, faTimeline } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Home() {
 const lastSearch = [
  'Service Ac',
  'Service Laptop',
  'Tutor Naik Gaji'
 ]
 const [search, setSearch] = useState("");

 const router = useRouter()

 const SetSearch = (value : string) => {
  setSearch(value)
 }
  return (
    <>
    <div className="flex justify-between mt-6">
      <button className="mx-4" onClick={()=>{router.back()}}><FontAwesomeIcon icon={faArrowLeft} width={20} /></button>
      <input className="mr-4 py-1 px-4 focus:outline-none bg-slate-200 rounded-3xl text-lg w-full" value={search} onChange={(val)=>{setSearch(val.target.value)}} autoFocus />
   <button className="mr-4" onClick={()=>alert(search)}>
    <FontAwesomeIcon icon={faSearch} width={20}/>
   </button>
    </div>
      {lastSearch && lastSearch.map((item, key)=>
      (
        <button className="flex p-4" onClick={()=>{setSearch(item)}}>
          <FontAwesomeIcon icon={faClockRotateLeft} width={20}/>
          <div className="ml-4" key={key}>{item}</div>
        </button>
      ))

      }
    
    </>
  );
}
