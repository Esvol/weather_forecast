import './HoursWeather.scss'
import DetailHourWeather from '../DetailHourWeather/DetailHourWeather';
import { useDispatch, useSelector } from 'react-redux';
import { setDetailWeatherInfo } from '../../redux/slices/weatherSlice';

const HoursWeather = () => {

    const dispatch = useDispatch();

    const { data, activeWeather, detailWeatherInfo } = useSelector(state => state.weather);
    const weatherData = data.forecast.forecastday;

    return (
        <div className='main-weather-hours-info'>
            {
                detailWeatherInfo === '' ? (
                    weatherData[activeWeather].hour.map((data, index) => {
                        if (index % 3 === 0)
                            return (
                                <div onClick={() => dispatch(setDetailWeatherInfo({ data, index }))} key={index} className="hours-info">
                                    <div>{data.time.substr(data.time.length - 5, data.time.length)}</div>
                                    <img alt='hours-weather' src={data.condition.icon} className='hours-weather-image-info' />
                                    <div>{Math.round(data.feelslike_c)} °C</div>
                                </div>
                            )
                        else return null
                    })
                ) : (
                    <DetailHourWeather />
                )

            }
        </div>
    );
}

export default HoursWeather;