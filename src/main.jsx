import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home.jsx';
import "./index.css";
import Footer from "./footer.jsx";
import Header from "./header.jsx";
import 'preline/preline.js';
import 'tw-elements';
import "aos/dist/aos.css";
import Login from './login.jsx';
import Payment from "./payment.jsx";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? (
    <>
      <Header onLogout={() => setIsLoggedIn(false)}/>
      <Home />
      <Payment/> 
      <Footer />
    </>
  ) : (
    <Login onLoginSuccess={() => setIsLoggedIn(true)} />
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
