import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home.jsx';
import "./index.css"
import Footer from "./footer.jsx"
import Header from "./header.jsx"
import 'preline/preline.js';
import 'tw-elements';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Home />
    <Footer />
  </React.StrictMode>
);