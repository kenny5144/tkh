import React from 'react'
import WeatherDaily from './WeatherDaily'
import Weathercurrent from './Weathercurrent'

const Mainweather = ({data , formatDate}) => {
  return (
    <div>
      <div >

      <Weathercurrent data={data} formatDate={formatDate}/>
      <WeatherDaily data={data} formatDate={formatDate}/>
      </div>
    </div>
  )
}

export default Mainweather
