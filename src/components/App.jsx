
import React from 'react';
import UserCards from './Profile/user'
import user from './Profile/user.json';

const App = () => (
    <>
      <UserCards
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </>
  );
  
  export default App;

  // export const App = () => {
    //   return (
    //     <div
    //       style={{
    //         height: '100vh',
    //         display: 'flex',
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         fontSize: 40,
    //         color: '#010101'
    //       }}
    //     >
    //       React homework template
    //     </div>
    //   );
    // };