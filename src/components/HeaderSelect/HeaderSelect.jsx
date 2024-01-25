import styles from "./headerSelect.module.scss";

export const HeaderSelect = () => {
  return (
    <select className={styles.drop_down}>
      <option>all</option>
      <option>Complete</option>
      <option>Incomplete</option>
    </select>
  );
};
