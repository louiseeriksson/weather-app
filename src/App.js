import React, { useState, useEffect } from 'react'

import { City } from 'components/City'
import { TodaysWeather } from 'components/TodaysWeather'
import { Forecast } from 'components/Forecast'
import { Footer } from 'components/Footer'

export const App = () => {

  const [city, setCity] = useState('Stockholm')
  const [country, setCountry] = useState('Sweden')
  const [weather, setWeather] = useState({})
  const [forecast, setForecast] = useState({})
  const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&APPID=b09042e161870e44988114035ff61156`
  const FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&APPID=b09042e161870e44988114035ff61156`

  useEffect(() => {
    fetch(WEATHER_URL)
      .then((res) => {
        return res.json()
      })
      .then(JSON => {
        setWeather(JSON)
      })
  }, [])

  useEffect(() => {
    fetch(FORECAST_URL)
      .then((res) => {
        return res.json()
      })
      .then(JSON => {
        setForecast(JSON)
      })
  }, [])

  return (
    <div>
      <City city={city} setCity={setCity} weather={weather} />
      <TodaysWeather weather={weather} />
      <Forecast forecast={forecast} />
      <Footer />
    </div>
  )
}
