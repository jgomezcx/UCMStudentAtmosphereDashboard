import List from './List';
import React, { useState, useEffect } from 'react';
import '../App.css';

const WeatherList = ({ weatherData }) => {
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

      return {
        date,
        time,
        temperature,
        description,
        wind,
        main
      };
    });

    setListItems(items);
    console.log(items);
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
        if ( (!searchDate || entry.date === searchDate) && (filter === 'All' || entry.main === filter) ){  
          return (
            <div className="list-item" key={index}>
              <div className="date">{entry.date}</div>
              <div className="time">{entry.time}</div>
              <div className="temperature">{entry.temperature}</div>
              <div className="description">{entry.description}</div>
              <div className="wind">{entry.wind}</div>
              <div className="main">{entry.main}</div>
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