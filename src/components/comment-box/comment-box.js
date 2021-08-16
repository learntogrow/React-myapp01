    
import React, { Component } from 'react';
import MyProps from '../my-props/my-props';
import MyDiv1 from '../my-div1/my-div1';
import GenericComponent from '../generic-component/generic-component';
import MyTextBox from '../my-text-box/my-text-box';
import MyButton from '../my-button/my-button';
import UserGist from '../user-gist/user-gist';
import MyTwoWayBinding from '../my-two-way-binding/my-two-way-binding'; 
import MyMap from '../my-map/my-map';
import RepoList from '../repo-list/repo-list';
import MyContainerToggle from '../my-container-toggle/my-container-toggle';
import Galaxy from '../galaxy/galaxy';

import Outer from '../outer/outer';
import MyMessageHoc from '../my-message-hoc/my-message-hoc';
import BtnHook from '../btn-hook/btn-hook';
import GitHubUsersHook from '../github-hook/github-hook';

// class  CommentBox extends Component{
//     render(){
//         let  status = "empty" ;
//       return (
//         <div className="myBox">
//          This is an  info Box, which is currently {status}.
//           <MyProps name="the best" /> {/* props obj parent child data is passed */}
//           <MyDiv1 name="Happy Coding"/> {/* lifecycle hooks */}
//           <GenericComponent /> {/* default props*/}
//           <GenericComponent things="cadbury"/> {/* binding this for static*/}
//           <MyTextBox/> {/* */}
//           <MyButton/> {/* state*/}
//           <UserGist source="https://api.github.com/users/octocat/gists" /> {/*set state */}
//           <MyTwoWayBinding/>
//           <MyMap/> {/* key concept*/}
//           <RepoList prm={fetch('https://api.github.com/search/repositories?q=javascript&sort=stars')} /> 
          
//           <div>My Container</div>
//               <MyContainerToggle/>
//               <Galaxy/>
//         </div>
        
//       );
//     }  // eod render()
//   }
  
//   export default CommentBox ;
//-----------------------------------------------
// class  CommentBox extends Component{
//       render(){
//           let  status = "empty" ;
//         return (
//           <div>
//             {/* <Outer/> */}
//             <MyMessageHoc  name="HOC" />
//           </div>
//         );
//   }  // eod render()
//     }
    //------------------------------------------

    function CommentBox() {  
      return (  
        <div>
                     {/* <Outer/> */}
                     <MyMessageHoc  name="HOC" />
                     <BtnHook/>
                     <GitHubUsersHook/>
                  </div>
      )  
  }  
    export default CommentBox ;