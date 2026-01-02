import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Card from './components/Card.jsx'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    <Route path="/product/:id" element={<Card />} />
    </Routes>
  </BrowserRouter>,
)
