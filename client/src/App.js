import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Injury from './components/Injury';
import Stretch from './components/Stretch';
import Footer from './components/Footer';
import About from './components/About';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Injuries" component={Injury} />
        <Route exact path="/Stretches" component={Stretch} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
