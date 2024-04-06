import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MockListData from './assets/new.json';
import DetailCard from './components/DetailCard.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/:date/:time/:id" element={<DetailCard item={MockListData} />} />
        </Routes>
      </Router>

  </React.StrictMode>,
)
