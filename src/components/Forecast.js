import React from 'react'

export const Forecast = ({ forecast }) => {

  console.log(forecast);


  return (
    <div className='forecast-section'>

      <div className='forecast-wrapper'>
        {/* <h3 className='forecast'>NEXT 5 DAYS</h3>
        <div className='forecast-border'></div> */}
      </div>

      <div className='forecast-border'></div>

      <div className='forecast'>
        <h3>
          {forecast.list &&
            `${new Date(forecast.list.filter(item => item.dt_txt.includes('12:00'))[0].dt_txt.replace(" ", "T")).toLocaleDateString('en-US', { weekday: "long" })}: ${Math.round(forecast.list.filter(item => item.dt_txt.includes('12:00'))[0].main.temp)}º`}
        </h3>

        {forecast.list &&
          <img src={`http://openweathermap.org/img/wn/${forecast.list[0].weather[0].icon}@2x.png`} alt="" />}

        <h3>
          {forecast.list &&
            `${forecast.list.filter(item => item.dt_txt.includes('12:00'))[0].weather[0].description}`}
        </h3>
      </div>


      <div className='forecast'>
        <h3>
          {forecast.list &&
            `${new Date(forecast.list.filter(item => item.dt_txt.includes('12:00'))[1].dt_txt.replace(" ", "T")).toLocaleDateString('en-US', { weekday: "long" })}: ${Math.round(forecast.list.filter(item => item.dt_txt.includes('12:00'))[1].main.temp)}º`}
        </h3>

        {forecast.list &&
          <img src={`http://openweathermap.org/img/wn/${forecast.list[1].weather[0].icon}@2x.png`} alt="" />}

        <h3>
          {forecast.list &&
            `${forecast.list.filter(item => item.dt_txt.includes('12:00'))[1].weather[0].description}`}
        </h3>
      </div>


      <div className='forecast'>
        <h3>
          {forecast.list &&
            `${new Date(forecast.list.filter(item => item.dt_txt.includes('12:00'))[2].dt_txt.replace(" ", "T")).toLocaleDateString('en-US', { weekday: "long" })}: ${Math.round(forecast.list.filter(item => item.dt_txt.includes('12:00'))[2].main.temp)}º`}
        </h3>

        {forecast.list &&
          <img src={`http://openweathermap.org/img/wn/${forecast.list[2].weather[0].icon}@2x.png`} alt="" />}

        <h3>
          {forecast.list &&
            `${forecast.list.filter(item => item.dt_txt.includes('12:00'))[2].weather[0].description}`}
        </h3>
      </div>


      <div className='forecast'>
        <h3>
          {forecast.list &&
            `${new Date(forecast.list.filter(item => item.dt_txt.includes('12:00'))[3].dt_txt.replace(" ", "T")).toLocaleDateString('en-US', { weekday: "long" })}: ${Math.round(forecast.list.filter(item => item.dt_txt.includes('12:00'))[3].main.temp)}º`}
        </h3>

        {forecast.list &&
          <img src={`http://openweathermap.org/img/wn/${forecast.list[3].weather[0].icon}@2x.png`} alt="" />}

        <h3>
          {forecast.list &&
            `${forecast.list.filter(item => item.dt_txt.includes('12:00'))[3].weather[0].description}`}
        </h3>
      </div>


      <div className='forecast'>
        <h3>
          {forecast.list &&
            `${new Date(forecast.list.filter(item => item.dt_txt.includes('12:00'))[4].dt_txt.replace(" ", "T")).toLocaleDateString('en-US', { weekday: "long" })}: ${Math.round(forecast.list.filter(item => item.dt_txt.includes('12:00'))[4].main.temp)}º`}
        </h3>

        {forecast.list &&
          <img src={`http://openweathermap.org/img/wn/${forecast.list[4].weather[0].icon}@2x.png`} alt="" />}

        <h3>
          {forecast.list &&
            `${forecast.list.filter(item => item.dt_txt.includes('12:00'))[4].weather[0].description}`}
        </h3>
      </div>
    </div>
  )
}