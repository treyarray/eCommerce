import './App.css';
import {
  ThemeProvider,
} from '@material-ui/core/styles';
import Home from "./pages/Home"
import {BrowserRouter} from "react-router-dom";
import { PublicRoute} from "react-private-public-route";
import Theme from "./color";
import Price from './pages/price';
import Payment from './pages/payment';
import Men from './pages/Men';
import Women from './pages/Women';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
       <ThemeProvider theme={Theme}>
          <PublicRoute component={Home} path="/" exact/>
          <PublicRoute component={Price} path="/price" exact/>
          <PublicRoute component={Payment} path="/billing" exact/>
          <PublicRoute component={Men} path="/men" exact/>
          <PublicRoute component={Women} path="/women" exact/>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
