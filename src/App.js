import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import Content from './components/Content';

import {raining} from './assets/raining.jpg';
import { useEffect } from 'react';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('Manila');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=bdd58312886433b5f371378b047bad2f`;

  useEffect(() => {
    const fetchLocation = async() => {
      await axios.get(url)
      .then((response) => {
      setData(response.data)
      })
    }
    fetchLocation();
    setLocation('')
  }, [])


  const searchLocation = (e) => {
    if (e.key === 'Enter') {
      axios.get(url)
      .then((response) => {
      setData(response.data)
      })
      setLocation('');
    } 
  }

  const weatherBg = () => {
    switch(data.weather && data.weather[0].main){
      case 'Rain':
        return 'rainy'
      case 'Clouds':
        return 'clouds'
      case 'Drizzle':
        return 'drizzle'
      case 'Thunderstorm':
        return 'thunderstorm'
      case 'Snow':
        return 'snow'
      case 'Clear':
        return 'clear'
      default:
        return 'app'
    } 
  }


  return (
    <div className={weatherBg()}>
      <Header searchLocation={searchLocation} location={location} setLocation={setLocation}/>
      <Content data={data}/>
    </div>
  );
}

export default App;
