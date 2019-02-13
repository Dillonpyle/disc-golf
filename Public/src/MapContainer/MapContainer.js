import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';


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
        }]
    };





    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

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
            return (<Marker key={i} onClick={this.props.handleClick} position={{ lat: marker.lat, lng: marker.lng }} />)
        }

        )

        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{
                    lat: 39.8028,
                    lng: -105.0875
                }}
            >
                {markers}
            </Map >

        );
    }
}

export default GoogleApiWrapper(
    (props) => ({
        apiKey: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg'
    }
    ))(MapContainer);