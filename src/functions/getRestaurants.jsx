import React, { useEffect, useState, useContext } from 'react'
import { LoadingContext } from '../context/LoadingContext'

const options = {
    method: "GET",
    headers: {
        "Accept" : "application/json",
        "X-RapidAPI-Host" : `${import.meta.env.VITE_API_HOST}`,
        "X-RapidAPI-Key" : `${import.meta.env.VITE_API_KEY}`
    }
}
export function getRestaurants(url) {
    const [ restaurants, setRestaurants ] = useState([])
    const { setIsLoading } = useContext(LoadingContext)
    useEffect(() => {
        async function getAllRestaurants(){
            setIsLoading(true)
            const response = await fetch(url, options)
            const result = await response.json()
            const restaurants = result.data
            const filteredRestaurants = restaurants.filter(restaurant => Object.keys(restaurant).length != 8)
            setRestaurants(filteredRestaurants)
            setIsLoading(false)
        }
        getAllRestaurants()
    }, [url])

    return restaurants
}
