import React from 'react'

export const City = ({ weather }) => {
  console.log(weather);


  return (
    <header className='city-wrapper'>
      <h1 className='city-name'>{weather.name}</h1>
      {weather.coord &&
        <p className='coordinates'>Long: {weather.coord.lon}, Lat: {weather.coord.lat}</p>}
    </header>
  )
}