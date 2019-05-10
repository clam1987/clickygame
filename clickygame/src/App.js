import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./component/NavBar/Navbar";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Item from "./component/Item/Item";
import arrowverse from "./arrowverse.json";

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
    characters: arrowverse
  }

  handleRenderedCharacters = () => {
    return this.state.characters.map((character) =>
      <Item
        image={character.image}
        name={character.name}
        key={character.id}
        />
    );
  }

  render() {
    return (
      <div className="App">
        <Navbar 
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.message}
          messageClass={this.state.messageClass}
        />
        <Header />
        <div className="Content">
          {this.handleRenderedCharacters()}
        </div>
        <Footer />
      </div>
    )
  }
}



export default App;
