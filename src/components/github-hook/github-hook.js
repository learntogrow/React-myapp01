
import React, { useState, useEffect } from "react";
// import './github-hook.css' ;

function GitHubUsersHook() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then(response => response.json())
      .then(data => {
        setUsers(data); // set users in state
      });
  }, []); 

  return (
    <div className="section">
      <h4>List of Users: </h4>
      {users.map(user => (
        <div key={user.id} className="card">
          <h5>{user.login}</h5>
        </div>
      ))}
    </div>
  );
}


 export default GitHubUsersHook ;