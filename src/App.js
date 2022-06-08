import logo from "./logo.svg";
import "./App.css";
import CharactersList from "./pages/CharactersList";
import {Route, Switch} from "react-router";

function App() {
  return <div className="App">
    <Switch>
    <Route strict exact path="/" component={CharactersList} />
    <Route strict exact path="/:id" component={CharactersList} />

    </Switch>
  </div>;
}

export default App;