import React from 'react'

export const RestaurantInfo = ({info = {}}) => {
    const { name, sla, areaName, totalRatingsString, avgRatingString, cuisines } =
    info;


  return (
    <div className='flex items-center flex-col'>
        <h1 className='font-sans font-bold text-lg'>{name}</h1>
        <h2>{cuisines?.join(", ")}</h2>
    </div>
  )
}
