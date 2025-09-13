import React, { useState } from 'react';

const MENU_OPTIONS = [
  { key: 'dashboard', label: 'Dashboard', icon: '📊' },
  { key: 'products', label: 'Üretim Alanları', icon: '🏭' },
  { key: 'add', label: 'Ürün Ekle', icon: '➕' },
  { key: 'gallery', label: 'Galeri', icon: '🖼️' },
  { key: 'drawings', label: 'Proje Çizimleri', icon: '📐' },
  { key: 'profile', label: 'Profil', icon: '👤' },
];

export default function Sidebar({ activeTab, setActiveTab }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          zIndex: 1001,
          background: '#2c3e50',
          border: 'none',
          borderRadius: '8px',
          padding: '12px',
          color: '#fff',
          fontSize: '20px',
          cursor: 'pointer',
          display: 'none'
        }}
        className="mobile-menu-toggle"
      >
        ☰
      </button>
      
      <aside 
        className={isMobileOpen ? 'open' : ''}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '280px',
          height: '100vh',
          background: 'linear-gradient(180deg, #2c3e50 0%, #34495e 100%)',
          boxShadow: '2px 0 10px rgba(0,0,0,0.1)',
          zIndex: 1000,
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
      {/* Logo Section */}
      <div style={{
        padding: '20px',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        textAlign: 'center',
        flexShrink: 0
      }}>
        <h1 style={{
          color: '#f1c40f',
          fontSize: '24px',
          fontWeight: '700',
          margin: '0 0 4px 0',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }}>
          IZMAK
        </h1>
        <p style={{
          color: 'rgba(255,255,255,0.7)',
          fontSize: '12px',
          margin: 0,
          fontWeight: '500'
        }}>
          Yönetim Paneli
        </p>
      </div>

      {/* Navigation Menu */}
      <nav style={{ 
        padding: '20px 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        flex: 1,
        overflowY: 'auto'
      }}>
        {MENU_OPTIONS.map((option) => (
          <button
            key={option.key}
            onClick={() => setActiveTab(option.key)}
            style={{
              width: '100%',
              padding: '16px 24px',
              background: activeTab === option.key ? 'rgba(241,196,15,0.15)' : 'transparent',
              color: activeTab === option.key ? '#f1c40f' : '#ffffff',
              border: 'none',
              fontSize: '16px',
              fontWeight: activeTab === option.key ? '600' : '400',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textAlign: 'left',
              borderLeft: activeTab === option.key ? '4px solid #f1c40f' : '4px solid transparent',
              marginBottom: '4px',
              boxSizing: 'border-box'
            }}
            onMouseEnter={(e) => {
              if (activeTab !== option.key) {
                e.target.style.background = 'rgba(255,255,255,0.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== option.key) {
                e.target.style.background = 'transparent';
              }
            }}
          >
            <span style={{ fontSize: '20px', minWidth: '24px' }}>{option.icon}</span>
            <span>{option.label}</span>
          </button>
        ))}
      </nav>

      {/* Logout Button */}
      <div style={{
        padding: '20px',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        marginTop: 'auto',
        flexShrink: 0
      }}>
        <button
          onClick={handleLogout}
          style={{
            width: '100%',
            background: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
            border: 'none',
            borderRadius: '8px',
            padding: '14px 20px',
            color: '#fff',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 4px 12px rgba(231,76,60,0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
        >
          <span style={{ fontSize: '18px' }}>🚪</span>
          Çıkış Yap
        </button>
      </div>

      {/* Mobile Responsive */}
      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-toggle {
            display: block !important;
          }
          
          aside {
            transform: translateX(-100%);
            transition: transform 0.3s ease;
            width: 100% !important;
          }
          
          aside.open {
            transform: translateX(0);
          }
          
          nav {
            flex-direction: column !important;
            flex: 1 !important;
            overflow-y: auto !important;
          }
          
          nav button {
            width: 100% !important;
            margin-bottom: 8px !important;
          }
        }
        
        @media (min-width: 769px) {
          .mobile-menu-toggle {
            display: none !important;
          }
          
          aside {
            display: flex !important;
            flex-direction: column !important;
          }
          
          nav {
            display: flex !important;
            flex-direction: column !important;
            flex: 1 !important;
            overflow-y: auto !important;
          }
          
          nav button {
            width: 100% !important;
            margin-bottom: 4px !important;
          }
        }
      `}</style>
    </aside>
    </>
  );
} 