import React from 'react'

export const City = ({ city, setCity, weather }) => {
  console.log(city);

  // Maybe remove hamburger menu and make the city name clickable to input city if your choice


  return (
    <header>
      {/* <div className='hamburger-menu'>
        <div className='burger-line'></div>
        <div className='burger-line'></div>
        <div className='burger-line'></div>
      </div> */}
      <div className='city-wrapper'>

        <form onSubmit={(event) => event.preventDefault()}>

          <input
            type='text'
            onChange={(event) => setCity(event.target.value)}
            value={city}
            placeholder={city} />
        </form>

        {/* <h1 className='city-name'>{weather.name}</h1> */}

        {weather.coord &&
          <p className='coordinates'>Lat: {weather.coord.lat}, Long: {weather.coord.lon}</p>}
      </div>
    </header>
  )
}