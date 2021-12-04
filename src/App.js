import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import HealthProvider from "./context/HealthProvider";
import About from "./pages/About/About";
import Faq from "./pages/FAQ/Faq";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";
import Footer from "./pages/Shared/Footer/Footer";
import Header from "./pages/Shared/Header/Header";
function App() {
  return (
    <div className="App">
     <AuthProvider>
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
            <PrivateRoute path="/service/:id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute path="/about">
              <About></About>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </HealthProvider>
     </AuthProvider>
    </div>
  );
}

export default App;
