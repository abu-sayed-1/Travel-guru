import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class GoogleMaps extends Component{
  render(){
    return(
        <div>
    <Map google={this.props.google} zoom={4}>
          <Marker onClick={this.onMarkerClick}
                  name={'Bangladesh'} />
          <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                {/* <h1>{this.state.selectedPlace.name}</h1> */}
          </div>
       </InfoWindow>
   </Map>
        </div>
    );

  }
  
};

export default GoogleApiWrapper({
  apiKey: ("******")
})(GoogleMaps)