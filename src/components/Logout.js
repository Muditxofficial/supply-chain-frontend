import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom';

class Logout extends Component {
    constructor() {
        super();
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        this.logout();
    }

    logout() {
        console.log('logging out')
        axios.get(`${localStorage.getItem('backendURL')}/logout`).then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })
            localStorage.removeItem('loggedIn');
            localStorage.removeItem('username');
          }
        }).catch(error => {
            console.log('Logout error')
        })
    }
    render() {
        return(
            <Redirect to="/"/>
        )
    }
}

export default Logout;