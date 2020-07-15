import React from 'react'

export const TodaysWeather = ({ weather }) => {

  return (
    <div className='todays-weather'>

      <p className='sun'>
        {weather.sys &&
          `Sunrise: ${new Date(weather.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}, Sunset: ${new Date(weather.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}
      </p>

      <div className='temp-details-wrapper'>

        <div className='temp-wrapper'>
          {weather.weather &&
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weathericon" />}

          <h3>
            {weather.weather &&
              `${weather.weather[0].description}`}
          </h3>

          <div className='temp-celsius-wrapper'>
            <h3 className='temp'>
              {weather.main &&
                `${Math.round(weather.main.temp)}`}
            </h3>

            <h3 className='celsius'>º</h3>
          </div>
        </div>

        <div className='details-wrapper'>
          <div>
            <p className='detail-text'>Feels like: </p>
            <p>
              {weather.main &&
                `${Math.round(weather.main.feels_like)}º`}
            </p>
          </div>
          <div className='border'></div>
          <div>
            <p className='detail-text'>Humidity: </p>
            <p>
              {weather.main &&
                `${weather.main.humidity}%`}
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}