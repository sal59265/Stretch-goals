import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Injury from './components/Injury';
import Stretch from './components/Stretch';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  const [bodyParts, setBodyparts] = useState([]);
  const [injuries, setInjuries] = useState([]);

  const getBodyParts = async () => {
    const response = await axios.get('http://localhost:3001/parts');
    console.log(response);
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
        <Route
          exact
          path="/"
          component={(props) => <Home {...props} parts={bodyParts} />}
        />
        <Route exact path="/About" component={About} />
        <Route
          exact
          path="/Injuries"
          component={(props) => <Injury {...props} injuries={injuries} />}
        />
        <Route exact path="/Stretches" component={Stretch} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
