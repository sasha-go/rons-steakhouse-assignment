import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default class Nav extends Component {
  render() {
    return (
      <section className='Nav'>
        <Link to='/'>
          Home
        </Link>
        <Link to='/menu'>
          Menu
        </Link>
        <Link to='/bio'>
          Bio
        </Link>
      </section>
    )
  }
}
