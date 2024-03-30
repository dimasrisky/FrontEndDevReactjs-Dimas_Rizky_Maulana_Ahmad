import React from 'react'
import { Rating, ThinStar } from '@smastrom/react-rating'
import { Link } from 'react-router-dom'
import openIcon from '../assets/icons/open.svg'
import closedIcon from '../assets/icons/closed.svg'

const starStyle = {
    itemShapes: ThinStar,
    itemStrokeWidth: 1,
    activeFillColor: '#012a56',
    inactiveStrokeColor: '#012a56'
}

export function RestaurantCard({ location_id, name, price_level, cuisine, open_now_text, rating, image }) {
  return (
    <div className='w-[290px] flex flex-col justify-between border h-[400px]'>
        <div>
            <div className={`w-full h-[220px] bg-[url('${image}')] bg-cover bg-center`}></div>
            <div className='flex flex-col justify-between mt-1 gap-2'>
                <h1 className='text-[17px]'>{name}</h1>
                <Rating style={{ maxWidth: 100}} halfFillMode='svg' itemStyles={starStyle} value={rating} readOnly />
                <div className='w-full flex items-center justify-between'>
                    <h3 className='text-xs opacity-60'>{cuisine} • {price_level}</h3>
                    <div className='flex items-center gap-1'>
                        <img src={open_now_text == 'Open Now' ? openIcon : closedIcon } className='w-7' alt="status" />
                        <h4 className='text-[10px] uppercase pr-1'>{open_now_text === null ? 'closed' : open_now_text }</h4>
                    </div>
                </div>
            </div>
        </div>
        <Link to={`detail/${location_id}`} className='w-full text-center bg-bluePrimary text-xs py-3 text-white uppercase tracking-wider hover:bg-[#0d1824]'>learn more</Link>
    </div>
  )
}
