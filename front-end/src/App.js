import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Login from './pages/login';
import Packages from './pages/packages';
import SignUp from './pages/signup';
import Footer from './components/footer'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/about">
          <About />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/packages">
          <Packages />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </BrowserRouter>
      <Footer/>
    </div>

  );
}
export default App;