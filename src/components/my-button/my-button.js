import React, { Component } from 'react';

class  MyButton extends Component{
    constructor(props){
        super(props);
        this.state = {liked: false}; //only place to aggign state by react , state is react keyword
        this.handleClick = this.handleClick.bind(this) ;
    }

    handleClick(event) {
        this.setState({liked: !this.state.liked}); //only setState is provided by react
    }
    render() {
        let  text = this.state.liked ? 'liked' : 'haven\'t liked';
        return (
            <div>
            <p onClick={this.handleClick}>
                You {text} this. Click to toggle.  {/*only portion of jsx is getting updated due to rerender called by setStatw*/}
            </p>
            <p> This is another line.  </p>
            </div>

        );
    }
}

export default MyButton ;