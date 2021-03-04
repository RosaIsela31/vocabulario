import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Form from "./blocks/Form";
import Mock from "./blocks/Mock";
import "./App.css";

function App() {
  return (
    <BrowserRouter className="App">
      <Switch>
        <Route exact path="/" component={Form} />
        <Route exact path="/mock" component={Mock} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
