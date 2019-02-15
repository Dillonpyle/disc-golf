import React from 'react'
import './Weather.css'


const HourlyForcast = ({ HourlyForcast }) => {
    let hourlyForcast = HourlyForcast.map((hour, i) => {

        //converts UNIX time into military time
        let a = new Date(hour.time * 1000);
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let month = months[a.getMonth()];
        let date = a.getDate();
        let forcastHour = a.getHours();

        if (forcastHour === 12) {
            var convertedHour = '12PM'
        } else if (forcastHour === 13) {
            var convertedHour = '1PM'
        } else if (forcastHour === 14) {
            var convertedHour = '2PM'
        } else if (forcastHour === 15) {
            var convertedHour = '3PM'
        } else if (forcastHour === 16) {
            var convertedHour = '4PM'
        } else if (forcastHour === 17) {
            var convertedHour = '5PM'
        } else if (forcastHour === 18) {
            var convertedHour = '6PM'
        } else if (forcastHour === 19) {
            var convertedHour = '7PM'
        } else if (forcastHour === 20) {
            var convertedHour = '8PM'
        } else if (forcastHour === 21) {
            var convertedHour = '9PM'
        } else if (forcastHour === 22) {
            var convertedHour = '10PM'
        } else if (forcastHour === 23) {
            var convertedHour = '11PM'
        } else if (forcastHour === 0) {
            var convertedHour = '12AM'
        } else {
            var convertedHour = forcastHour + 'AM'
        }

        let formattedTime = month + ' ' + date + ' ' + convertedHour;

        let deg = hour.windBearing;

        if (deg > 11.25 && deg < 33.75) {
            var direction = "NNE";
        } else if (deg > 33.75 && deg < 56.25) {
            var direction = "ENE";
        } else if (deg > 56.25 && deg < 78.75) {
            var direction = "East";
        } else if (deg > 78.75 && deg < 101.25) {
            var direction = "ESE";
        } else if (deg > 101.25 && deg < 123.75) {
            var direction = "ESE";
        } else if (deg > 123.75 && deg < 146.25) {
            var direction = "SE";
        } else if (deg > 146.25 && deg < 168.75) {
            var direction = "SSE";
        } else if (deg > 168.75 && deg < 191.25) {
            var direction = "South";
        } else if (deg > 191.25 && deg < 213.75) {
            var direction = "SSW";
        } else if (deg > 213.75 && deg < 236.25) {
            var direction = "SW";
        } else if (deg > 236.25 && deg < 258.75) {
            var direction = "WSW";
        } else if (deg > 258.75 && deg < 281.25) {
            var direction = "West";
        } else if (deg > 281.25 && deg < 303.75) {
            var direction = "WNW";
        } else if (deg > 303.75 && deg < 326.25) {
            var direction = "NW";
        } else if (deg > 326.25 && deg < 348.75) {
            var direction = "NNW";
        } else {
            var direction = "North";
        }



        return (
            <div key={i} className='hour panel'>
                <h3>{formattedTime}</h3>
                <h3>Feels Like</h3>
                <h1>{Math.round(hour.apparentTemperature)}°</h1>
                <h4>Forecasted</h4>
                <h2>{Math.round(hour.temperature)}°</h2>
                <h5>Wind Speed</h5>
                <h3>{hour.windSpeed} MPH</h3>
                <h3>Gust {hour.windGust}</h3>
                <h4>Direction</h4>
                <h2>{direction}</h2>
            </div>
        )
    })
    return (
        <div className='hourlyForcast'>
            {hourlyForcast}
        </div>
    )

}
export default HourlyForcast
