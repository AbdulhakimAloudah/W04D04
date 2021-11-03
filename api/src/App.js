import "./App.css";
import { Route } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./components/Home";
import Abut from "./components/abut";
import Contact from "./components/contact";
import Pokemon from "./components/pokemon"



function App() {
  return (
    <div className="App">
      <Nav />
      
      <Route exact path="/" component={Home} />
      <Route exact path="/pokemon" component={Pokemon} />
      <Route exact path="/abut" component={Abut} />
      <Route exact path="/Contact" component={Contact} />
    </div>
  );
}

export default App;
