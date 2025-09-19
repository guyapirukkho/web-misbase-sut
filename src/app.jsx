import { useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './Home.jsx';
import Footer from "./footer.jsx";
import Header from "./header.jsx";
import Login from './login.jsx';
import Payment from "./payment.jsx";
import Light from "./light.jsx";
import Repass from "./repass.jsx";
import "./app.css"
import Checkprice from "./checkprice.jsx";
import Acc from "./acc.jsx";
import UserPage from './user.jsx';
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {isLoggedIn && <Header onLogout={() => setIsLoggedIn(false)} />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Login onLoginSuccess={() => setIsLoggedIn(true)} />} />
          <Route path="/repass" element={<Repass onResetRequest={() => console.log("Reset requested")} />} />

          <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/" />} />
          <Route path="/light" element={isLoggedIn ? <Light /> : <Navigate to="/" />} />
          <Route path="/payment" element={isLoggedIn ? <Payment /> : <Navigate to="/" />} />
          <Route path="/checkprice" element={isLoggedIn ? <Checkprice /> : <Navigate to="/" />} />
          <Route path="/acc" element={isLoggedIn ? <Acc /> : <Navigate to="/" />} />
          <Route path="/user" element={isLoggedIn ? <UserPage /> : <Navigate to="/" />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>

      {isLoggedIn && <Footer />}
    </div>
  );
}
