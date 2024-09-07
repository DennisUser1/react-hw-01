import { useState } from 'react';
import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => {
    const [activeId, setActiveId] = useState(null);

    const handleClick = (id) => {
        setActiveId(null); 
        setTimeout(() => setActiveId(id), 0); 
    };

    return (
        <div>
            <h3 className={styles.heading}>Task 3. List of Friends</h3>
            <ul className={styles.friendsList}>
                {friends.map((friend) => {
                    return (
                        <li
                            className={`${styles.listItem} ${activeId == friend.id ? styles.animate : ''}`}
                            key={friend.id}
                            onClick={() => handleClick(friend.id)}
                        >
                            <FriendListItem
                                avatar={friend.avatar}
                                name={friend.name}
                                isOnline={friend.isOnline}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default FriendList;

