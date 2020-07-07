import React from 'react'

export const TodaysWeather = ({ weather }) => {
  console.log(weather);

  return (
    <div>
      <h3>
        {weather.main &&
          `${Math.round(weather.main.temp)}º C, ${weather.weather[0].description}`}
      </h3>
      <p>
        {weather.sys &&
          `Sunrise: ${new Date(weather.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}, Sunset: ${new Date(weather.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}
      </p>

      <div>
        <h3>
          {weather.main &&
            `Feels like: ${weather.main.feels_like}ºC`}
        </h3>
        <h3>
          {weather.main &&
            `Humidity: ${weather.main.humidity}%`}
        </h3>
      </div>
    </div>
  )
}