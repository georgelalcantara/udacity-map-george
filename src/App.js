import React, { Component } from 'react';
import ReactDOM from 'react'
import Map from './Components/Map'
import Sidebar from './Components/Sidebar'
import Error from './Components/Error'
import escapeRegExp from 'escape-string-regexp'
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);

    this.state= {
      parks: [],
      query: '',
      dropMarker: '',
      sideOpen: false,
      apiError: false

    }

  this.onHandleClick = this.onHandleClick.bind(this)
  this.openSidebar = this.openSidebar.bind(this)


  }


componentDidMount() {
fetch('https://api.foursquare.com/v2/venues/search?ll=4.674285,-74.056567&categoryId=4bf58dd8d48988d163941735&client_id=DSAC3YF0G3M55SCXFD3TXIJ3OVVK352TIMASJAEKJPKOSIU1&client_secret=OFXLLGLJ44RTNIN4XCD2COO05LML0YL3E0OWF1I4RNNL21TF&v=20182212')
  .then(response => response.json())
  .then(data => this.setState({
    parks: data.response.venues
  }))
  .catch(error => this.setState({
    apiError: true
  }))

}

updateQuery(query) {
    this.setState({query: query})
  }

onHandleClick(e, key) {
  let dropMarker = this.state.parks.filter(a => a.id === key)
  this.setState({
    dropMarker: dropMarker
  })

}

openSidebar() {
  const sideOpen = this.state.sideOpen
  this.setState({
    sideOpen: !sideOpen,
  })
}

  render() {
    let filtParks
    if(this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      filtParks = this.state.parks.filter((park) => match.test(park.name))
    } else {
      filtParks = this.state.parks
    }

    let sideOpenClose = "sideCont hide"
    if(this.state.sideOpen === true) {
      sideOpenClose = "sideCont show"
    }




    return (
      <div className="App">
        <div className="container">
         <div className="menu"
            >
           <i className="fas fa-bars"
              onClick={this.openSidebar}
            ></i>
         </div>
         <div className={sideOpenClose}>

         <div className="title">
           <h1 tabIndex="0">Bogota Parks</h1>
           <input
              className="searchParks"
              type='text'
              aria-label='Search by Park Name'
              placeholder="Search Parks"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
          {(filtParks) ?
            <Sidebar
              parks={this.state.parks}
              filtParks={filtParks}
              onHandleClick={this.onHandleClick}
              apiError={this.state.apiError}/>
            :
              <Error
              />
            }

          </div>
         <div className="mapCont">
              <Map
                parks = {this.state.parks}
                onMarkerClick = {this.toggleInfoWindow}
                filtParks={filtParks}
                onHandleClick={this.onHandleClick}
                dropMarker={this.state.dropMarker}
                apiError={this.state.apiError}
              />

         </div>
        </div>
      </div>
    );
  }
}

export default App;
