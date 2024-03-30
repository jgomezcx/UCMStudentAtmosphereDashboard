import React, { useState, useEffect } from 'react';
import '../App.css';
import CardSum from './CardSum';

const Summary = ({ weatherData }) => {
    const [summary, setSummary] = useState({
      avgTemp: null,
      totalRainfall: null,
      avgWindSpeed: null,
    });
  
    // Convert Kelvin to Celsius
    const kelvinToFahrenheit = (kelvin) => (kelvin - 273.15) * 9/5 + 32;
  
    const mmtoInches = (mm) => mm * 0.0393701;

    useEffect(() => {
      const calcSummaryStatistics = () => {
        let totalTemp = 0;
        let totalRainfall = 0;
        let totalWindSpeed = 0;
        
        weatherData.list.forEach((item) => {
          totalTemp += kelvinToFahrenheit(item.main.temp);
          totalRainfall += item.rain ? item.rain['3h'] : 0; // assuming rain is in mm and over 3h period
          totalWindSpeed += item.wind.speed;
        });
        
        const avgTemp = totalTemp / weatherData.list.length;
        const avgWindSpeed = totalWindSpeed / weatherData.list.length;
        
        return {
          avgTemp: avgTemp.toFixed(2),
          totalRainfall: totalRainfall.toFixed(2),
          avgWindSpeed: avgWindSpeed.toFixed(2),
        };
      };
  
      if (weatherData && weatherData.list) {
        setSummary(calcSummaryStatistics());
      }
    }, [weatherData]);
  
    // Render the summary statistics
    return (
      <div className="summary-stats">
        <CardSum title="Average Temperature:" content={summary.avgTemp ? `${summary.avgTemp} °F` : 'N/A'}/>
        <CardSum title="Total Rainfall:" content={summary.totalRainfall ? `${summary.totalRainfall} mm` : 'N/A'}/>
        <CardSum title="Average Wind Speed:"content={summary.avgWindSpeed ? `${summary.avgWindSpeed} m/s` : 'N/A'}/>
      </div>
    );
  };
  
  export default Summary;