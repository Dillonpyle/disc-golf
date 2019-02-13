import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom'
import MapContainer from './MapContainer/MapContainer';
import Login from './Login/Login';

import './App.css';
import WeatherContainer from './WeatherContainer/Weather';

class App extends Component {
  state = {
    lat: '',
    lng: ''
  }

  loadMap() {
    if (this.props && this.props.google) {
      // checks if google is available
      const { google } = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;

      // reference to the actual DOM element
      const node = ReactDOM.findDOMNode(mapRef);

      let { zoom } = this.props;
      const { lat, lng } = this.state.currentLocation;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign(
        {},
        {
          center: center,
          zoom: zoom
        }
      );

      // maps.Map() is constructor that instantiates the map
      this.map = new maps.Map(node, mapConfig);
    }
  }

  componentDidMount() {

    if (this.props.centerAroundCurrentLocation) {
      if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
          const coords = pos.coords;
          this.setState({
            currentLocation: {
              lat: coords.latitude,
              lng: coords.longitude
            }
          });
        });
      }
    }

    this.loadMap();

  }

  handleClick = (e) => {
    this.setState({
      lat: e.position.lat,
      lng: e.position.lng
    })
    console.log(this.state)

  }


  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/map" render={() => <MapContainer handleClick={this.handleClick} />} />
          <Route exact path="/weather" render={() => <WeatherContainer lat={this.state.lat} lng={this.state.lng} />} />
        </Switch>
      </main>
    );
  }
}

export default App;
