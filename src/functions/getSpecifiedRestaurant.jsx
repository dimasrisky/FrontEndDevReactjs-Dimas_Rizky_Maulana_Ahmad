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

export function getSpecifiedRestaurant(location_id) {
  const [ restaurant, setRestaurant ] = useState()
  const { setIsLoading } = useContext(LoadingContext)
  useEffect(() => {
    async function getDetailRestaurant(){
      setIsLoading(true)
      const response = await fetch(`https://travel-advisor.p.rapidapi.com/restaurants/get-details?location_id=${location_id}&currency=USD&lang=en_US`, options)
      const result = await response.json()
      setRestaurant(result)
      setIsLoading(false)
    }
    getDetailRestaurant()
  }, [])

  return restaurant
}
