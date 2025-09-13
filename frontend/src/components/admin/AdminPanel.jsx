import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Products from './Products';
import AddProduct from './AddProduct';
import Gallery from './Gallery';
import Drawings from './Drawings';
import Profile from './Profile';

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'products':
        return <Products />;
      case 'add':
        return <AddProduct />;
      case 'gallery':
        return <Gallery />;
      case 'drawings':
        return <Drawings />;
      case 'profile':
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#f8f9fa', 
      fontFamily: 'Inter, sans-serif',
      display: 'flex'
    }}>
      <Helmet>
        <title>Admin Paneli | IZMAK Makine Yedek Parça & Kalıp İmalatı</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="IZMAK yönetim paneli. Ürün, galeri, teklif ve iletişim talepleri yönetimi." />
      </Helmet>

      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main style={{ 
        flex: 1,
        padding: '30px',
        marginLeft: '280px', // Sidebar genişliği
        transition: 'margin-left 0.3s ease'
      }}>
        <style>{`
          @media (max-width: 768px) {
            main {
              margin-left: 0 !important;
              padding: 20px !important;
            }
          }
        `}</style>
        {renderContent()}
      </main>
    </div>
  );
} 