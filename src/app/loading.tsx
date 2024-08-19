import { LoadingSvg } from '@/assets'
import Image from 'next/image'
import React from 'react'

export default function loading() {
  return (
    <div className='h-screen  w-full flex justify-center items-end'>
      <Image className="mx-auto my-auto" src={LoadingSvg} height={200} width={200} alt="loading" />
    </div>
  )
}
