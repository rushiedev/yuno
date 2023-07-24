import Header from './components/Header';
import './App.css';
import React from 'react';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import Project from './pages/Project';
// import Shiggy from './pages/Shiggy';
import style from './styles/main.module.css';
import NotFound from './pages/404';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Project = React.lazy(() => import('./pages/Project'));
const Shiggy = React.lazy(() => import('./pages/Shiggy'));

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <React.Suspense fallback={
          (
            <React.Fragment>
              <main className={style['profile-card']} style={{ display: 'flex' }}>
                <div style={{
                  marginTop: 'auto',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginBottom: 'auto',
                  fontSize: '50px',
                  fontWeight: '700'
                }}><FontAwesomeIcon icon={faCircleNotch} spin style={{ opacity: 0.8 }} /></div>
              </main>
            </React.Fragment>
          )
        }>
          <main className={style['profile-card']}>
            <Routes>
              <Route path='/' exact Component={Home} />
              <Route path='/about' Component={About} />
              <Route path='/projects' Component={Project} />
              <Route path='/shiggy' Component={Shiggy} />
              <Route path='*' Component={NotFound} />
            </Routes>
          </main>
        </React.Suspense>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
