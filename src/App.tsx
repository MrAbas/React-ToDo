import { Main } from "./components/Main/Main";
import "./App.global.scss";
import { useThemeContext } from "./hooks/ThemeContext";
import styles from "./App.module.scss";

function App() {
  const { theme } = useThemeContext();

  return (
    <div className={`${styles.container} ${styles[`container--${theme}`]}`}>
      <Main />
    </div>
  );
}

export default App;
