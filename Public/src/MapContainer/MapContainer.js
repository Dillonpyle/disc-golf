import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'



const mapStyles = {

    width: '100%',
    height: '100%'
};




export class MapContainer extends Component {


    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {},          //Shows the infoWindow to the selected place upon a marker
        coarseLocations: [{
            name: 'Harlow Platts',
            lat: 39.975,
            lng: -105.247
        }, {
            name: 'Birds Nest',
            lat: 39.8168,
            lng: -105.2025
        }, {
            name: 'El Dorado Park',
            lat: 33.798,
            lng: -118.095
        }, {
            name: 'Oak Grove',
            lat: 34.19631,
            lng: -118.17613
        }, {
            name: 'Chavez Ridge',
            lat: 34.081887,
            lng: -118.234983
        }, {
            name: 'Morley Field',
            lat: 32.75,
            lng: -117.16
        }, {
            name: 'Huntington Beach',
            lat: 33.68923,
            lng: -118.00892
        }, {
            name: 'Golden Gate Park',
            lat: 37.771608,
            lng: -122.485424
        }, {
            name: 'Black Mouse',
            lat: 37.06488,
            lng: -122.0811
        }, {
            name: 'Stafford Lake',
            lat: 38.11536,
            lng: -122.65201
        }, {
            name: 'Walden Park',
            lat: 37.925365,
            lng: -122.057471
        }, {
            name: 'Larry Fink',
            lat: 42.163736,
            lng: -87.803839
        }, {
            name: 'The Canyons',
            lat: 41.571396,
            lng: -88.062021
        }, {
            name: 'Edgebrook',
            lat: 41.9932,
            lng: -87.7654
        }, {
            name: 'Randall Oaks',
            lat: 42.1,
            lng: -88.29
        }, {
            name: 'Evergreen Park',
            lat: 41.72,
            lng: -87.71
        }, {
            name: 'East Interlocken',
            lat: 39.922025,
            lng: -105.1168
        }, {
            name: 'Badlands',
            lat: 39.86,
            lng: -105.020
        }, {
            name: 'OSU-it',
            lat: 35.62647,
            lng: -95.93607
        }, {
            name: 'Chandler',
            lat: 36.13371,
            lng: -96.0652
        }, {
            name: 'Dovillio',
            lat: 36.15,
            lng: -95.874
        }, {
            name: 'Haikey Creek',
            lat: 35.992353,
            lng: -95.85215
        }, {
            name: 'Shannon Spring Park',
            lat: 35.023065,
            lng: -97.94637
        }, {
            name: 'WonderVu',
            lat: 39.923981,
            lng: -105.38774
        }, , {
            name: 'Expo Park',
            lat: 39.705,
            lng: -104.85973
        }, {
            name: 'Beaver Ranch',
            lat: 39.503727,
            lng: -105.29887
        }],
        userToEdit: {
            username: ''
        }
    };






    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
        console.log('onMarkerClick working')


    }

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };




    render() {

        const markers = this.state.coarseLocations.map((marker, i) => {
            return (<Marker key={i} onClick={this.props.handleClick} position={{ lat: marker.lat, lng: marker.lng }} name={marker.name} />)
        }

        )

        return (
            <React.Fragment>
                <Link to={'/settings'}><button>Settings</button></Link>
                <Map
                    google={this.props.google}
                    zoom={10}
                    style={mapStyles}
                    initialCenter={{
                        lat: 39.7708532,
                        lng: -104.97022469999999
                    }}
                >
                    {markers}
                </Map >
            </React.Fragment>

        );
    }
}

export default withRouter(GoogleApiWrapper(
    (props) => ({
        apiKey: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg'
    }
    ))(MapContainer));