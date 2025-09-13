import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Products from './components/Products';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Drawings from './components/Drawings';
import AdminPanel from './components/admin/AdminPanel';
import Login from './Login';
import ProductDetail from './components/ProductDetail';
import WhatsAppButton from './components/WhatsAppButton';
import './components/WhatsAppButton.css';

function ProtectedRoute({ children }) {
  if (!localStorage.getItem('token')) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname === '/admin';
  const isLoginRoute = location.pathname === '/login';

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {!isAdminRoute && !isLoginRoute && <Navbar />}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/drawings" element={<Drawings />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<ProtectedRoute><AdminPanel /></ProtectedRoute>} />
        </Routes>
      </div>
      {!isAdminRoute && !isLoginRoute && <Footer />}
      {!isAdminRoute && !isLoginRoute && <WhatsAppButton />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
} 