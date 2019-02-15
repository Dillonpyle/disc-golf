import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import ReactDOM from 'react-dom'
import MapContainer from './MapContainer/MapContainer';
import Login from './Login/Login';
import Settings from './Settings/Settings'


import './App.css';
import WeatherContainer from './WeatherContainer/Weather';

class App extends Component {
  state = {
    lat: '',
    lng: '',
    name: '',
    dailyForcast: undefined,
    hourlyForcast: undefined,
    username: '',
    password: '',
    id: '',
    error: undefined
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

  getWeather = async () => {

    const lat = this.state.lat;
    const lng = this.state.lng;
    const name = this.state.name;
    const API_KEY2 = "ce43c0fc2b233e6004791355f0686c19";


    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${API_KEY2}/${lat},${lng}`);
    const data = await api_call.json();


    if (lat && lng) {
      console.log(data);

      this.setState({
        dailyForcast: data.daily.data,
        hourlyForcast: data.hourly.data,
        error: ""
      })
    } else {
      this.setState({
        dailyForcast: undefined,
        hourlyForcast: undefined,
        error: "please choose a city and country"
      })
    }
  }

  handleClick = (e) => {
    this.setState({
      lat: e.position.lat,
      lng: e.position.lng,
      name: e.name
    })
    console.log(this.state)

    this.getWeather();
    this.props.history.push('/weather')
  }

  handleChange = (e) => {

    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSignUp = async (e) => {

    e.preventDefault();
    try {
      const loginResponse = await fetch('http://localhost:9000/login/register', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (!loginResponse.ok) {
        throw Error(loginResponse.statusText)
      }

      const parsedResponse = await loginResponse.json();


      if (parsedResponse.data === 'login successful') {
        this.props.history.push('/map')
      }

      console.log(parsedResponse, 'loginResponse')
    } catch (err) {
      console.log(err)
    }
  }

  handleLogin = async (e) => {
    e.preventDefault();
    console.log('login activated')
    try {
      const loginResponse = await fetch('http://localhost:9000/login', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (!loginResponse.ok) {
        throw Error(loginResponse.statusText)
      }

      const parsedResponse = await loginResponse.json();


      if (parsedResponse.data === 'login successful') {


        this.setState({
          id: parsedResponse.userId
        })

        this.props.history.push('/map')
      }

    } catch (err) {
      console.log(err)
    }
  }

  deleteProfile = async (e) => {
    try {
      const deleteUser = await fetch('http://localhost:9000/users/' + this.state.id, {
        method: "DELETE",
        credentials: 'include'
      });

      const parsedResponse = await deleteUser.json()

      this.props.history.push('/');

    } catch (err) {
      console.log(err);
    }
  }

  updateUsername = async (e) => {
    e.preventDefault();
    // This will create your put request, you will need the id, and object that want to update

    try {

      const response = await fetch(`http://localhost:9000/users/${this.state.id}`, {
        method: 'PUT',
        credentials: 'include',
        body: JSON.stringify({ username: this.state.username }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw Error(response.statusText);
      }

      const parsedResponse = await response.json();

      console.log(parsedResponse.data)

      this.setState({
        username: parsedResponse.data
      });

      this.props.history.push('/map')

    } catch (err) {
      console.log(err);
    }

  }
  handleEditFormInput = (e) => {

    this.setState({
      username: e.target.value
    });


  }



  render() {
    console.log(this.state.username)
    return (
      <main>
        <Switch>
          <Route exact path="/" render={() => <Login
            username={this.state.username}
            password={this.state.password}
            handleChange={this.handleChange}
            handleSignUp={this.handleSignUp}
            handleLogin={this.handleLogin} />} />
          <Route exact path="/settings" render={() => <Settings
            username={this.state.username}
            deleteProfile={this.deleteProfile}
            id={this.state}
            updateUsername={this.updateUsername}
            handleEditFormInput={this.handleEditFormInput} />} />
          <Route exact path="/map" render={() => <MapContainer handleClick={this.handleClick} />} />
          <Route exact path="/weather" render={() => <WeatherContainer dailyForcast={this.state.dailyForcast} hourlyForcast={this.state.hourlyForcast} name={this.state.name} />} />
        </Switch>
      </main>
    );
  }
}

export default withRouter(App);
