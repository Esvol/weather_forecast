import React from 'react'
import { useSelector } from 'react-redux'

const MainWeather = () => {

    const { city, data, days, activeWeather } = useSelector(state => state.weather);
    const weatherData = data.forecast.forecastday;

    return (
        <div className='main-weather-info'>
            {
                <>
                    <img alt='weather_image' src={weatherData[activeWeather].day.condition.icon} className='weather-image' />
                    <div className='dayValue'>Today, {days[new Date(weatherData[activeWeather].date).getDay()]}</div>
                    <div className='cityValue'>{city}</div>
                    <div className='temperatureValue'>Average temp: {Math.round(weatherData[activeWeather].day.avgtemp_c)} °C</div>
                    <div className='weatherValue'>{weatherData[activeWeather].day.condition.text}</div>
                </>
            }
        </div>
    )
}

export default MainWeather