import React from 'react'
import { faker } from '@faker-js/faker'

export function ReviewCard({ rating, summary, author}) {
  return (
    <>
    <div className='min-w-[368px] max-w-[368px] p-4 border border-[#B5AEAE] rounded-[10px] flex flex-col gap-2'>
        <div className={`w-[55px] h-[55px] rounded-full bg-[url('${faker.image.avatar()}')] bg-cover bg-center`}></div>
        <div>
        <h1 className='font-semibold text-[18px]'>{author}</h1>
        <div className='flex items-center gap-1'>
            <img src="../../src/assets/icons/star.svg" className='w-3' alt="rating" />
            <h1 className='text-xs font-semibold'>{rating}</h1>
        </div>
        </div>
        <p className='text-[12px]'>{summary}</p>
    </div>
    </>
  )
}
