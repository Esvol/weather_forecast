import '../style/Weather.scss'

import { useState, useEffect } from 'react'

import HoursWeather from './HoursWeather/HoursWeather'
import MainWeather from './MainWeather/MainWeather'
import OtherWeather from './OtherWeather/OtherWeather'
import Skeleton from './MainWeather/Skeleton'

import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux'
import { setData } from '../redux/slices/weatherSlice'

const Weather = () => {

    const dispatch = useDispatch();

    const city = useSelector((state) => state.weather.city);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(
                    `http://api.weatherapi.com/v1/forecast.json?key=ec975cc1300e4978aae83444230607&q=${city}&days=3&aqi=no&alerts=no`
                );
                dispatch(setData(res.data));
                setLoading(false);
            } catch (error) {
                setLoading(true);
            }
        }

        fetchData();
    }, [city]);

    if (loading) return (
        <>
            <h1> Can`t find info about weather in this city!</h1>
            <Skeleton />
        </>
    );

    return (
        <>
            <MainWeather />
            <HoursWeather />
            <OtherWeather />
        </>
    );
}

export default Weather;