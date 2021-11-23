import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Login from './pages/login';
import Packages from './pages/packages';
import SignUp from './pages/signup';
import Footer from './components/footer'
import Header from './components/BootstrapNavbar';
import {Provider} from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Logins from './components/auth/Login'
import Register from './components/auth/Register';
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

function App() {
  return (
    <Provider store={store}>
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/about">
          <About />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        {/* <Route path="/login">
          <Login />
        </Route> */}
        <Route exact path="/login" component={Logins} />
        <Route exact path="/register" component={Register} />
        <Route path="/packages">
          <Packages />
        </Route>
        {/* <Route path="/signup">
          <SignUp />
        </Route> */}
        <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
      </BrowserRouter>
      <Footer/>
      <Header/>
    </div>
    </Provider>

  );
}
export default App;