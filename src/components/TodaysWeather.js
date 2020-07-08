import React from 'react'

export const TodaysWeather = ({ weather }) => {

  const today = new Date()
  const month = today.getMonth()
  const date = today.getDate()
  const hour = today.getHours()
  const minute = today.getMinutes()

  return (
    <div className='todays-weather'>
      {/* add icons instead of sunrise/sunset */}

      <p className='detail-text'>
        {month === 1 &&
          `Jan ${date}, ${hour}:${minute} AM`}
        {month === 2 &&
          `Feb ${date}, ${hour}:${minute} AM`}
        {month === 3 &&
          `Mar ${date}, ${hour}:${minute} AM`}
        {month === 4 &&
          `Apr ${date}, ${hour}:${minute} AM`}
        {month === 5 &&
          `May ${date}, ${hour}:${minute} AM`}
        {month === 6 &&
          `June ${date}, ${hour}:${minute} AM`}
        {month === 7 &&
          `July ${date}, ${hour}:${minute} AM`}
        {month === 8 &&
          `Aug ${date}, ${hour}:${minute} AM`}
        {month === 9 &&
          `Sep ${date}, ${hour}:${minute} AM`}
        {month === 10 &&
          `Oct ${date}, ${hour}:${minute} AM`}
        {month === 11 &&
          `Nov ${date}, ${hour}:${minute} AM`}
        {month === 12 &&
          `Dec ${date}, ${hour}:${minute} AM`}
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
                `${weather.main.feels_like}ºC`}
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