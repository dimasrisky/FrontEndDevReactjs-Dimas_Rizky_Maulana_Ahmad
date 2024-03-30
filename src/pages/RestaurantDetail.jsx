import React, { useRef, useContext } from 'react'
import { Rating, ThinStar } from '@smastrom/react-rating'
import { Loading, ReviewCard } from '../components/Components'
import { getSpecifiedRestaurant } from '../functions/Functions'
import { useParams } from 'react-router-dom'
import { LoadingContext } from '../context/LoadingContext'

const starStyle = {
  itemShapes: ThinStar,
  itemStrokeWidth: 1,
  activeFillColor: '#012a56',
  inactiveStrokeColor: '#012a56'
}


export function RestaurantDetail() {
  const scrollingReviewCards = useRef()
  const { location_id } = useParams()
  const restaurant = getSpecifiedRestaurant(location_id)
  const { isLoading } = useContext(LoadingContext)
  console.log(restaurant)
  return (
    <>
      {isLoading && (
        <div className='w-screen h-screen flex justify-center items-center'>
          <Loading />
        </div>
      )}
      <div className={`w-[100vw] h-[40vh] bg-[url('${restaurant?.photo.images.large.url}')] bg-cover bg-center relative brightness-90`}>
        <div className='absolute -bottom-[130px] left-[60px] flex flex-col gap-2'>
          <div className={`w-[125px] h-[106px] bg-[url('${restaurant?.photo.images.original.url}')] bg-cover bg-center border-2 border-white`}></div>
          <div>
            <h1 className='font-bold text-[25px]'>{restaurant?.name}</h1>
            {/* rating */}
            <div className='flex items-center gap-3'>
              <Rating style={{ maxWidth: 100}} halfFillMode='svg' itemStyles={starStyle} value={restaurant?.rating} readOnly />
              <h1 className='text-base font-semibold'>{restaurant?.rating}</h1>
            </div>
            {/* Cusine */}
            <h1 className='text-[13px]'><span className='font-bold'>Cuisine</span> : {restaurant?.cuisine.map(item => <span key={item.key}>{item.name}, </span>)}</h1>
          </div>
        </div>
      </div>
      <div className='w-[90vw] mx-auto mt-[30vh] mb-[2rem]'>
        <div className='flex justify-between items-center my-7'>
          <h1 className='font-bold text-[24px]'>Reviews</h1>
          <div className='flex items-center gap-3'>
            <button  className="p-2 bg-[#D9D9D9] rounded-full hover:scale-125 transition-all duration-300" type="button" id="prev-button-category" onClick={() => scrollingReviewCards.current.scrollLeft -= 600}>
                <img src="../../src/assets/icons/arrow-right-black.svg" alt="arrow-left" className="rotate-180 w-[1rem]" />
            </button>
            <button className="p-2 bg-[#D9D9D9] rounded-full hover:scale-125 transition-all duration-300" type="button" id="next-button-category" onClick={() => scrollingReviewCards.current.scrollLeft += 600}>
                <img src="../../src/assets/icons/arrow-right-black.svg" alt="arrow-right" className="w-[1rem]" />
            </button>
          </div>
        </div>
        <div ref={scrollingReviewCards} className="min-w-[100vw] flex flex-row gap-3 overflow-x-scroll scroll-smooth " style={{ scrollbarWidth: 'none' }}>
          {restaurant?.reviews.map(review => <ReviewCard key={review.review_id} rating={review.rating} summary={review.summary} author={review.author} />)}
        </div>
      </div>
    </>
  )
}
