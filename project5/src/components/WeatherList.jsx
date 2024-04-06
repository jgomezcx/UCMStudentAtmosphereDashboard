import List from './List';
import React, { useState, useEffect } from 'react';
import '../App.css';
import DetailCard from './DetailCard';
import { Link } from 'react-router-dom';

const WeatherList = ({ weatherData, setDetailedItem }) => {
  const [listItems, setListItems] = useState([]);
 
  useEffect(() => {
    if (weatherData && weatherData.list) {
    // Convert Kelvin to Fahrenheit for display
    const kelvinToFahrenheit = (kelvin) => ((kelvin - 273.15) * 9) / 5 + 32;

    // Extract and prepare the list items
    const items = weatherData.list.map((item) => {
      const date = new Date(item.dt * 1000).toLocaleDateString();
      const time = new Date(item.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      const temperature = kelvinToFahrenheit(item.main.temp).toFixed(1) + ' °F';
      const description = item.weather[0].description;
      const wind = `Wind: ${item.wind.speed} m/s at ${item.wind.deg}°`;
      const main = item.weather[0].main;
      const feelsLike = kelvinToFahrenheit(item.main.feels_like).toFixed(1) + ' °F';
      const pressure = item.main.pressure + ' hPa';
      const humidity = item.main.humidity + '%';
      const clouds = item.clouds.all + '%';
      const windSpeed = item.wind.speed + ' m/s';
      const windGust = item.wind.gust + ' m/s';
      const visibility = (item.visibility / 1000).toFixed(1) + ' km';
      const rain = item.rain ? item.rain['3h'].toFixed(2) + ' mm' : '0 mm';

      return { 
        date,
        time,
        temperature,
        feelsLike,
        pressure,
        humidity,
        clouds,
        wind,
        windSpeed,
        windGust,
        visibility,
        description,
        main,
        rain
      };
    });

    setListItems(items);
    // console.log(items);
    }
  }, [weatherData]);

  // Render the list items
  const [targetDate, setTargetDate] = useState(''); // This is for the input field
  const [searchDate, setSearchDate] = useState(''); // This is for storing the submitted search term

  const handleSearchSubmit = () => {
    setSearchDate(targetDate); // Set the submitted search term to what's in the input field
  };

  const handleClear = () => {
    setTargetDate(''); // Clear the input field
    setSearchDate(''); // Clear the submitted search term
  };

  const [filter, setFilter] = useState('All');

  const handleFilter = (selectedFilter) => {
    setFilter(selectedFilter); // Update the current filter
  };

  const showDetail = (item) => {
    setDetailedItem(item); // Set the item for the detailed view
  };

  const info = {};

  return (
    <div className="weather-list">
      <div className="date-input">
        <input className='date-button'
          type="text"
          value={targetDate}
          placeholder='Enter a date..'
          onChange={(e) => setTargetDate(e.target.value)}
        />
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleSearchSubmit}>Submit</button>
      </div>
      <div className="filter-buttons">
        <button onClick={() => handleFilter('All')}>All</button>
        <button onClick={() => handleFilter('Rain')}>Rain</button>
        <button onClick={() => handleFilter('Clear')}>Clear</button>
        <button onClick={() => handleFilter('Clouds')}>Clouds</button>
      </div>
      <div className="weather-list-header">
        <span className="header-title date">Date</span>
        <span className="header-title time">Time</span>
        <span className="header-title temperature">Temperature</span>
        <span className="header-title description">Description</span>
        <span className="header-title wind">Wind</span>
        <span className="header-title main">Forecast Today</span>
      </div>

      {listItems.map((entry, index) => {
        const dateForURL = entry.date.replaceAll('/', '-');
        const timeForURL = entry.time.replaceAll(':', '-');
        if ( (!searchDate || entry.date === searchDate) && (filter === 'All' || entry.main === filter) ){  
          return (
            <div className="list-item" key={index}>
              <div className="date">{entry.date}</div>
              <div className="time">{entry.time}</div>
              <div className="temperature">{entry.temperature}</div>
              <div className="description">{entry.description}</div>
              <div className="main">{entry.main}</div>
              
              <Link
                to={{
                  pathname: `/${dateForURL}/${timeForURL}/${index}`,
                }}
              >
                click for more
              </Link>
              {/* <a href="#details" onClick={() => showDetail(entry) }>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;click for more&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </a> */}
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default WeatherList;