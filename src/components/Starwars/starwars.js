import React, {Component} from 'react';
import { Link,Redirect } from 'react-router-dom';
import axios from 'axios';

import {Button} from 'react-bootstrap';

import Planets from '../PlanetsList/planets';
import './starwars.css';

class Starwars extends Component{
    
    state = {
        loggedIn : true,
        planets : []
    }

    getPlanets = () => {
        axios.get("https://swapi.co/api/planets/")
        .then(response => {
            // console.log(response.data.results);
            this.setState({planets: response.data.results})
        })
    }

    componentDidMount(){
        this.getPlanets();
    }

    render(){

        const myToken = localStorage.getItem('token');

        if(myToken == null){ //to check if the token exists, if yes then user is in the logged in state else loggedIn is false and it will redirect to login page
            this.setState({
                loggedIn : false
            })
        }

        if(this.state.loggedIn === false){ // redirection if not logged in 
            return <Redirect to="/"/>
        }

        return (
            <React.Fragment>
            <h2 className = "mainHead">List of planets in Star Wars</h2>
            <Planets planetlist = {this.state.planets} />
            <div className="logoutButtonContainer">
                <Link to="/logout"><Button className="logoutButton" variant="outline-danger">Logout</Button></Link>
            </div>
            </React.Fragment>
        )
}
}

export default Starwars;