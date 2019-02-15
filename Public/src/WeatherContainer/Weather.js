import React, { Component } from "react";
import LocalList from "./LocalList";
import { Link } from 'react-router-dom'




class WeatherContainer extends Component {


    render() {
        return (
            <div>
                <Link to={'/map'}><button>Back</button></Link>
                <LocalList
                    dailyForcast={this.props.dailyForcast}
                    hourlyForcast={this.props.hourlyForcast}
                    name={this.props.name}
                />
            </div>
        );
    }
}

export default WeatherContainer;
