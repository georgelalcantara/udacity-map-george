import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps'
import Details from './Details'

export default class ParkMarker extends Component {
	constructor(props) {
		super(props);
	this.state = {
			infoWindowOpen: false,
			animation: ''
		}
		this.handleClick = this.handleClick.bind(this)
	}
		handleClick(a, key) {
		let markerClick = a
		let infoWindowOpen = this.state.infoWindowOpen
		this.setState({
			infoWindowOpen: !infoWindowOpen
		})
	}

render() {

	let dropMarker = this.props.dropMarker
	let infoWindowOpen = this.state.infoWindowOpen
	let animation = this.state.animation
	if(dropMarker && infoWindowOpen === false)
	dropMarker.map(m => {
		if(m.id === this.props.id)
			this.setState({
				infoWindowOpen: !infoWindowOpen,
				animation: 2
			})
	})
	let marker = this.props.marker
		if(this.props.dropMarker.id === marker.id){
		}

	return (
		<Marker
						key={marker.title}
						position={{lat: marker.location.lat, lng: marker.location.lng}}
						onClick={(a, key) => this.handleClick(a, this.props.marker.id)}
						animation={this.state.animation}
				 	>
			 			<React.Fragment>
			 			{this.state.infoWindowOpen === true && (
		 					<React.Fragment>
		 					{this.props.apiError === false && (
				 				<Details
				 					marker={marker}
				 				 />
				 				 )}
			 				 </React.Fragment>
			 				)}
			 			</React.Fragment>
		 			</Marker>
		)}}
