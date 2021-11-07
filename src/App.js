import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HealthProvider from "./context/HealthProvider";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";
import Header from "./pages/Shared/Header/Header";
function App() {
  return (
    <div className="App">
      <HealthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/service/:id">
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
        </Switch>
      </Router>
      </HealthProvider>
    
    </div>
  );
}

export default App;
