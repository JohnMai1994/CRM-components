import './App.css';
import {ThemeProvider} from "styled-components";
import theme from "./theme";
import CRMApp from "./components/CRMApp";

function App() {
  return (
    <ThemeProvider theme={theme}>
        <CRMApp/>
    </ThemeProvider>
  );
}

export default App;
