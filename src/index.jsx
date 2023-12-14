import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/screen/Home/Home';
import './index.css'
import Layout from './components/layout/Layout';

ReactDOM.render(
<React.StrictMode>
    <Layout>
        <Home/>
    </Layout>
</React.StrictMode>,
document.getElementById('root'));

