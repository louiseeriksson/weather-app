import { ui } from './ui'
import { createSlice } from '@reduxjs/toolkit'

export const weather = createSlice({
  name: 'weather',
  initialState: [],

  reducers: {
    setWeather: (state, action) => {
      state = action.payload.weather
    }
  }
})

const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=b09042e161870e44988114035ff61156'
// Thunk
export const fetchWeather = () => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch(WEATHER_URL)
      .then((res) => res.json())
      .then((json) => {
        dispatch(weather.actions.setWeather({ weather: json }))
        console.log(json)

        dispatch(ui.actions.setLoading(false))
      })
  }
}