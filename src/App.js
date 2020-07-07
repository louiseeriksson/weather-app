import React, { useState, useEffect } from 'react'

import { Header } from 'components/Header'
import { City } from 'components/City'
import { TodaysWeather } from 'components/TodaysWeather'
import { Footer } from 'components/Footer'

export const App = () => {

  const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=b09042e161870e44988114035ff61156'
  const [weather, setWeather] = useState({})

  useEffect(() => {
    fetch(WEATHER_URL)
      .then((res) => {
        return res.json()
      })
      .then(JSON => {
        setWeather(JSON)
      })
  }, [])

  return (
    <div>
      <Header />
      <City weather={weather} />
      <TodaysWeather weather={weather} />
      <Footer />
    </div>
  )
}
