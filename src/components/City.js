import React from 'react'

export const City = ({ weather }) => {
  console.log(weather);


  return (
    <main>
      <h1>{weather.name}</h1>
      {weather.coord &&
        <p>Long: {weather.coord.lon}, Lat: {weather.coord.lat}</p>}
    </main>
  )
}