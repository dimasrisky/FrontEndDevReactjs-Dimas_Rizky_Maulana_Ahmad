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

export function getCuisine(url) {
    const [ cuisine, setCuisine ] = useState([])
    const { setIsLoading } = useContext(LoadingContext)
    useEffect(() => {
        async function getAllCuisine(){
            setIsLoading(true)
            const response = await fetch(url, options)
            const result = await response.json()
            const cuisine = result.filters_v2.filter_sections[1].filter_groups[0].options
            for (let i = 0; i < 15; i++) {
                setCuisine(prev => [...prev, cuisine[i + 1]])
            }
            setIsLoading(false)
        }
        getAllCuisine()
    }, [url])

    return cuisine
}
