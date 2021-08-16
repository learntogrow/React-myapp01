
import React from 'react';   
import ParentComponent from '../parent/parent';
  
export const UserContext = React.createContext();
export const CompanyContext = React.createContext() ;


function Outer() {  
  return (  
    <div className="outer"> 
    <UserContext.Provider value={{"name": "Ajay Kumar", "addr": "Delhi"}} >
      <CompanyContext.Provider value={ "HUL"}>
          <ParentComponent/>
      </CompanyContext.Provider>
    </UserContext.Provider> 
       
    </div>  
  );  
}  
  
export default Outer;  
