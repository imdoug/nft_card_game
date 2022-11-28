import React from 'react';
import ReactDOM from 'react-dom/client';
import  { OnboardModal } from './components'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home , CreateBattle, JoinBattle, Battle, Battleground } from './page'
import { GlobalContextProvider } from './context';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GlobalContextProvider>
      <OnboardModal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/battle/:battleName" element={<Battle />} />
        <Route path="/create-battle" element={<CreateBattle />} />
        <Route path="/battleground" element={<Battleground />} />
        <Route path="/join-battle" element={<JoinBattle />} />
      </Routes>
    </GlobalContextProvider>
  </BrowserRouter>,
);
