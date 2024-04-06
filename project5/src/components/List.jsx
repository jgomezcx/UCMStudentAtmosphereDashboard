import WeatherList from './WeatherList';

const List = ({ data , setDetailedItem}) => (
  <WeatherList weatherData={data} setDetailedItem={setDetailedItem}/>
);

export default List;