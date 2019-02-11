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


        console.log(hour)
        return (
            <div key={i} className='hour'>
                <h3>{formattedTime}</h3>
                <h3>Feels Like</h3>
                <h1>{hour.apparentTemperature}°</h1>
                <h4>Forcasted</h4>
                <h2>{hour.temperature}</h2>
                <h5>Wind Speed</h5>
                <h3>{hour.windSpeed}MPH</h3>
                <h3>Gust {hour.windGust}</h3>
                <h4>Direction</h4>
                <h2>{hour.windBearing}</h2>
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
