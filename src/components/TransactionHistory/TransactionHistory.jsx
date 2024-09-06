import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <>
      <h2>Task 4. Transaction History</h2>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr className={styles.tableRow}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody className={styles.tableBody}>
          {items.map((item) => {
            return (
              <tr className={styles.tableRow} key={item.id}>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TransactionHistory;
