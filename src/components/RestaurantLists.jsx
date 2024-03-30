import React, { useEffect, useRef, useState, useContext } from 'react'
import { RestaurantCard, Loading } from './Components'
import { getRestaurants, getCuisine } from '../functions/Functions'
import { LoadingContext } from '../context/LoadingContext'

export function RestaurantLists() {
    const { isLoading } = useContext(LoadingContext)
    const [ url, setUrl ] = useState('https://travel-advisor.p.rapidapi.com/restaurants/list?location_id=298184&restaurant_tagcategory=10591&restaurant_tagcategory_standalone=10591&currency=USD&lunit=km&limit=15&prices_restaurants=10953%2C10954%2C10955&min_rating=3&open_now=false&lang=en_US')
    const isRestaurantOpenCheckbox = useRef()
    const getAllrestaurants = getRestaurants(url)
    const [ restaurants, setRestaurants ] = useState(getAllrestaurants)
    const [ isRestaurantOpen, setIsRestaurantIsOpen ] = useState(false)
    const [ price, setPrice ] = useState('')
    const [ cuisine, setCuisine ] = useState('')
    const cuisines = getCuisine(url)

    // Mengambil semua data restoran
    useEffect(() => {
        setRestaurants(getAllrestaurants)
    }, [getAllrestaurants])

    // Filtering berdasarkan status dari restoran (open/closed)
    useEffect(() => {
        let currentRestaurants = restaurants
        if(isRestaurantOpen === true){
            let onlyOpenRestaurants = currentRestaurants.filter(restaurant => restaurant.open_now_text == 'Open Now')
            setRestaurants(onlyOpenRestaurants)
        }else if(isRestaurantOpen === false){
            setRestaurants(getAllrestaurants)
        }
    }, [isRestaurantOpen])
    
    // Filterisasi berdasarkan harga (price_level) dari sebuah restoran
    useEffect(() => {
        if(price != '' && isRestaurantOpen === true){
            let restaurants = getAllrestaurants
            let filterizedByPrize = restaurants.filter(restaurant => restaurant.price_level == price && restaurant.open_now_text == "Open Now")
            setRestaurants(filterizedByPrize)
        }else if(price != ''){
            let restaurants = getAllrestaurants
            let filterizedByPrize = restaurants.filter(restaurant => restaurant.price_level == price)
            setRestaurants(filterizedByPrize)
        }
    }, [price])

    // Filterisasi Server (belum tau maksudnya di requirement)
    useEffect(() => {
        if(cuisine != ''){
            setUrl(`https://travel-advisor.p.rapidapi.com/restaurants/list?location_id=298184&restaurant_tagcategory=10591&restaurant_tagcategory_standalone=10591&combined_food=${cuisine}&currency=USD&lunit=km&limit=15&prices_restaurants=10953%2C10954%2C10955&min_rating=3&open_now=false&lang=en_US`)
        }
    }, [cuisine])

    // Mereset filter saat tombol clear all ditekan
    function clearFilter(){
        setRestaurants(getAllrestaurants)
        setCuisine('')
        setPrice('')
        setIsRestaurantIsOpen(false)
        isRestaurantOpenCheckbox.current.checked = false
    }

    return (
        <>
        <div className="w-[100vw] border-y mt-[20px] py-4">
            <div className='w-[90vw] mx-auto flex justify-between items-center'>
                <div className='flex items-center gap-8'>
                    <h1 className=''>Filter By :</h1>
                    <div className='flex items-center gap-3 px-1 shadow-md'>
                        <input ref={isRestaurantOpenCheckbox} type="checkbox" id='open' onChange={(event) => setIsRestaurantIsOpen(event.target.checked)} />
                        <label htmlFor='open'>Open Now</label>
                    </div>
                    <div>
                        <select name="price-level" id="price-level" onChange={event => setPrice(event.target.value)} value={price} className='outline-none w-[120px] px-1 shadow-md'>
                            <option value='' className='font-bold'>Price</option>
                            <option value="$">$</option>
                            <option value="$$$$">$$$$</option>
                            <option value="$$ - $$$">$$ - $$$</option>
                        </select>
                    </div>
                    <div>
                        <select name="category" id="category-level" onChange={event => setCuisine(event.target.value)} value={cuisine} className='outline-none w-[200px] px-1 shadow-md'>
                            <option value=''>Categories</option>
                            {cuisines?.map((cuisine, index) => <option key={index} value={cuisine.value}>{cuisine.label}</option>)}
                        </select>
                    </div>
                </div>
                <div>
                    <button onClick={clearFilter} type='button' className='px-9 py-2 text-[#b1afaf] hover:bg-[#b1afaf] hover:text-white bg-transparent border border-[#b1afaf] transition-all duration-300'>Clear All</button>
                </div>
            </div>
        </div>
        <div className='w-[90vw] mx-auto mt-[80px]'>
            <h1 className=' text-3xl my-[50px]'>All Restaurants</h1>
            <div className='flex gap-5 justify-start flex-wrap mt-6'>
                {isLoading? <Loading /> : (
                    restaurants?.map((restaurant, index) => <RestaurantCard key={index} location_id={restaurant.location_id} name={restaurant.name} price_level={restaurant.price_level} cuisine={restaurant.cuisine[0].name} rating={restaurant.rating} open_now_text={restaurant.hasOwnProperty('open_now_text') ? restaurant.open_now_text : null } image={restaurant.photo.images.original.url} />)
                )}
            </div>
            <div className='mx-auto w-[300px]'>
                <button onClick={() => setUrl('https://travel-advisor.p.rapidapi.com/restaurants/list?location_id=298184&restaurant_tagcategory=10591&restaurant_tagcategory_standalone=10591&currency=USD&lunit=km&limit=30&prices_restaurants=10953%2C10954%2C10955&min_rating=3&open_now=false&lang=en_US')} className='w-full py-2 bg-transparent border border-bluePrimary text-bluePrimary hover:text-white hover:bg-bluePrimary text-center my-[80px] transition-all duration-300 uppercase'>load more</button>
            </div>
        </div>
        </>
    )
}
