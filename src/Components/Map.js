import React, { Component } from 'react';
import ReactDOM from 'react';
import { withGoogleMap, GoogleMap, InfoWindow } from 'react-google-maps';
import Marker from './Marker';

class Map extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let dropMarker = this.props.dropMarker
		const ParksMap = withGoogleMap (props => (
			<GoogleMap
				defaultCenter = {{lat: 4.674285, lng: -74.056567 }}
				defaultZoom = {13}>

				{this.props.filtParks && this.props.filtParks.map(marker => (
					<Marker
					marker={marker}
					key={marker.id}
					id={marker.id}
					dropMarker={dropMarker}
					apiError={this.props.apiError}/>
					))}
			</GoogleMap>
			))

		return (
				<div>
					<ParksMap
					containerElement={<div className="containerElement"/>}
					mapElement={<div className="mapElement" /> }/>
				</div>
			)
	}
}

export default Map
