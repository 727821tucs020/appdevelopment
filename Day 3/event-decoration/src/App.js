import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Register from './pages/register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Login/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
