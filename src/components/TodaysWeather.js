import React from 'react'

export const TodaysWeather = ({ weather }) => {
  console.log(weather);

  return (
    <div>
      <h3>
        {weather.main &&
          `${Math.round(weather.main.temp)}ºC, ${weather.weather[0].description}`}
      </h3>
      <p>
        {weather.sys &&
          `Sunrise: ${new Date(weather.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}, Sunset: ${new Date(weather.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}
      </p>

    </div>
  )
}