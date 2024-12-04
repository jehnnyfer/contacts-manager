import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import ContactList from './components/ContactList'

import axios from 'axios'

class App extends Component {
  state = {
    contacts: [],
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        //array with relevant data (id, name, email and phone)
        const newContacts = response.data.map((c) => {
          return {
            id: c.id,
            name: c.name,
            email: c.email,
            phone: c.phone,
          }
        })

        const newState = Object.assign({}, this.state, {
          contacts: newContacts,
        })

        this.setState(newState)
      })
      .catch((error) => console.log(error))
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2 className='app-title'>Contact Manager</h2>
          <p>Made with React</p>
        </header>

        <ContactList contacts={this.state.contacts} />
      </div>
    )
  }
}

export default App
