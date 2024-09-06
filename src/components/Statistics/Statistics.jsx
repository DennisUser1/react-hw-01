import styles from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
    return (
        <>
          <h3>Task 2. Statistics Section</h3>
          <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}
            <ul className={styles.statList}>
                {stats.map(({ id, label, percentage }) => (
                    <li key={id} className={styles.item}>
                        <span className={styles.label}>{label}</span>
                        <span className={styles.percentage}>{percentage}%</span>
                    </li>
                ))}
            </ul>
          </section>
        </>
    );
};

// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215)
//       .toString(16)
//       .padStart(6, '0')}`;
// };

export default Statistics;
