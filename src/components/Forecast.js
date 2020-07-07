import React from 'react'

export const Forecast = ({ forecast }) => {
  return (
    <div>
      <h3>
        {forecast.list &&
          `${new Date(forecast.list.filter(item => item.dt_txt.includes('12:00'))[0].dt_txt.replace(" ", "T")).toLocaleDateString('en-US', { weekday: "short" })} : ${Math.round(forecast.list.filter(item => item.dt_txt.includes('12:00'))[0].main.temp)}º C, ${forecast.list.filter(item => item.dt_txt.includes('12:00'))[0].weather[0].description}`}
      </h3>
      <h3>
        {forecast.list &&
          `${new Date(forecast.list.filter(item => item.dt_txt.includes('12:00'))[1].dt_txt.replace(" ", "T")).toLocaleDateString('en-US', { weekday: "short" })} : ${Math.round(forecast.list.filter(item => item.dt_txt.includes('12:00'))[1].main.temp)}º C, ${forecast.list.filter(item => item.dt_txt.includes('12:00'))[1].weather[0].description}`}
      </h3>
      <h3>
        {forecast.list &&
          `${new Date(forecast.list.filter(item => item.dt_txt.includes('12:00'))[2].dt_txt.replace(" ", "T")).toLocaleDateString('en-US', { weekday: "short" })} : ${Math.round(forecast.list.filter(item => item.dt_txt.includes('12:00'))[2].main.temp)}º C, ${forecast.list.filter(item => item.dt_txt.includes('12:00'))[2].weather[0].description}`}
      </h3>
      <h3>
        {forecast.list &&
          `${new Date(forecast.list.filter(item => item.dt_txt.includes('12:00'))[3].dt_txt.replace(" ", "T")).toLocaleDateString('en-US', { weekday: "short" })} : ${Math.round(forecast.list.filter(item => item.dt_txt.includes('12:00'))[3].main.temp)}º C, ${forecast.list.filter(item => item.dt_txt.includes('12:00'))[3].weather[0].description}`}
      </h3>
      <h3>
        {forecast.list &&
          `${new Date(forecast.list.filter(item => item.dt_txt.includes('12:00'))[4].dt_txt.replace(" ", "T")).toLocaleDateString('en-US', { weekday: "short" })} : ${Math.round(forecast.list.filter(item => item.dt_txt.includes('12:00'))[4].main.temp)}º C, ${forecast.list.filter(item => item.dt_txt.includes('12:00'))[4].weather[0].description}`}
      </h3>


    </div>
  )
}