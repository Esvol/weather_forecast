import './OtherWeather.scss'

const OtherWeather = ({weatherData, mainDayIndex, inputError, setImageFunction, setDayFunction, FindNameOfDate, setDetailSwitch}) => {

    const FilterClassNameFunction = (e) => {
        setDetailSwitch(false);
        if (e.target.className === 'other-weather-day' || e.target.className === 'other-weather-image' || e.target.className === 'other-weather-temperature'){
            setDayFunction(e.target.parentNode.getAttribute('my_key')) 
        }
        else setDayFunction(e.target.getAttribute('my_key'))  
    }

    return (
            inputError === false &&
            weatherData.map((data, index) => {

                    let weather, weather_date;
                    weather = setImageFunction(data.day.condition.text, weather);
                    weather_date = FindNameOfDate(data, '')

                    return(
                    <div onClick={(e) => FilterClassNameFunction(e)} my_key={data.date_epoch} key={data.date_epoch} className={index === mainDayIndex ? 'other-weather active-weather' : 'other-weather'}>
                        <div className='other-weather-day'>{weather_date}</div>
                        <img alt='other-weather' src={weather} className='other-weather-image'/>
                        <div className='other-weather-temperature'>{Math.round(data.day.avgtemp_c)}°C</div>
                    </div>
                    )
                }
            )
    )
}

export default OtherWeather;



