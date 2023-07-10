import './OtherWeather.scss'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveWeather } from '../../redux/slices/weatherSlice';

const OtherWeather = () => {

    const dispatch = useDispatch()

    const { data, days, activeWeather } = useSelector(state => state.weather);
    const weatherData = data.forecast.forecastday;

    return (
        <ul className='other-weather-container'>
            {
                weatherData.map((data, index) => (
                    <li onClick={() => dispatch(setActiveWeather(index))} key={index} className={index === activeWeather ? 'active-weather' : ''}>
                        <div className='other-weather-day'>{days[new Date(data.date).getDay()]}</div>
                        <img alt='other-weather' src={data.day.condition.icon} className='other-weather-image' />
                        <div className='other-weather-temperature'>{Math.round(data.day.avgtemp_c)}°C</div>
                    </li>
                )
                )
            }
        </ul>
    )
}

export default OtherWeather;



