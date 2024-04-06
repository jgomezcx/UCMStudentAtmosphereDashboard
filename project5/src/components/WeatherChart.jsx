import { Line, Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const WeatherChart = ({ weatherData }) => {
    // console.log(weatherData);
    // Extract the labels and data from weatherData
    const labels = weatherData.list.map(item => {
      const date = new Date(item.dt * 1000);
      return date.getHours() + ":00"; // Assuming you want to display hours
    });
  
    const tempDataPoints = weatherData.list.map(item => item.main.temp); // Example for temperature
    const rainDataPoints = weatherData.list.map(item => item.rain ? item.rain['3h'] : 0);

    // Prepare the chart data structure
    const data = {
      labels,
      datasets: [
        {
          label: 'Temperature (°F)',
          data: tempDataPoints,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }
      ]
    };
  
    const options = {
      scales: {
        y: {
          beginAtZero: false
        }
      }
    };

    const data2 = {
      labels,
      datasets: [
        {
          label: 'Rainfall (mm)',
          data: rainDataPoints,
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgb(54, 162, 235)',
          borderWidth: 1,
        }
      ]
    };
  
    const options2 = {
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Amount of Rain (mm)'
          }
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'top',
        },
        title: {
          display: true,
          text: 'Rainfall throughout the Day'
        }
      }
    };

    // Generate unique keys based on the data
    const tempChartKey = `temp-chart-${labels.join('-')}-${tempDataPoints.join('-')}`;
    const rainChartKey = `rain-chart-${labels.join('-')}-${rainDataPoints.join('-')}`;


  return (
    <>
      <h2>Weather Chart</h2>
      <Line data={data} options={options} key={tempChartKey} />

      <h2>Rainfall Chart</h2>
      <Bar data={data2} options={options2} key={rainChartKey} />
    </>
  );
};


export default WeatherChart;