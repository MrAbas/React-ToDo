import { Main } from "./components/Main/Main";
import { useContext } from "react";
import { ThemeContext } from "./providers/ThemeProvider";
import "./App.global.scss";
import styles from "./App.module.scss";

function App() {
  const [theme] = useContext(ThemeContext);
  return (
    <div className={`${styles.container} ${styles[`container--${theme}`]} `}>
      <Main />
    </div>
  );
}

export default App;
