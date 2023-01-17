import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import io from 'socket.io-client';

import useToken from './useToken';

import Login from '../Login/Login';
import Layout from '../Layout/Layout';

const socket = io.connect('http://localhost:8000');

function App() {
  const { token, setToken } = useToken();
  
  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
