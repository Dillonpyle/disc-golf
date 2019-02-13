import React from 'react';
import './Weather.css';


const CurrentForcast = ({ CurrentForcast }) => {

    console.log(CurrentForcast[0])
    //converts UNIX time into military time
    let a = new Date(CurrentForcast[0].time * 1000);
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();
    let formattedTime = month + ' ' + date + ' ' + year;

    let deg = CurrentForcast[0].windBearing;

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
        <div className='CurrentForcast'>
            <h3>Today's Conditions</h3>
            <h1 className='bigTemp'>{Math.round(CurrentForcast[0].apparentTemperature)}°</h1>
            <h2>{CurrentForcast[0].windSpeed} MPH {direction}</h2>
            <h2>{CurrentForcast[0].summary}</h2>
            <h3>Precp: {CurrentForcast[0].precipProbability}%</h3>
        </div>
    )

}
export default CurrentForcast
