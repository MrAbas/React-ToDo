import { Main } from "./components/Main/Main";
import { useContext } from "react";
import { ThemeContext } from "./providers/ThemeProvider";
import "./App";
//TODO не видит класс
function App() {
  const [theme] = useContext(ThemeContext);
  return (
    <div className={`container ${theme}`}>
      <Main />
    </div>
  );
}

export default App;
