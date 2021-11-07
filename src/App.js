import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HealthProvider from "./context/HealthProvider";
import About from "./pages/About/About";
import Faq from "./pages/FAQ/Faq";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";
import Footer from "./pages/Shared/Footer/Footer";
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
            <Route path="/faq">
              <Faq></Faq>
            </Route>
            <Route path="/service/:id">
              <ServiceDetails></ServiceDetails>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </HealthProvider>
    </div>
  );
}

export default App;
