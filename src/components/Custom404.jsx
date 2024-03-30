import React from 'react'
import custom404Icon from '../assets/icons/404.svg'

export function Custom404() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <img src={custom404Icon} alt="not-found" className='w-[500px]' />
    </div>
  )
}
