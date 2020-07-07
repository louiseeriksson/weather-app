import React from 'react'

export const TodaysWeather = ({ weather }) => {
  console.log(weather);

  return (
    <div>
      <h3>
        {/* {weather.main.temp}ºC, ${weather.weather[0].description} */}
      </h3>
    </div>
  )
}