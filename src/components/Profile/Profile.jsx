import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <>
      <h4>Task 1. Social Network Profile</h4>
      <div className={styles.profileCard}>
        <div className={styles.profileCardArea}>
          <img
            className={styles.profileCardImg}
            src={avatar}
            alt="User avatar"
          />
          <p className={styles.profileCardName}>{name}</p>
          <p className={styles.profileCardInfo}>@{tag}</p>
          <p className={styles.profileCardInfo}>{location}</p>
        </div>

        <ul className={styles.profileList}>
          <li className={styles.profileListItem}>
            <span className={styles.activity}>Followers</span>
            <span className={styles.quantity}>{stats.followers}</span>
          </li>
          <li className={styles.profileListItem}>
            <span className={styles.activity}>Views</span>
            <span className={styles.quantity}>{stats.views}</span>
          </li>
          <li className={styles.profileListItem}>
            <span className={styles.activity}>Likes</span>
            <span className={styles.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
