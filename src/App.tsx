import React from 'react';
import UserInfo from './Component/UserInfo';
import Card from './Component/Card';

import './App.css';

function App() {

  const user = {
    name: "Jack Shepherd",
    age: 32,
    email: 'jshepherd@gmail.com'
  };

  return (
    <div>
      <Card>
        <UserInfo
        name={user.name}
        age={user.age}
        email={user.email} 
        />
      </Card>

      <Card>
        <h2>Utilizing Children Props</h2>
        <p>This is task two completed!</p>
      </Card>
    </div>
  );
}

export default App;
