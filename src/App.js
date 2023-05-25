import { useEffect, useState } from 'react';
import axios from 'axios'
import './index.scss';
// import { v4 as uuidv4 } from 'uuid'
import Weather from './components/Weather';

function App() {
  const [city, setCity] = useState('Kharkiv')
  const [loading, setLoading] = useState(true)
  const [inputError, setInputError] = useState(false)
  const [data, setData] = useState([])

  useEffect(()=> {
    axios.get(`http://api.weatherapi.com/v1/forecast.json?key=fa955649439a428581f72101232005&q=${city}&days=7&aqi=no&alerts=no`)
    .then(res => {
      setData(res.data)
      setInputError(false)
    })
    .catch(
      error => console.log(error),
      setInputError(true)
    )
    .finally(() => {
      setLoading(false)
    })
  }, [city])

  if(loading) return <h1>Loading...</h1>
  else if (loading === false) return (
    <div className="App">
        <input className='inputer' placeholder='Enter a city...' value={city} onChange={(e) => setCity(e.target.value)}/>
        <Weather weatherData={data.forecast.forecastday} city={city} inputError={inputError}/>
    </div>
  );
}

export default App;
