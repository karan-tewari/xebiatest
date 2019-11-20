import React, {Component} from 'react';
import {ListGroup, Button} from 'react-bootstrap';

import './planetinfo.css'

class PlanetInfo extends Component{

    state = {
        expanded : false,
        planetSize : "normal"
    }

    open = () => {
        this.setState({
            expanded : !this.state.expanded
        })
    }

    close = () => {
        this.setState({
            expanded : !this.state.expanded
        })
    }


    render(){
        const info = this.props.planetInfo;
        if(!this.state.expanded){
            return <Button variant="outline-primary" onClick={this.open} className="buttonHalf">Show Planet Details</Button>
        }
        console.log(info.population)
        return (
            <div className = {this.state.planetSize}>
                <Button onClick={this.close} variant="outline-info" className="buttonHalf">Hide info</Button> 
                <ListGroup>
                    <ListGroup.Item>Climate : {info.climate} </ListGroup.Item>
                    <ListGroup.Item>Terrain : {info.terrain} </ListGroup.Item>
                    <ListGroup.Item>Population : {info.population} </ListGroup.Item>
                    <ListGroup.Item>Created : {info.created} </ListGroup.Item>
                    <ListGroup.Item>Diameter : {info.diameter} </ListGroup.Item>
                    <ListGroup.Item>Rotation Period : {info.rotation_period} </ListGroup.Item>
                </ListGroup>
            </div>
        )
    }

}

export default PlanetInfo;