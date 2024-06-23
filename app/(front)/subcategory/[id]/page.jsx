import { getProductsBySubCategoryId, getSubCategoryId } from '@/actions/sub-category'
import { BreadcrumbWithComponent } from '@/components/CategoryBreadCrumb'
import SubCategoriesComp from '@/components/SubCategoriesComp'
import React from 'react'

export default async function Page({params:{id}}) {
  const subCategoriesData = await getProductsBySubCategoryId(id)
  const subCategoryData = await getSubCategoryId(id)
  console.log(subCategoryData)
  return (
    <div className='lg:px-[6rem] md:pt-[3rem] px-2 pt-[2rem] lg:pt-[3.2rem] min-h-[100vh]'>
    <div className=''>
      <BreadcrumbWithComponent categorySlug={subCategoryData?.title} />
      </div>
     <SubCategoriesComp subCategoriesData={subCategoriesData}/>
    </div>
  )
}
