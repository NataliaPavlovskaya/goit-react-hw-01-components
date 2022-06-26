import React from 'react';
import UserCards from './Profile/userCard'
import user from './Profile/user.json';

import Statistics from './Statistics/Statistics';
import statisticalData from './Statistics/data.json';

const App = () => (
    <>
      <UserCards
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
    </>
  );
  
  export default App;