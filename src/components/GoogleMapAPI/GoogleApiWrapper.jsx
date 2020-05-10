import React from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';



    function MapContainer(props){
        const mapStyles = {
            margin: '0',
            width: '70%',
            height: '70%',
          };
    return (
            <Map
              google={props.google}
              zoom={8}
              style={mapStyles}
              initialCenter={{ lat: 47.444, lng: -122.176}}
            >
              <Marker position={{ lat: 48.00, lng: -122.00}} />
            </Map>
        );
    }
  

    export default GoogleApiWrapper({
        apiKey: 'AIzaSyCVCIuwNO1D5Qr2qyD3fWycf97sJcTyTx8'
      })(MapContainer);