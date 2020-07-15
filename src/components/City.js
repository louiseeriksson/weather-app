import React from 'react'

export const City = ({ city, setCity, weather }) => {

  return (
    <header>

      <form className='city-wrapper' onSubmit={(event) => event.preventDefault()}>

        {/* <img src={require('../assets/location-pin.png')} alt="location pin" /> */}

        <input
          type='text'
          onChange={(event) => setCity(event.target.value)}
          value={city}
          placeholder={city} />
      </form>

    </header>
  )
}