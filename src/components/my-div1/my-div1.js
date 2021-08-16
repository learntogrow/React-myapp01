    
import React, {Component} from 'react';

class MyDiv1 extends Component {

        constructor(props) { //lifecycle hooks
            super(props);
            console.log("constr -- prop: ",   this.props.name) ;
        }

    //    componentWillMount() { console.log("componentWillMount") ;   }//old reactjs hook // ajax call was happeninfg here
    

         render() { //lifecycle hooks
             console.log("render") ;
             return <div>JS: {this.props.name}</div>;
         }

        componentDidMount() { console.log("componentDidMount: ", this.props.name) ; } //lifecycle hooks
        componentWillUnmount() {console.log("componentWillUnmount:", this.props.name) ; } //lifecycle hooks

    }

    export default MyDiv1 ;