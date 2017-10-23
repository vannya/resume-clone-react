import React, { Component } from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/main_page/home';
import Resume from './components/main_page/resume';
import Projects from './components/main_page/projects';
import resume from './resume_data.js';
import { Switch, Route } from 'react-router-dom';
import './styles/css/App.css';

class App extends Component {
	constructor(){
		super();

		this.state = {
			resume: resume
		}
	}


  render() {
    const HomeWithProps = (props) => {
      return (
        <Home 
          resume={this.state.resume}
          {...props}
        />
      );
    }
    const ResumeWithProps = (props) => {
      return (
        <Resume 
          resume={this.state.resume}
          {...props}
        />
      );
    }
    const ProjectsWithProps = (props) => {
      return (
        <Projects 
          resume={this.state.resume}
          {...props}
        />
      );
    }



    return (
      <div className="App">
          <header>
            <Header resume={ this.state.resume }/>
          </header>
          <main>
            <Switch>
              <Route exact path='/' render={ HomeWithProps }/>
              <Route path='/resume' render={ ResumeWithProps }/>
              <Route path='/projects' render={ ProjectsWithProps }/>
            </Switch>
          </main>
          <footer>
            <Footer resume={ this.state.resume }/>
          </footer>
      </div>
    );
  }
}

export default App;
