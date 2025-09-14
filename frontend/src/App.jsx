import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import WhatsAppButton from './components/WhatsAppButton';
import './components/WhatsAppButton.css';

// Lazy load components for better performance
const Products = lazy(() => import('./components/Products'));
const Services = lazy(() => import('./components/Services'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Gallery = lazy(() => import('./components/Gallery'));
const Drawings = lazy(() => import('./components/Drawings'));
const Blog = lazy(() => import('./components/Blog'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const AdminPanel = lazy(() => import('./components/admin/AdminPanel'));
const Login = lazy(() => import('./Login'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));

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
        <Suspense fallback={
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            minHeight: '50vh',
            fontSize: '18px',
            color: 'var(--steel-dark)'
          }}>
            Yükleniyor...
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/drawings" element={<Drawings />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<ProtectedRoute><AdminPanel /></ProtectedRoute>} />
          </Routes>
        </Suspense>
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