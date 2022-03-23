import React, { Component } from 'react'
import Fifth from './Fifth.js'
import Fourth from './Fourth.js'
import Sixth from './Sixth'

export class App extends Component {
  render() {
    return (
      <div>
        <Fourth/>

        <Fifth/>

        <Sixth/>
      </div>
    )
  }
}

export default App
