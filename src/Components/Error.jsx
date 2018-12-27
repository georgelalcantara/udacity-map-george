import React, { Component } from 'react'

export default class Error extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
			return (
				<div>
					<h2 className="Error">Park List Could Not Be Retrieved. Please check if FourSquare API is valid.</h2>
				</div>
				)
		}
	}
