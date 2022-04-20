import React, { Component } from 'react';

class ClassComponent extends Component {
    state= {counter:0};

    handleDecrement = () =>
    this.setState((prev) => ({
        counter:prev.counter-1,
    }));
    handleIncrement = () =>
    this.setState((prev) => ({
        counter:prev.counter+1,
    }))



    render(){
        return(
            <>
                <h1> Counter is {this.state.counter}</h1>
                <button onClick={this.handleDecrement}
                > 
                -
                </button>

                
                <button onClick={this.handleIncrement}
                > 
                +
                </button>



            </>

        );

    }
}

export default ClassComponent;