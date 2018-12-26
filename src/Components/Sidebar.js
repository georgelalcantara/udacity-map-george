import React, { Component } from 'react';

class Sidebar extends Component {
	constructor(props) {
		super(props);
	}

	handleClick(a, key) {
		this.props.onHandleClick(a, key)
	}

  render() {
  	let filtParks = this.props.filtParks
  	let parks = this.props.parks
    return (
    	<div>
			{filtParks && (
			<ul className="sideList">
				{filtParks.map(park => (
					<li
					className="parksList"
					tabIndex="0"
					key={park.id}
					id={park.id}
					onClick={(a, key) => this.handleClick(a, park.id)}
					>{park.name}
					</li>
					))}
			</ul>
			)}
      	</div>
    );
  }
}

export default Sidebar;
