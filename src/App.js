import React, { Component } from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import MainPage from './components/main_page/main_page';
import resume from './resume_data.js';
import './styles/css/App.css';

class App extends Component {
	constructor(){
		super();

		this.state = {
			resume: resume
		}
	}

  render() {
    return (
      <div className="App">
        <Header resume={ this.state.resume }/>
        <MainPage resume={ this.state.resume }/>
        <Footer resume={ this.state.resume }/>
      </div>
    );
  }
}

export default App;
