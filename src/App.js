import './App.css';
import Navbar from './component/Navbar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Portfolios from './pages/Portfolios';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact to path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/portfolios' component={Portfolios} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
