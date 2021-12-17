import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
