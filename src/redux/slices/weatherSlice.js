import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: "Kharkiv",
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  data: [],
  activeWeather: 0,
  detailWeatherInfo: '',
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setCity(state, action) {
      state.city = action.payload;
    },
    setData(state, action) {
      state.data = action.payload;
    },
    setActiveWeather(state, action){
      state.activeWeather = action.payload;
    },
    setDetailWeatherInfo(state, action){
      state.detailWeatherInfo = action.payload;
    }
  },
});

export const { setCity, setData, setActiveWeather, setDetailWeatherInfo } = weatherSlice.actions;

export default weatherSlice.reducer;
