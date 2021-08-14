import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'

// This is Lazy Component
const About = lazy(() => import('./About/About'));
const Contact = lazy(() => import('./Contact/Contact'));
const Portfolio = lazy(() => import('./Portfolio/Portfolio'));
const Resume = lazy(() => import('./Resume/Resume'));


function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
          <Header/>
          <div className='background'>
          <Switch>
          <Route path='/About' component={About } />
          <Route path='/Contact' component={Contact } />
          <Route path='/Resume' component={Resume } />
          <Route path='/' component={Portfolio } />
        </Switch>
          </div>
          <Footer/>
      </Suspense>
    </Router> 
  );
}

export default App;
