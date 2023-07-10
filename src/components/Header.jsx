import React from 'react'
import style from '../style/Header.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setCity } from '../redux/slices/weatherSlice'

const Header = () => {
    const dispatch = useDispatch()

    const city = useSelector(state => state.weather.city)

    return (
        <div className={style.root}>
            <input className={style.inputer} placeholder='Enter a city...' value={city} onChange={(e) => dispatch(setCity(e.target.value))} />
        </div>
    )
}

export default Header;