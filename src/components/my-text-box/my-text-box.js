// import React , {Component} from 'react';

// class  MyTextBox extends Component{
//     constructor(){
//         super();
//         this.state = {liked: false};
//         this.handleClick = this.handleClick.bind(this) ;
//     }

//     handleClick() {this.refs.myTextInput1.focus(); }
//     render() {
//         return (
//             <div>
//                 <input type="date" ref="myTextInput1" /> <br/><br/>
//                 <input type="date" ref="myTextInput2" /> <br/><br/>
//                 <input type="button" value="Bring back focus"
//                              onClick={this.handleClick} />
//             </div>
//         );
//     }
// }

// export default MyTextBox ;
import React , {Component, createRef } from 'react';

class  MyTextBox extends Component{
    constructor(){
        super();
        this.state = {liked: false};
        this.handleClick = this.handleClick.bind(this) ;
        this.myTextInput = createRef() ;
        this.myTextInput2 = createRef() ;
    }

    handleClick() {
        this.myTextInput2.current.focus(); 
        console.log('data: ', this.myTextInput2.current.value );
     }

    render() {
        return (
            <div>
                <input type="date" ref={this.myTextInput} /> <br/><br/>
                <input type="date" ref={this.myTextInput2} /> <br/><br/>
                <input type="button" value="Bring back focus" 
                       className='btn btn-warning'
                       onClick={this.handleClick} />
            </div>
        );
    }
}

export default MyTextBox ;
