import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Boxweather from './components/Boxweather'

function App() {
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [charge, setCharge] = useState(true)
  useEffect(() => {

    const success = pos => {
      const obj = {
        lat: pos.coords.latitude,
        lon:  pos.coords.longitude
      }
      setCoords(obj)
    }
    navigator.geolocation.getCurrentPosition(success)
    
    
  }, [])
  useEffect(() => {
    if(coords){
      const apikey = "2f6ee782cb711ccc958ff1621ff4efd5"
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apikey}`

      axios.get(url)
      .then(res => setWeather(res.data))
      .catch(err => console.log(err))
      .finally(() => setCharge(false))
    }
  }, [coords])
  

  return (
    <div className="App">
      {charge? <h2>ta cargando, espera profa... :D</h2>: <Boxweather weather={weather}/>}
    </div>
  )
}

export default App
