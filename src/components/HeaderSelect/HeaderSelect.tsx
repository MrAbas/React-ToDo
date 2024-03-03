import styles from "./headerSelect.module.scss";

export const HeaderSelect = () => {
  return (
    <select className={styles.drop_down}>
      <option value="All">All</option>
      <option value="Complete">Complete</option>
      <option value="Incomplete">Incomplete</option>
    </select>
  );
};
