import React from 'react';
import userData from './userData.json';
import friends from './friends.json';
import transactions from "./transactions.json";
import FriendsList from './components/FriendsList/FriendsList';
import Profile from './components/Profile/Profile';
import TransactionHistory from './components/TransactionHistory/TransactionHistory'


const App = () => {
    return (
      <>
        <Profile user = {userData}/>
        <FriendsList friends={friends}/>
        <TransactionHistory items={transactions}/>
        </>
    );
};
  
export default App;
