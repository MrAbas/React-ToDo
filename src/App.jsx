import { Main } from "./components/Main/Main";
import { useContext } from "react";
import { ThemeContext } from "./providers/ThemeProvider";
import "./App.scss";

function App() {
  const [theme] = useContext(ThemeContext);
  return (
    <div className="container">
      <Main />
    </div>
  );
}

export default App;
