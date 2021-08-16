import React from 'react';
import ChildB from '../child-b/child-b';
  
function ChildA() {  
    return (  
        <div>           
            Child Component at level 1  
            <ChildB/> 
        </div>  
    )  
}  
  
export default ChildA;