import '../App.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../assets/new.json';
import { useLocation } from 'react-router-dom';

const DetailCard = ({ item }) => {
  const { date, time, id } = useParams();
  const handleBack = () => {
    window.location.href = '/';  
  };

  // console.log(item.list[id]);
  const detailData = item.list[id];

  // Formatting and accessing the necessary properties for display
  const formattedTemperature = `${detailData.main.temp.toFixed(1)} °F`; // For example, if you store temperatures in Fahrenheit
  const feelsLike = `${detailData.main.feels_like.toFixed(1)} °F`;
  const pressure = `${detailData.main.pressure} hPa`;
  const humidity = `${detailData.main.humidity}%`;
  const cloudiness = `${detailData.clouds.all}%`; // Accessing the 'all' property of clouds
  const windSpeed = `${detailData.wind.speed} m/s`;
  const windGust = `${detailData.wind.gust} m/s`;
  const visibility = `${(detailData.visibility / 1000).toFixed(1)} km`;
  const description = detailData.weather[0].description; // Assuming 'weather' is an array and you want the first object's description
  const main = detailData.weather[0].main;
  const rain = detailData.rain ? `${detailData.rain['3h'].toFixed(2)} mm` : 'No rain'; // Checking if 'rain' exists and accessing '3h'
  

  return (
    <div className="detail-card">
      <h3>Detail View</h3>
      <div className="detail-row row1">
        <p><span>Date:&emsp;</span> {date}</p>
        <p><span>Time:&emsp;</span> {time}</p>
        <p><span>Temperature:&emsp;</span> {formattedTemperature}</p>
      </div>
      <div className="detail-row row1">
        <p><span>Feels Like:&emsp;</span> {feelsLike}</p>
        <p><span>Pressure:&emsp;</span> {pressure}</p>
        <p><span>Humidity:&emsp;</span> {humidity}</p>
      </div>
      <div className="detail-row row1">
        <p><span>Cloudiness:&emsp;</span> {cloudiness}</p>
        <p><span>Wind Speed:&emsp;</span> {windSpeed}</p>
        <p><span>Wind Gust:&emsp;</span> {windGust}</p>
      </div>
      <div className="detail-row row2">
        <p><span>Visibility:&emsp;</span> {visibility}</p>
        <p><span>Description:&emsp;</span> {description}</p>
        <p><span>Main:&emsp;</span> {main}</p>
      </div>
      <div className="detail-row row2">
        <p><span>Rain:&emsp;</span> {rain}</p>
      </div>
      <button className="button" onClick={handleBack}>Back to list</button>
    </div>
  );
};

export default DetailCard;
