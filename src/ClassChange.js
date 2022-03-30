import React ,{ Component}from 'react';
class ClassChange extends Component {
    state = { text: ""};

    handleInput = (e) => this.setState ({text:e.target.value});
    render(){
        const {text} = this.state;
        return (
            <>
                <input type ="text" onChange={this.handleInput}/>
                <p>{text}</p>
            </>

        )
    }

}
export default ClassChange;