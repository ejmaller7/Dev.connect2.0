import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import './styles/App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () =>
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Routes>
          <Route exact path='/' Component={Landing} />
        </Routes>
        <section className='container'>
          <Routes>
            <Route exact path='/register' Component={Register} />
            <Route exact path='/login' Component={Login} />
          </Routes>
        </section>
      </Fragment>
    </Router>
  </Provider>
export default App;