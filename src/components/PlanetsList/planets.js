import React, {Component} from 'react';

import PlanetInfo from '../PlanetInfo/planetinfo';

import './planets.css'

import {Card, Form} from 'react-bootstrap';

class Planets extends Component{

    state = {
        search : ""
    }

    updateSearch = (event) => {
        this.setState({
            search : event.target.value.substr(0,20)
        })
    }

    render(){

        // const planets = this.props.planetlist;
        let filteredPlanets = this.props.planetlist.filter(
            (planet) => {
                return planet.name.toLowerCase().indexOf(this.state.search) !== -1;
            }
        )
        return(
            <div className="row">
                <div className="col-md-12">
                    <Form.Control type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} placeholder="Search planet..."/>
                </div>
               {
                   filteredPlanets.map((p) => {
                    //    console.log(p)

                       return(
                            <div key={p.url} className="col-md-12 cards">
                                <Card>
                                    <h2 className="planetHead">{p.name}</h2>
                                    <p className="planetBrief">The {p.name} is a planet has a day of {p.rotation_period}hrs and completes on revolution in {p.orbital_period} days. Legend says that this planet was created in {p.created} (UTC).</p>
                                    <PlanetInfo planetInfo={p}/>
                                </Card>
                            </div>
                       )
                   })
               }
            </div>
        )
    }
}

export default Planets;