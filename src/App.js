import './App.css';
import Navbar from './component/Navbar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
