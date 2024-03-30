import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
const WEATHERBIT_KEY =  import.meta.env.VITE_WEATHERBIT_API_KEY;
const OPENWEATHER_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

import Header from './components/Header';
import Card from './components/Card';
import List from './components/List';
import NavBar from './components/NavBar';
import Summary from './components/Summary';

import mockWeatherData from './assets/mock.json';
import MockListData from './assets/new.json';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const useMockData = false; //change to false to use api

  useEffect(() => {
    if (useMockData) {
      // Use mock data
      setWeatherData(mockWeatherData);
    } else {

    const fetchWeather = async () => {
      try {
        const response = await axios.get('https://api.weatherbit.io/v2.0/current', {
          params: {
            lat: '37.367352',
            lon: '-120.420082',
            // key: '89228f6c68dc42f695da307005b41af4',
            units: 'I',
          }
        });
        setWeatherData(response.data.data[0]); // Store the first item of the 'data' array
        console.log(response.data.data[0]);
      } 
      catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
    fetchWeather();
    }
  }, [useMockData]);

  const [openWeatherInformation, setopenWeatherInformation] = useState(null);
  const useMockListData = false; // Change to false to use API

  useEffect(() => {
    if (useMockListData) {
      // Use mock data
      setopenWeatherInformation(MockListData);
    } else {
    const fetchopenWeatherInformation = async () => {
      try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/forecast', {
          params: {
            lat: 37.367352,
            lon: -120.420082,
            appid: 'c2b7d0f1ff280a8fd3332d1ba6e45edd'
          }
        });
        setopenWeatherInformation(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
    fetchopenWeatherInformation();
    }
  }, [useMockListData]);


  return (
    <>
    <div className="app">
      <div className='Left'>
        <Header />
        <NavBar />
      </div>
    
      <div className="Right">
        <div className="Row1">
        {weatherData ? (
          <>
            <Card title="Current Temperature" content={`${weatherData.temp}°F`} />
            <Card title="Air Quality Index" content={weatherData.aqi} />
            <Card title="Wind Speed" content={`${weatherData.wind_spd} m/s`} />
          </>
          ) : (
            <p>Loading weather data...</p>
          )}
        </div>

        <div className='Row2'>
          <Summary weatherData={openWeatherInformation}/>
        </div>

        <div className='Row3'>
          
          {/* <List items={listItems} /> */}
          <List data={openWeatherInformation}/>

        </div>
        
      </div>
    </div>
    </>
  )
}

export default App
