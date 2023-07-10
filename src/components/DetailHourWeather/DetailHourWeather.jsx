import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setDetailWeatherInfo } from '../../redux/slices/weatherSlice';

const DetailHourWeather = () => {

    const dispatch = useDispatch();
    const detailWeatherInfo = useSelector(state => state.weather.detailWeatherInfo)

    return (
        <>
            <img onClick={() => dispatch(setDetailWeatherInfo(''))} alt='back' src='image/arrow-back.png' className='back-button-detail' />
             <div key={detailWeatherInfo.data.time_epoch} className="hours-detail-info">
                <div>{detailWeatherInfo.data.time.substr(detailWeatherInfo.data.time.length - 5, detailWeatherInfo.data.time.length)}</div>
                <img alt='hours-weather' src={detailWeatherInfo.data.condition.icon} className='hours-weather-image-info' />
                <div>{Math.round(detailWeatherInfo.data.feelslike_c)} °C</div>
            </div> 
            <div className='detail-info-container'>
                <div className='detail-info-rain'>
                    <img alt='rain' src='image/detail-rain.png' className='detail-info-image' />
                    <div>Chance of rain</div>
                    <div>↓</div>
                    <div>{detailWeatherInfo.data.chance_of_rain}%</div>
                </div>
                <div className='detail-info-snow'>
                    <img alt='snow' src='image/detail-snow.png' className='detail-info-image' />
                    <div>Chance of snow</div>
                    <div>↓</div>
                    <div>{detailWeatherInfo.data.chance_of_snow}%</div>
                </div>
                <div className='detail-info-wind'>
                    <img alt='wind' src='image/detail-wind.png' className='detail-info-image' />
                    <div style={{ textAlign: 'center' }}>Wind (kilometers per hour)</div>
                    <div>↓</div>
                    <div>{detailWeatherInfo.data.wind_kph} k/h</div>
                </div>
            </div>
        </>
    )
}

export default DetailHourWeather