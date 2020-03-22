import React from 'react';
import { compose, withProps } from 'recompose';
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker,
} from 'react-google-maps';

const key = 'AIzaSyDUkLIlWufKEDPHMzt72oB1Gnw0-yaEgu8';

const MapComponent = compose(
	withProps({
		/**
		 * Note: create and replace your own key in the Google console.
		 * https://console.developers.google.com/apis/dashboard
		 */
		googleMapURL:
			'https://maps.googleapis.com/maps/api/js?key=' +
			key +
			'&v=3.exp&libraries=geometry,drawing,places',
		loadingElement: <div style={{ height: `100%` }} />,
		containerElement: <div style={{ height: `400px` }} />,
		mapElement: <div style={{ height: `100%` }} />,
	}),
	withScriptjs,
	withGoogleMap,
)(props => (
	<GoogleMap defaultZoom={8} defaultCenter={{ lat: 52.507, lng: 13.144 }}>
		{props.isMarkerShown && (
			<Marker position={{ lat: -34.397, lng: 150.644 }} />
		)}
	</GoogleMap>
));

export default MapComponent;
