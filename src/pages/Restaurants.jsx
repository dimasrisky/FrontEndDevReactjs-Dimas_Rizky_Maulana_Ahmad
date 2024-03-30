import React, { useCallback, useState } from 'react'
import { RestaurantLists } from '../components/Components'

export function Restaurants() {
  return (
    <>
    {/* Headline */}
    <div className='w-[90vw] mx-auto my-[50px]'>
        <div className=' flex flex-col gap-3'>
            <h1 className='font-inter text-[50px]'>Restaurants</h1>
            <p className='text-[15px] max-w-[50%]'>adalah sebuah proyek website Technical Test yang memungkinkan pengguna untuk menemukan daftar restoran lengkap beserta dengan fitur filtering, rating restoran, nama, cuisine, dan lainnya.</p>
        </div>
    </div>

    <RestaurantLists />
    </>
  )
}
