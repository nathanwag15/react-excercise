import React, { Component } from 'react';

export default class TextAligner extends Component {
    constructor() {
        super();

        this.state = {
            alignment: "left"
        };

        this.rightAligner = this.rightAligner.bind(this);
        this.leftAligner = this.leftAligner.bind(this);
        this.centerAligner = this.centerAligner.bind(this);
    }

    leftAligner() {
        this.setState({ alignment: "left"})
    }

    rightAligner() {
        this.setState({ alignment: "right"})
    }

    centerAligner() {
        this.setState({ alignment: "center"})
    }

    render() {
        return (
            <div className="alignment-wrapper">
                <h1
                    style={{
                        textAlign: this.state.alignment
                    }}>Align Me!</h1>
                <div className="buttonClass">
                    <button onClick={() => this.leftAligner()}>Left</button>
                    <button onClick={() => this.centerAligner()}>Center</button>
                    <button onClick={() => this.rightAligner()}>Right</button>
                </div>
            </div>
        )
    }
}