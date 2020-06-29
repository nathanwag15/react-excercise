import React, { Component } from 'react';

export default class Toggler extends Component {
    constructor() {
        super()

        this.state = {
            toggleClass: "visible"
        };

        this.ifClick = this.ifClick.bind(this)
    }

    ifClick() {
            if (this.state.toggleClass === "visible") {
                this.setState({toggleClass: "invisible"})
            } else if (this.state.toggleClass === "invisible") {
                this.setState({toggleClass: "visible"})
            }
        }

    render(){
    return(
        <div className="toggler">
            <h1 className={this.state.toggleClass}>Toggle Me</h1>
            <button onClick={() => this.ifClick()}>Toggle</button>


        </div>
    );
    }
}