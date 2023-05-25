import './HoursWeather.scss'

const HoursWeather = ({weatherData, mainDayIndex, setImageFunction}) => {
    return (
        <div className='main-weather-hours-info'>
            {
                weatherData[mainDayIndex].hour.map((data, index) => {
                    let weather;

                    weather = setImageFunction(data.condition.text, weather);

                    if (index % 3 === 0)
                    {
                        return (
                            <div key={data.time_epoch} className="hours-info">
                                <div>{data.time.substr(data.time.length - 5, data.time.length)}</div>
                                <img alt='hours-weather' src={weather} className='hours-weather-image-info'/>
                                <div>{Math.round(data.feelslike_c)} °C</div>
                            </div>
                        )
                    }
                    return null
                })            
            }
        </div>
    );
}

export default HoursWeather;