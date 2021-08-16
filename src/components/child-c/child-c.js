import React from 'react';
import {UserContext} from '../outer/outer';
  
function ChildC() {  
    return (  
        <div>  
            Child Component at level 3  
            <UserContext.Consumer>  
                {  
                    co => {  
                        return <div><em>Child-C: ctx value: {co.name} </em></div>  
                    }  
                }  
            </UserContext.Consumer> 
        </div>  
    )  
}  
  
export default ChildC;