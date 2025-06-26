import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { NASAProvider } from './context/NASAContext';
import { NewsProvider } from './context/NewsContext';
import { AIContextProvider } from './context/AIContext';
import PrivateRoute from './components/routing/PrivateRoute';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import APOD from './pages/APOD';
import MarsRover from './pages/MarsRover';
import EPIC from './pages/EPIC';
import NeoWs from './pages/NeoWs';
import Search from './pages/Search';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import News from './pages/News';
import Educational from './pages/Educational';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <NASAProvider>
        <NewsProvider>
          <AIContextProvider>
            <div className="app">
              <Navbar />
              <div className="container">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/apod" element={<APOD />} />
                  <Route path="/mars-rover" element={<MarsRover />} />
                  <Route path="/epic" element={<EPIC />} />
                  <Route path="/neows" element={<NeoWs />} />
                  <Route path="/search" element={<Search />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/learn" element={<Educational />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
                </Routes>
              </div>
            </div>
          </AIContextProvider>
        </NewsProvider>
      </NASAProvider>
    </AuthProvider>
  );
}

export default App;