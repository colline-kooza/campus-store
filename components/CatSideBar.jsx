import { getData } from '@/lib/getData';
import Link from 'next/link'
import React from 'react'

export default async function CatSideBar({slug}) {
  const allCategories = (await getData("categories")) || [];
  const filteredCategories=allCategories.filter((cat)=>cat.slug !== slug)
  // console.log(filteredCategories)
  return (
    <div className='p-3'>
      <h2 className='font-bold text-lg '>Categories</h2>
    <div className='mt-2 flex flex-col gap-4'>
      {
        filteredCategories?.map((cat , i)=>{
          return (
            <Link key={i} className='text-sm hover:text-orange-500' href={`/category/${cat.slug}`}>{cat.title}</Link>
          )
        })
      }
   
    </div>
    </div>
  )
}
