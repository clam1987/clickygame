import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./component/NavBar/Navbar";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";

class App extends Component{
  //setting up initial app component
  constructor(){
    super()

  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <div className="Content">
        
        </div>
        <Footer />
      </div>
    )
  }
}



export default App;
