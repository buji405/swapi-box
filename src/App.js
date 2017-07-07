import React, { Component } from 'react';
import './App.css';
import ScrollText from './components/ScrollText/ScrollText';
import Movie from './components/constructors/Movies';
import api from './data/api';
import Button from './components/Button/Button';
import CardList from './components/CardList/CardList'
import HelperData from './helper'

class App extends Component {
  constructor() {
    super()
    this.helper = new HelperData;
    this.state = {
      films: null,
      people: null,
      planets: null,
      buttonName: null
    }
    this.populatePeople = this.populatePeople.bind(this)
    this.populatePlanetDetails = this.populatePlanetDetails.bind(this)
  }

  componentDidMount() {
    const movieArray = []
    const movieFetch = fetch(api.films)
    .then((res) => res.json())
    .then((info) => {
      info.results.forEach(obj => movieArray.push(new Movie(obj)))
    })
    .catch(function(error) {
      console.log('Request failed:', error);
    })

    Promise.all([movieFetch])
    .then(values => {
      this.setState ({
          films: movieArray
      })
    })
  }

  populatePeople() {
    this.helper.getPeople(this)
    this.setState({
      buttonName: 'people'
    })
  }

  populatePlanetDetails() {
    console.log('connected bro');
    this.helper.getPlanets(this)
    this.setState({
      buttonName: 'planets'
    })
  }

  render() {
    if(!this.state.films){
      return (
        <div></div>
      );
    } else {
      return (
        <div className="App">
          <ScrollText films={this.state.films} />
          <Button populatePeople={this.populatePeople}
                  populatePlanetDetails={this.populatePlanetDetails} />
          <CardList peopleArray={this.state.people}
                    planetArray={this.state.planets}
                    buttonState={this.state.buttonName}/>
        </div>
      )
    }
  }
}

export default App;
