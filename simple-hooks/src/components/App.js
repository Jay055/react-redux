import React, { useState } from 'react';
import ResourceList from './ResourceList';
<<<<<<< HEAD
import UserList from './UserList';
=======
// import UserList from './UserList';
>>>>>>> dca08546df51df1bca915602867dbd601b6b2aa0

const App = () => {
  const [resource, setResource] = useState('posts');

  return (
    <div>
<<<<<<< HEAD
      <UserList />
=======
      {/* <UserList /> */}
>>>>>>> dca08546df51df1bca915602867dbd601b6b2aa0
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      {resource}
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;