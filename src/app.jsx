import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Home.jsx';
import Footer from "./footer.jsx";
import Header from "./header.jsx";
import Login from './login.jsx';
import Payment from "./payment.jsx";
import Light from "./light.jsx";
import Repass from "./repass.jsx";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <Login onLoginSuccess={() => setIsLoggedIn(true)} />;
  }

  return (
    <>
      <Header onLogout={() => setIsLoggedIn(false)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/light" element={<Light />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </>
  );
}
