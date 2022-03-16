import React from 'react'

const Content = ({ data }) => {
    return ( 
        <div className='content'>
            <div className="left-container">
            <div className="location">
                <h1>{data.name}</h1>
                {data.sys ? <p>{data.sys.country}</p> : null}
            </div>
            <div className="temperature">
                {data.main ? <h2>{data.main.temp.toFixed()}°C</h2> : null}
            </div>
            </div>
            <div className="right-container">
            <div className="weather-container">
                {data.weather ? <p>Weather: </p> : null}
                {data.weather ? <h3>{data.weather[0].main}</h3> : null}
                {data.weather ? <p className="description">{data.weather[0].description}</p> : null}
            </div>
            <div className="other-details">
                {data.main ? <p>Pressure: {data.main.pressure} atm</p> : null}
                {data.wind ? <p>Wind Speed: {data.wind.speed} MPH</p> : null}
                {data.main ? <p>Humidity: {data.main.humidity}%</p> : null}
            </div>    
            </div>   
        </div>   
     );
}
 
export default Content;