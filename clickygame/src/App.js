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

  shuffle = (array) => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    //While there remains elements to shuffle
    while (0 !== currentIndex) {

    //Pick a remaning element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    //Swapping it with current Element
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
    }
    return array;
  }

  handleCorrectSelection = () => {
    if (this.state.score +1 > this.state.topScore) {
      this.setState({topScore: this.state.topScore +1})
    }
    if (this.state.score+1 === this.state.maxScore) {
      this.setState({score: this.state.score +1, message: "Congrats you Win!", messageClass: "correct"})
    } else {
      this.setState({score: this.state.score +1, message: "You got it right!", messageClass: "correct"})
    }
  }

  handleIncorrectSelection = () => {
    this.setState({score: 0, message: "You gon messed up son!"})
    //reset clicked state for characters
    const updatedCharacters = this.state.characters.map(ch => ch.isClicked === true ? { ...ch, isClicked: false} : ch)
    return updatedCharacters;
  }

  handleResetWins = (currentCharacters) => {
    // If current score is at max, reset the score and topscore
    if (this.state.score +1 === this.state.maxScore) {
      this.setState({score: 0, topScore: 0})
      //reset clicked state for characters
      const updatedCharacters = currentCharacters.map(ch => (true) ? { ...ch, isClicked: false} : ch)
      return updatedCharacters;
    } else {
      return currentCharacters;
    }
  }

  handleShuffledCharacters = (name) => {
    let resetNeeded = false;
    const characters = this.state.characters.map(ch => {
      if (ch.name === name) {
        if (ch.isClicked === false) {
          this.handleCorrectSelection()
          return {...ch, isClicked: false}
        }
      }
      return ch;
    })

    if (resetNeeded) {
      this.setState({
        character: this.shuffle(this.IncorrectSelection()),
        messageClass: "incorrect"
      })
    } else {
      //Check game win condition before rendering characters
      this.setState({characters: this.shuffle(this.handleResetWins(characters))})
    }
  }

  handleRenderedCharacters = () => {
    return this.state.characters.map((character) =>
      <Item
        image={character.image}
        name={character.name}
        key={character.id}
        onClick={this.handleShuffledCharacters}
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
