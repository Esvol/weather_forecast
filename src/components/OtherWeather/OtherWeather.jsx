import './OtherWeather.scss'

const OtherWeather = ({weatherData, mainDayIndex, inputError, setImageFunction, setDayFunction, FindNameOfDate, setMainDayIndex}) => {

    const DisplayOtherWeather = (data, weather, weather_date) => {
        return (
        <div onClick={(e) => FilterClassNameFunction(e)} my_key={data.date_epoch} key={data.date_epoch} className='other-weather'>
            <div className='other-weather-day'>{weather_date}</div>
            <img alt='other-weather' src={weather} className='other-weather-image'/>
            <div className='other-weather-temperature'>{Math.round(data.day.avgtemp_c)}°C</div>
        </div>
        )
    }

    const FilterClassNameFunction = (e) => {
        console.log(e);
        if (e.target.className === 'other-weather-day' || e.target.className === 'other-weather-image' || e.target.className === 'other-weather-temperature'){
            setDayFunction(e.target.parentNode.getAttribute('my_key')) 
        }
        else setDayFunction(e.target.getAttribute('my_key'))  
    }

    return (
            inputError === false ? 
            weatherData.map((data, index) => {
                if (index > mainDayIndex && index <= mainDayIndex + 4)
                {
                    let weather, weather_date;
                    weather = setImageFunction(data.day.condition.text, weather);
                    weather_date = FindNameOfDate(data, '')

                    if (mainDayIndex !== 0 && mainDayIndex !== 6){
                        return (
                            <>
                                {
                                    index === mainDayIndex + 1 && <div onClick={() => {setMainDayIndex(prev => prev - 1)}} className='button-back'></div>
                                }
                                {
                                    DisplayOtherWeather(data, weather, weather_date)
                                }
                                {
                                    index === mainDayIndex + 1 && <div onClick={() => {setMainDayIndex(prev => prev + 1)}} className='button-forward'></div>
                                }
                                
                            </>)
                    }
                    else if (mainDayIndex !== 0){ 
                        return (
                            <>
                                {
                                    (index === mainDayIndex + 1 || index === mainDayIndex) && <div onClick={() => {setMainDayIndex(prev => prev - 1)}} className='button-back'></div>
                                }
                                {
                                    DisplayOtherWeather(data, weather, weather_date)
                                }
                            </>)
                    }
                    else if (mainDayIndex !== 6) {
                        console.log(mainDayIndex);
                        return (
                            <>
                                {
                                    DisplayOtherWeather(data, weather, weather_date)
                                }
                                {
                                    index === mainDayIndex + 1 && <div onClick={() => {setMainDayIndex(prev => prev + 1)}} className='button-forward'></div>
                                }
                            </>)
                    }
                    else{
                        return(
                            DisplayOtherWeather(data, weather, weather_date)
                        )
                    }
                }
                else return null
            })
            : weatherData.map((data, index) => {
                if (index < 4)
                {
                    return (
                    <div className='other-weather'>
                    </div>
                    )
                }
                else return null
                }
            )
    )
}

export default OtherWeather;