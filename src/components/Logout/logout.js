import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {Button} from 'react-bootstrap';

class Logout extends Component {

    state = {
        loggedIn : false
    }

    render(){

        localStorage.removeItem('token');
        //simple logout and delete token
        return(
            <div>
                <h2>Hope the information of planets helped to decide your next trip destination!!!</h2> 
                <Link to="/" ><Button variant="outline-success">Back to login</Button></Link>
            </div>  
        )
    }
}

export default Logout;