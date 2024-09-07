import Profile from "./components/Profile/Profile";
import userData from './db/userData.json';
import FriendList from "./components/Friends/FriendList/FriendList";
import friends from './db/friends.json'; 
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./db/transactions.json";

const App = () => {
    return (
      <>
        <h1>React Homework Template. Components</h1>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          avatar={userData.avatar}
          stats={userData.stats}
        />
        <FriendList friends={friends}/>
        <TransactionHistory items={transactions}/>
      </>
    );
  };
  
  export default App;