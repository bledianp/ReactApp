import logo from "./logo.svg";
import "./App.css";
import CharactersList from "./pages/CharactersList";
import { Route, Switch, Routes } from "react-router";
import ItemDetails from "./pages/ItemDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<CharactersList />} />
        <Route exact path="/:id" element={<ItemDetails />} />
      </Routes>
    </div>
  );
}

export default App;
