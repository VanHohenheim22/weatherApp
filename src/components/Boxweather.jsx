import React from 'react'
import { useState } from 'react'

const Boxweather = ({weather}) => {
    console.log(weather);
    const transform = {
        farenheit: ((weather?.main.temp - 273) * 9/5 + 32).toFixed(1),
        celcius: (weather?.main.temp - 273).toFixed(1)
    }

    const [changegrades, setChangegrades] = useState(true)

    const handleclick =() =>{
        setChangegrades(!changegrades)
    }
  return (
    <div className="container-weather">
        <div className='box-weather'>
            <div className="box-head">
                <h2>Weather App</h2>
                <span>{weather?.name}, {weather?.sys.country}</span>
            </div>
            <div className="bodyapp">
                <div className="imgbodyapp">
                    <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="" />
                    <span className='bold-black'>{changegrades ? `${transform.farenheit}°F`: `${transform.celcius}°C`}</span>
                </div>
                <div className="infobodyapp">
                    <h4>{weather?.weather[0].description}</h4>
                    <ul>
                        <li><i className='bx bx-wind' ></i> Wind speed: <b className='bold-black'>{weather?.wind.speed}m/s</b></li>
                        <li><i className='bx bxs-cloud'></i> clouds: <b className='bold-black'>{weather?.clouds.all}%</b></li>
                        <li><i className='bx bxs-thermometer'></i> Pressure: <b className='bold-black'>{weather?.main.pressure}hPa</b></li>
                    </ul>
                </div>

            </div>
            <div className="button-change">
            <button onClick={handleclick}>{changegrades ? "Change to °C": "change to °F"}</button>
            </div>
        </div>
    </div>
  )
}

export default Boxweather