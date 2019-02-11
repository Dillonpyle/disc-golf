import React from 'react'

const WeatherForm = props => (
    <form onSubmit={props.getWeather}>
        <input type="text" name="lat" placeholder="Lat" />
        <input type="text" name="lng" placeholder="Lng" />
        <button>Get Weather</button>
    </form>
);


export default WeatherForm
