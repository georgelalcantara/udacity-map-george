import React, { Component } from 'react'
import { InfoWindow } from 'react-google-maps'

function Details(props) {
	let marker = props.marker
	return(
		<InfoWindow>
			<div>
				<h3>{marker.name}</h3>
				<p>{marker.location.address}</p>
			</div>
		</InfoWindow>
		)
}

export default Details
