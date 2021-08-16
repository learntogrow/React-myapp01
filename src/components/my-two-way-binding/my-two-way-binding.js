// import React, { Component } from 'react';
// more javascript way
// class MyTwoWayBinding extends Component{
//     state = {
//         title: ''
//     }
    
//     render() {
//         const {title} = this.state;
//       return (
//         <div className="myBox">
//           <input value={title} onChange={e => this.setState({title: e.target.value})} /><br/>
//           <lable>{title}</lable>
//         </div>
//       );
//     }
// }

// more react way
import React , {Component, createRef } from 'react';

class  MyTwoWayBinding extends Component{
    constructor(){
        super();
        this.state = {input: ''};
        this.bindView = this.bindView.bind(this) ;
        this.userTextInput = createRef() ;
    }
    bindView() {
        this.setState({input: this.userTextInput.current.value}); 
    }
    render() {
        return (
            <div>
                <input type="test" ref={this.userTextInput} onChange={this.bindView}/> 
                <div>{this.state.input}</div>
            </div>
        );
    }
}

export default MyTwoWayBinding ;
