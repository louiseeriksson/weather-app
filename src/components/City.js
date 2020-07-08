import React from 'react'

export const City = ({ city, weather }) => {
  console.log(weather);


  return (
    <header>
      <div className='hamburger-menu'>
        <div className='burger-line'></div>
        <div className='burger-line'></div>
        <div className='burger-line'></div>
      </div>
      <div className='city-wrapper'>
        <h1 className='city-name'>{weather.name}</h1>
        {weather.coord &&
          <p className='coordinates'>Long: {weather.coord.lon}, Lat: {weather.coord.lat}</p>}
      </div>
    </header>
  )
}