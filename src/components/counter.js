import React, { Component } from 'react';

 
export default class Counter extends Component {
    constructor() {
        super()

        this.state = {
            count: 0
        };

        this.countUp = this.countUp.bind(this)
        this.countDown= this.countDown.bind(this)
    }

    countUp() {
        this.setState({
            count: this.state.count + 1
        });
    };

    countDown() {
        this.setState({
            count: this.state.count - 1
        });
    };

    render() {
        return(

            <div className="counter">
                {this.state.count}
                <div className="buttons">
                    <button onClick={() => this.countUp()}>Up</button>
                    <button onClick={() => this.countDown()}>Down</button>
                </div>
            </div>
        )
    }
}
