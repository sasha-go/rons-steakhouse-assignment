import React, { Component } from 'react'
import './Nav.css'

export default class Nav extends Component {
  render() {
    return (
      <section className='Nav'>
        <a href='/'>
          Home
        </a>
        <a href='/menu'>
          Menu
        </a>
        <a href='/bio'>
          Bio
        </a>
      </section>
    )
  }
}
