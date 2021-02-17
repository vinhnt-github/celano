import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { StyledGlobal } from './assets/styledGlobal/styledGlobal';
import Header from './components/ui/header/Header'

import MainRouter from './router/Main.Router'

import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <Router>
      <StyledGlobal />
      <Header />
      <main>
        <MainRouter />
      </main>
    </Router>
  );
}

export default App;
