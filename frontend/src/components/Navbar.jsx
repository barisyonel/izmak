import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './NavbarDropdown.css';
import logo from '../logo.png';

export default function Navbar() {
  const isAdmin = !!localStorage.getItem('token');
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="main-navbar" style={{ 
      background: 'linear-gradient(90deg, #f6f7fb 0%, #e0e5ec 60%, #f1c40f 100%)',
      color: 'var(--chrome-primary)',
      height: 'auto',
      minHeight: 80,
      boxShadow: '0 2px 12px #f1c40f22',
      position: 'sticky',
      top: 0,
      zIndex: 10,
      width: '100%',
      overflow: 'visible'
    }}>
      <div style={{ 
        width: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        height: '100%', 
        padding: '0 clamp(16px, 3vw, 32px)',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        {/* Sol: Logo */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 0, 
          cursor: 'pointer', 
          flex: '0 0 auto',
          minWidth: 'fit-content'
        }} onClick={() => { navigate('/'); closeMenu(); }}>
          <img 
            src={logo} 
            alt="IZMAK Logo" 
            style={{ 
              width: 'clamp(120px, 20vw, 200px)', 
              height: 'auto', 
              minHeight: 40, 
              maxHeight: 75, 
              display: 'block', 
              objectFit: 'contain' 
            }} 
          />
        </div>
        
        {/* Orta: Menü - Desktop */}
        <div className="navbar-links" style={{ 
          display: 'flex', 
          gap: 'clamp(20px, 3vw, 36px)', 
          alignItems: 'center', 
          position: 'absolute', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          top: 0, 
          height: '100%',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <NavLink 
            to="/" 
            onClick={closeMenu} 
            style={({ isActive }) => ({ 
              color: isActive ? 'var(--gold-accent)' : 'var(--chrome-primary)', 
              textDecoration: 'none', 
              fontWeight: 700, 
              fontSize: 'clamp(14px, 2vw, 18px)', 
              padding: '8px 0', 
              transition: 'all 0.2s',
              whiteSpace: 'nowrap'
            })}
          >
            Anasayfa
          </NavLink>
          <NavLink 
            to="/products" 
            onClick={closeMenu} 
            style={({ isActive }) => ({ 
              color: isActive ? 'var(--gold-accent)' : 'var(--chrome-primary)', 
              textDecoration: 'none', 
              fontWeight: 700, 
              fontSize: 'clamp(14px, 2vw, 18px)', 
              padding: '8px 0', 
              transition: 'all 0.2s',
              whiteSpace: 'nowrap'
            })}
          >
            Üretim
          </NavLink>
          <div className="navbar-dropdown">
            <span className="navbar-dropdown-label">Hizmetlerimiz</span>
            <div className="navbar-dropdown-menu">
              <NavLink to="/products" onClick={closeMenu} className="navbar-dropdown-item">Makine Yedek Parça</NavLink>
              <NavLink to="/products" onClick={closeMenu} className="navbar-dropdown-item">Kalıp İmalatı</NavLink>
              <NavLink to="/products" onClick={closeMenu} className="navbar-dropdown-item">Özel Tasarım</NavLink>
              <a href="tel:+905321347819" className="navbar-dropdown-item">Teknik Destek</a>
            </div>
          </div>
          <NavLink 
            to="/gallery" 
            onClick={closeMenu} 
            style={({ isActive }) => ({ 
              color: isActive ? 'var(--gold-accent)' : 'var(--chrome-primary)', 
              textDecoration: 'none', 
              fontWeight: 700, 
              fontSize: 'clamp(14px, 2vw, 18px)', 
              padding: '8px 0', 
              transition: 'all 0.2s',
              whiteSpace: 'nowrap'
            })}
          >
            Galeri
          </NavLink>
          <NavLink 
            to="/drawings" 
            onClick={closeMenu} 
            style={({ isActive }) => ({ 
              color: isActive ? 'var(--gold-accent)' : 'var(--chrome-primary)', 
              textDecoration: 'none', 
              fontWeight: 700, 
              fontSize: 'clamp(14px, 2vw, 18px)', 
              padding: '8px 0', 
              transition: 'all 0.2s',
              whiteSpace: 'nowrap'
            })}
          >
            Proje Çizimleri
          </NavLink>
          <NavLink 
            to="/about" 
            onClick={closeMenu} 
            style={({ isActive }) => ({ 
              color: isActive ? 'var(--gold-accent)' : 'var(--chrome-primary)', 
              textDecoration: 'none', 
              fontWeight: 700, 
              fontSize: 'clamp(14px, 2vw, 18px)', 
              padding: '8px 0', 
              transition: 'all 0.2s',
              whiteSpace: 'nowrap'
            })}
          >
            Hakkımızda
          </NavLink>
          <NavLink 
            to="/contact" 
            onClick={closeMenu} 
            style={({ isActive }) => ({ 
              color: isActive ? 'var(--gold-accent)' : 'var(--chrome-primary)', 
              textDecoration: 'none', 
              fontWeight: 700, 
              fontSize: 'clamp(14px, 2vw, 18px)', 
              padding: '8px 0', 
              transition: 'all 0.2s',
              whiteSpace: 'nowrap'
            })}
          >
            İletişim
          </NavLink>
        </div>
        
        {/* Sağ: Giriş/Panel/Çıkış Butonları */}
        <div style={{ 
          display: 'flex', 
          gap: 'clamp(8px, 2vw, 16px)', 
          alignItems: 'center', 
          minWidth: 'fit-content', 
          position: 'absolute', 
          right: 'clamp(16px, 3vw, 32px)', 
          top: 0, 
          height: '100%', 
          justifyContent: 'flex-end', 
          flex: '0 0 auto' 
        }}>
          {isAdmin ? (
            <>
              <button 
                onClick={() => navigate('/admin')} 
                className="navbar-panel-btn"
                style={{
                  background: 'var(--gold-gradient)',
                  color: 'var(--chrome-primary)',
                  border: 'none',
                  borderRadius: '8px',
                  padding: 'clamp(8px, 2vw, 10px) clamp(16px, 3vw, 22px)',
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 2px 8px #f1c40f44'
                }}
              >
                Panel
              </button>
              <button 
                onClick={handleLogout} 
                className="navbar-logout-btn"
                style={{
                  background: 'var(--gold-gradient)',
                  color: 'var(--chrome-primary)',
                  border: 'none',
                  borderRadius: '8px',
                  padding: 'clamp(8px, 2vw, 10px) clamp(16px, 3vw, 22px)',
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 2px 8px #f1c40f44'
                }}
              >
                Çıkış
              </button>
            </>
          ) : null}
        </div>
        
        {/* Mobil Hamburger */}
        <button 
          className="navbar-hamburger" 
          onClick={() => setMenuOpen(!menuOpen)} 
          style={{ 
            display: 'none', 
            background: 'none', 
            border: 'none', 
            color: 'var(--gold-accent)', 
            fontSize: 'clamp(24px, 5vw, 32px)', 
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '4px',
            transition: 'all 0.3s ease',
            zIndex: 1001
          }}
          aria-label="Menüyü aç/kapat"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
      
      {/* Mobil Menü */}
      {menuOpen && (
        <div className="navbar-mobile-menu" style={{ 
          background: 'linear-gradient(90deg, #f6f7fb 0%, #e0e5ec 60%, #f1c40f 100%)', 
          position: 'absolute', 
          top: '100%', 
          left: 0, 
          width: '100%', 
          boxShadow: '0 2px 8px #f1c40f22', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 'clamp(12px, 3vw, 18px)', 
          padding: 'clamp(16px, 4vw, 24px)', 
          zIndex: 1000,
          borderTop: '2px solid var(--gold-accent)',
          animation: 'slideDown 0.3s ease-out'
        }}>
          <NavLink 
            to="/" 
            onClick={closeMenu} 
            style={({ isActive }) => ({ 
              color: isActive ? 'var(--gold-accent)' : 'var(--chrome-primary)', 
              textDecoration: 'none', 
              fontWeight: 'bold', 
              fontSize: 'clamp(16px, 4vw, 20px)',
              padding: '12px 0',
              borderBottom: '1px solid rgba(243, 156, 18, 0.2)'
            })}
          >
            Anasayfa
          </NavLink>
          <NavLink 
            to="/products" 
            onClick={closeMenu} 
            style={({ isActive }) => ({ 
              color: isActive ? 'var(--gold-accent)' : 'var(--chrome-primary)', 
              textDecoration: 'none', 
              fontSize: 'clamp(15px, 3.5vw, 19px)',
              padding: '12px 0',
              borderBottom: '1px solid rgba(243, 156, 18, 0.2)'
            })}
          >
            Üretim
          </NavLink>
          <NavLink 
            to="/gallery" 
            onClick={closeMenu} 
            style={({ isActive }) => ({ 
              color: isActive ? 'var(--gold-accent)' : 'var(--chrome-primary)', 
              textDecoration: 'none', 
              fontSize: 'clamp(15px, 3.5vw, 19px)',
              padding: '12px 0',
              borderBottom: '1px solid rgba(243, 156, 18, 0.2)'
            })}
          >
            Galeri
          </NavLink>
          <NavLink 
            to="/drawings" 
            onClick={closeMenu} 
            style={({ isActive }) => ({ 
              color: isActive ? 'var(--gold-accent)' : 'var(--chrome-primary)', 
              textDecoration: 'none', 
              fontSize: 'clamp(15px, 3.5vw, 19px)',
              padding: '12px 0',
              borderBottom: '1px solid rgba(243, 156, 18, 0.2)'
            })}
          >
            Proje Çizimleri
          </NavLink>
          <NavLink 
            to="/about" 
            onClick={closeMenu} 
            style={({ isActive }) => ({ 
              color: isActive ? 'var(--gold-accent)' : 'var(--chrome-primary)', 
              textDecoration: 'none', 
              fontSize: 'clamp(15px, 3.5vw, 19px)',
              padding: '12px 0',
              borderBottom: '1px solid rgba(243, 156, 18, 0.2)'
            })}
          >
            Hakkımızda
          </NavLink>
          <NavLink 
            to="/contact" 
            onClick={closeMenu} 
            style={({ isActive }) => ({ 
              color: isActive ? 'var(--gold-accent)' : 'var(--chrome-primary)', 
              textDecoration: 'none', 
              fontSize: 'clamp(15px, 3.5vw, 19px)',
              padding: '12px 0',
              borderBottom: '1px solid rgba(243, 156, 18, 0.2)'
            })}
          >
            İletişim
          </NavLink>
          {isAdmin && (
            <NavLink 
              to="/admin" 
              onClick={closeMenu} 
              style={({ isActive }) => ({ 
                color: isActive ? 'var(--gold-accent)' : 'var(--chrome-primary)', 
                textDecoration: 'none', 
                fontWeight: 'bold', 
                fontSize: 'clamp(15px, 3.5vw, 18px)',
                padding: '12px 0',
                borderBottom: '1px solid rgba(243, 156, 18, 0.2)'
              })}
            >
              Panel
            </NavLink>
          )}
          {isAdmin && (
            <button 
              onClick={() => { handleLogout(); closeMenu(); }} 
              style={{ 
                background: 'var(--gold-gradient)', 
                color: 'var(--chrome-primary)', 
                border: 'none', 
                borderRadius: '10px', 
                padding: 'clamp(10px, 2.5vw, 12px) clamp(20px, 4vw, 22px)', 
                cursor: 'pointer', 
                fontWeight: 'bold', 
                fontSize: 'clamp(14px, 3vw, 16px)', 
                marginTop: 'clamp(8px, 2vw, 8px)',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px #f1c40f44'
              }}
            >
              Çıkış
            </button>
          )}
        </div>
      )}
      
      {/* Responsive CSS */}
      <style>{`
        .main-navbar { 
          border-bottom: 2px solid var(--gold-accent); 
        }
        
        @keyframes slideDown {
          from { 
            opacity: 0; 
            transform: translateY(-10px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @media (max-width: 900px) {
          .navbar-links { 
            display: none !important; 
          }
          .navbar-hamburger { 
            display: block !important; 
          }
          .navbar-panel-btn, .navbar-logout-btn {
            display: none !important;
          }
          .navbar-mobile-menu {
            position: absolute !important;
            top: 100% !important;
            left: 0 !important;
            width: 100% !important;
            z-index: 1000 !important;
            background: linear-gradient(90deg, #f6f7fb 0%, #e0e5ec 60%, #f1c40f 100%) !important;
            box-shadow: 0 4px 12px rgba(243, 156, 18, 0.2) !important;
            border-top: 2px solid var(--gold-accent) !important;
          }
        }
        
        @media (min-width: 901px) {
          .navbar-mobile-menu { 
            display: none !important; 
          }
          .navbar-hamburger {
            display: none !important;
          }
        }
        
        .navbar-hamburger:hover {
          background: rgba(243, 156, 18, 0.1) !important;
          transform: scale(1.1) !important;
        }
        
        .navbar-mobile-menu a:hover {
          background: rgba(243, 156, 18, 0.1) !important;
          transform: translateX(8px) !important;
        }
        
        @media (max-width: 600px) {
          .main-navbar > div {
            padding: 0 12px !important;
          }
          .navbar-mobile-menu {
            padding: 16px 12px !important;
          }
        }
        
        @media (max-width: 480px) {
          .main-navbar > div {
            padding: 0 8px !important;
          }
          .navbar-mobile-menu {
            padding: 12px 8px !important;
          }
        }
      `}</style>
    </nav>
  );
}