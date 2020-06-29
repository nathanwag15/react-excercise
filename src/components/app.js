import React, { Component } from 'react';
import TextAligner from "./text-aligner";
import Toggler from "./toggler";
import Counter from "./counter";

export default class App extends Component {
  render() {
    return (
      <div className='main-div'>
        <h1>Coding Excecise</h1>
        <TextAligner />
        <div className="toggleClass">
          <Toggler />
        </div>
        <div className="counterWrapper">
          <Counter />
        </div>
      </div>
    );
  }
}
