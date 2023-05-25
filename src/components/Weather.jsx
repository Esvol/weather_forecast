import './Weather.scss'
import HoursWeather from './HoursWeather/HourseWeather'
import OtherWeather from './OtherWeather/OtherWeather'
import { useState } from 'react'

const Weather = ({weatherData, city, inputError}) => {
    const [mainDayIndex, setMainDayIndex] = useState(0)
    
    const FindNameOfDate = (data, weather_date) => {
        weather_date = new Date(data.date);
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"];
        weather_date = days[weather_date.getDate()%7]
        return weather_date;
    }

    const setDayFunction = (key) => {
        let indexOfDay;
        weatherData.map((data, index) => {
            if (Number(data.date_epoch) === Number(key)) 
            {
                indexOfDay = index
            }
            return null 
        })
        setMainDayIndex(indexOfDay)
    }

    const setImageFunction = (text, weather) => {
        if (text === 'Cloudy' || text === 'Mist') weather = 'image/sky+sun.webp'
        else if (text === 'Sunny') weather = 'image/sun.png'
        else if (text === 'Partly cloudy' || text === 'Light rain shower') weather = 'image/sky+rain+sun.webp'
        else if (text === 'Overcast' || text === 'Moderate rain' || text === 'Patchy rain possible') weather = 'image/rain.png'
        else weather = 'image/sky+sun.webp'

        return weather;
    }

    return (
        <div className='container'>
            <div className='main-weather'>
                <div className='main-weather-info'>
                    {
                        inputError === true ? 
                        <>
                            <div className='weather-image'></div>
                            <div className='dayValue'>Write city correctly</div>
                            <div className='cityValue'></div>
                            <div className='temperatureValue'></div>
                            <div className='weatherValue'></div>
                        </>
                        : 
                        <>
                            <img alt='weather_image' src={setImageFunction(weatherData[mainDayIndex].day.condition.text, '')} className='weather-image'/>
                            <div className='dayValue'>Today, {FindNameOfDate(weatherData[mainDayIndex], '')}</div>
                            <div className='cityValue'>{city}</div>
                            <div className='temperatureValue'>Average temp: {Math.round(weatherData[mainDayIndex].day.avgtemp_c)} °C</div>
                            <div className='weatherValue'>{weatherData[mainDayIndex].day.condition.text}</div>
                        </>
                    } 
                </div>

                <HoursWeather weatherData={weatherData} mainDayIndex={mainDayIndex} setImageFunction={setImageFunction}/>

            </div>
            <div className='other-weather-container'>
                <OtherWeather 
                weatherData={weatherData}
                mainDayIndex = {mainDayIndex} 
                inputError={inputError} 
                setImageFunction={setImageFunction} 
                setDayFunction={setDayFunction}
                FindNameOfDate = {FindNameOfDate}
                setMainDayIndex={setMainDayIndex}/>
            </div>
        </div>
    );
}

export default Weather;