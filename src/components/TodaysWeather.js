import React from 'react'

export const TodaysWeather = ({ weather }) => {

  const today = new Date()
  const monthNames = [
    "Jan", "Feb", "Mar",
    "Apr", "May", "June", "July",
    "Aug", "Sep", "Oct",
    "Nov", "Dec"
  ]
  const month = today.getMonth()
  const date = today.getDate()
  const hour = today.getHours()
  const minute = today.getMinutes()

  return (
    <div className='todays-weather'>
      {/* add icons instead of sunrise/sunset */}
      {/* AM/PM time? */}

      <p className='detail-text'>
        {month &&
          `${monthNames[month]} ${date}, ${hour}:${minute}`}
      </p>

      <p className='sun'>
        {weather.sys &&
          `Sunrise: ${new Date(weather.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}, Sunset: ${new Date(weather.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}
      </p>

      <div className='temp-details-wrapper'>
        <div className='temp-wrapper'>
          <h3>
            {/* add icon for weatherdescription */}
            {weather.main &&
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
                `${Math.round(weather.main.feels_like)}ºC`}
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