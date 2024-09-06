import styles from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({avatar, name, isOnline}) => {
  // const onlineStatusClass = isOnline ? styles.online : styles.offline;
    return (
      <div className={styles.card}>
          <img className={styles.avatar} src={avatar} alt="Avatar" width="48" />
          <p className={styles.username}>{name}</p>
          <div className={styles.statusWrapper}>
                <span className={clsx(styles.statusIndicator, { [styles.online]: isOnline, [styles.offline]: !isOnline })}></span>
                <p className={clsx(styles.isOnline, { [styles.online]: isOnline, [styles.offline]: !isOnline })}>
                    {isOnline ? 'Online' : 'Offline'}
                </p>
            {/* <p className={`${styles.isOnline} ${onlineStatusClass}`}>
                {isOnline ? 'Online' : 'Offline'}
                </p> */}
            </div>
      </div> 
    );
  };
  
  export default FriendListItem;