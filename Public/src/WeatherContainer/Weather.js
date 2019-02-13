import React, { Component } from "react";
import LocalList from "./LocalList";
import WeatherForm from "./WeatherForm";



const API_KEY2 = "ce43c0fc2b233e6004791355f0686c19";

class WeatherContainer extends Component {
    state = {
        dailyForcast: undefined,
        hourlyForcast: undefined,
        error: undefined
    }



    getWeather = async (e) => {
        e.preventDefault();
        const lat = e.target.elements.lat.value;
        const lng = e.target.elements.lng.value;


        const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${API_KEY2}/${lat},${lng}`);
        const data = await api_call.json();

        //converts UNIX time into military time
        let a = new Date(data.currently.time * 1000);
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let year = a.getFullYear();
        let month = months[a.getMonth()];
        let date = a.getDate();
        let hour = a.getHours();
        let min = a.getMinutes();
        let sec = a.getSeconds();
        let formattedTime = month + ' ' + date + ' ' + year + ' ' + hour + ':' + min + ':' + sec;

        if (lat && lng) {
            console.log(data);

            this.setState({
                time: formattedTime,
                dailyForcast: data.daily.data,
                hourlyForcast: data.hourly.data,
                error: ""
            })
        } else {
            this.setState({
                time: undefined,
                dailyForcast: undefined,
                hourlyForcast: undefined,
                error: "please choose a city and country"
            })
        }
    }


    render() {
        return (
            <div>
                <WeatherForm getWeather={this.getWeather} />
                <LocalList
                    time={this.state.time}
                    dailyForcast={this.state.dailyForcast}
                    hourlyForcast={this.state.hourlyForcast}
                />
            </div>
        );
    }
}

export default WeatherContainer;
