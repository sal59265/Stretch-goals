import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Injury from './components/Injury';
import InjuryDetail from './components/InjuryDetail';
import Nav from './components/Nav';
import Parts from './components/Parts';
import PartsDetail from './components/PartsDetail';
import Stretch from './components/Stretch';

function App() {
  const [bodyParts, setBodyparts] = useState([]);
  const [injuries, setInjuries] = useState([]);

  const getBodyParts = async () => {
    const response = await axios.get('http://localhost:3001/parts');
    setBodyparts(response.data);
  };

  useEffect(() => {
    getBodyParts();
  }, []);

  const getInjuries = async () => {
    const response = await axios.get('http://localhost:3001/injuries');
    setInjuries(response.data);
  };

  useEffect(() => {
    getInjuries();
  }, []);

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/parts"
          component={(props) => <Parts {...props} parts={bodyParts} />}
        />
        <Route
          path="/Parts/:id"
          component={(props) => <PartsDetail {...props} parts={bodyParts} />}
        />
        <Route exact path="/about" component={About} />
        <Route
          exact
          path="/injuries"
          component={(props) => <Injury {...props} injuries={injuries} />}
        />
        <Route
          path="/injuries/:id"
          component={(props) => <InjuryDetail {...props} injuries={injuries} />}
        />
        <Route exact path="/stretches" component={Stretch} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
