import './App.css';
import { Route, NavLink, Switch } from "react-router-dom";
import Home from "./components/Home";
import BusinessNews from "./components/BusinessNews";
import BitcoinNews from "./components/BitcoinNews";
import { BITCOIN } from "./data/bitcoinSeed";
import { BUSINESS } from "./data/businessSeed";

//import data from "./data/"


function App() {
  return (
    <div className="App">
      <div className="app-links">
        <nav className="app-nav">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/business"}>Business</NavLink>
          <NavLink to={"/bitcoin"}>Bitcoin</NavLink>
        </nav>
      </div>
      <main>
        <Switch>
          <Route exact path={"/"}>
          <Home />
          </Route>
          <Route exact path={"/business"}>
          <BusinessNews BusinessNews={data} />
          </Route>
          <Route exact path={"/bitcoin"}>
            <BitcoinNews
              BitcoinNews={data}
            />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
export default App;