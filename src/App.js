import React, { Component } from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import MainPage from './components/main_page/main_page';
import './styles/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainPage />
        <Footer />
      </div>
    );
  }
}

export default App;
