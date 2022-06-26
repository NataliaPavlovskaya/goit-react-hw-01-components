
import React from 'react';
import UserCards from './Profile/user'
import user from './Profile/user.json';

import Statistics from './Statistics/Statistics';
import statisticalData from './Statistics/data.json';

import FriendList from './FriendList/Friends.js';
import friends from './FriendList/friends.json';

import TransactionHistory from './TransactionHistory/Transactions';
import transactions from './TransactionHistory/transactions.json';


const App = () => (
    <>
      <UserCards
        name={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
  
  export default App;
