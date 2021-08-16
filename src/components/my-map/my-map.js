import React, { Component } from 'react';


let names2 = [
                   {"id" : 11, "val" : "cream"},
                   {"id" : 21, "val" : "age"},
                   {"id" : 31, "val" : "cold"}
                ];


class MyMap extends Component{
    render(){
        return(
        <ul>
            {
                names2.map(function (obj, idx) {
                    return <li key={idx}> {obj.id} : Ice {obj.val}</li>
                })
            }
        </ul>
        )
    }
}

export default MyMap ;