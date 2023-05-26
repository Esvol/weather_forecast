import { useState } from 'react';
import './HoursWeather.scss'

const HoursWeather = ({weatherData, mainDayIndex, setImageFunction, inputError, detailSwitch, setDetailSwitch}) => {

    const [detailWeatherIndex, setDetailWeatherIndex] = useState('')

    console.log(weatherData[mainDayIndex].hour);

    const DetailHourWeather = (index) => {

        setDetailWeatherIndex(index)
        setDetailSwitch(true)
    }

    return (
        <div className='main-weather-hours-info'>
            {
                inputError === false &&
                weatherData[mainDayIndex].hour.map((data, index) => {
                    let weather;

                    weather = setImageFunction(data.condition.text, weather);

                    if(detailSwitch === false)
                    {
                        if (index % 3 === 0)
                            return (
                                <div onClick={() => DetailHourWeather(index)} key={data.time_epoch} className="hours-info">
                                    <div>{data.time.substr(data.time.length - 5, data.time.length)}</div>
                                    <img alt='hours-weather' src={weather} className='hours-weather-image-info'/>
                                    <div>{Math.round(data.feelslike_c)} °C</div>
                                </div>
                            )
                        else return null
                    }
                    else{
                        if (index === detailWeatherIndex)
                        return (
                            <>
                            <img  onClick={() => setDetailSwitch(false)} alt='back' src='image/arrow-back.png' className='back-button-detail'/>
                            <div onClick={DetailHourWeather} key={data.time_epoch} className="hours-detail-info">
                                <div>{data.time.substr(data.time.length - 5, data.time.length)}</div>
                                <img alt='hours-weather' src={weather} className='hours-weather-image-info'/>
                                <div>{Math.round(data.feelslike_c)} °C</div>
                            </div>
                            <div className='detail-info-container'>
                                <div className='detail-info-rain'>
                                    <img alt='rain' src='image/detail-rain.png' className='detail-info-image'/>
                                    <div>Chance of rain</div>
                                    <div>↓</div>
                                    <div>{data.chance_of_rain}%</div>
                                </div>
                                <div className='detail-info-snow'>
                                    <img alt='snow' src='image/detail-snow.png' className='detail-info-image'/>
                                    <div>Chance of snow</div>
                                    <div>↓</div>
                                    <div>{data.chance_of_snow}%</div>
                                </div>
                                <div className='detail-info-wind'>
                                    <img alt='wind' src='image/detail-wind.png' className='detail-info-image'/>
                                    <div style={{textAlign: 'center'}}>Wind (kilometers per hour)</div>
                                    <div>↓</div>
                                    <div>{data.wind_kph} k/h</div>
                                </div>
                            </div>
                            </>
                        )
                        else return null
                    }
                })            
            }
        </div>
    );
}

export default HoursWeather;