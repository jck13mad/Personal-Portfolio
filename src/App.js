import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import ProjectsContainer from './containers/ProjectsContainer';

class App extends Component {
  render() {
    return (
        <div className='App' id='page-top' >
          
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <div className="projects" style={{backgroundImage: `url(./images/skylinegradient.jpg)`}}>
            <ProjectsContainer />
            </div>
          <Contact class="footer"/>
      </div>
    );
  }
}

export default App;