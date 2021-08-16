   
import React, {Component} from 'react';
import PropTypes from 'prop-types' ;
import SolarSystem from '../solar-system/solar-system';


class Galaxy extends Component {
    getChildContext() {  //built in function //
        return {
            planetClickHandler: this.planetClickHandler.bind(this), //func pointer
            mydata: "info from top",
            testdata: "test data Value"
        };
    }

    planetClickHandler() { //user defined
        alert('Planet clicked. Galaxy notified.');
    }

    render() {
        return (
            <SolarSystem />
        );
    }
}
Galaxy.childContextTypes = {  // equvivalent to inyterface // defining interface // how to use// read me for otherr component
    planetClickHandler: PropTypes.func,
    mydata: PropTypes.string,
    testdata: PropTypes.string
};
export default Galaxy;