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

  state = {
    score: 0,
    topScore: 0,
    maxScore: 8,
    message: "Click the image to begin!",
    messageClass: "",
    characters: characters
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
