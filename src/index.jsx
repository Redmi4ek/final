import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Weather from './components/screen/Weather/Weather';
import Home from './components/screen/Home/Home';
import './index.css'
import Layout from './components/layout/Layout';

ReactDOM.render(
    <React.StrictMode>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/weather" element={<Weather />} />
          </Routes>
        </Layout>
      </Router>
    </React.StrictMode>,
document.getElementById('root'));

