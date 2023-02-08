// classes have inheritance and methods. reder: what shows when app loads

import React, { Component } from 'react'
import Landing from './Landing'
import Nav from './Nav'
// import News from './News'

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Landing />
        {/* <Home /> */}

        {/* <Content>
          <Feed>
            <Post>

            </Post>
          </Feed>

        </Content> */}




      </div>
    )
  }
}

