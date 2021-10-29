import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Login from './pages/login';
import Packages from './pages/packages';
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
      </BrowserRouter>
    </div>

  );
}
export default App;