import React from 'react' ;
import ChildC from '../child-c/child-c';
import {CompanyContext} from  '../outer/outer';
  
function ChildB() {  
    return (  
        <div>  
            Child Component at level 2  
            <CompanyContext.Consumer>  
                { (co) => <div><em>Co. name: {co}</em></div> }  
            </CompanyContext.Consumer>

            <ChildC/>  
        </div>  
    )  
}  
  
export default ChildB ;