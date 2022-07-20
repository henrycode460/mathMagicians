import React from 'react';

import './style.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Quote from './components/Quote';

import Header from './components/Header';
import { Calculator } from './components/Calculator';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="container">

          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route index element={<Home />} />
            <Route path="/Calculator" element={<Calculator />} />
            <Route path="/Quote" element={<Quote />} />
          </Routes>

        </div>

      </>

    );
  }
}

export default App;
