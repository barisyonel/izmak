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
      height: 80,
      boxShadow: '0 2px 12px #f1c40f22',
      position: 'sticky',
      top: 0,
      zIndex: 10,
    }}>
      <div style={{ width: '100%', display: 'flex', alignItems: 'center', height: '100%', padding: '0 32px' }}>
        {/* Sol: Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 0, cursor: 'pointer', flex: '0 0 auto' }} onClick={() => { navigate('/'); closeMenu(); }}>
          <img src={logo} alt="IZMAK Logo" style={{ width: 200, maxWidth: 200, minWidth: 100, height: 'auto', minHeight: 40, maxHeight: 75, display: 'block', objectFit: 'contain' }} />
        </div>
        {/* Orta: Menü */}
        <div className="navbar-links" style={{ display: 'flex', gap: 36, alignItems: 'center', position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 0, height: '100%' }}>
          <NavLink to="/" onClick={closeMenu} style={({ isActive }) => ({ color: isActive ? 'var(--gold-accent)' : 'var(--chrome-primary)', textDecoration: 'none', fontWeight: 700, fontSize: 18, padding: '8px 0', transition: 'all 0.2s' })}>Anasayfa</NavLink>
          <NavLink to="/products" onClick={closeMenu} style={({ isActive }) => ({ color: isActive ? 'var(--gold-accent)' : 'var(--chrome-primary)', textDecoration: 'none', fontWeight: 700, fontSize: 18, padding: '8px 0', transition: 'all 0.2s' })}>Üretim</NavLink>
          <div className="navbar-dropdown">
            <span className="navbar-dropdown-label">Hizmetlerimiz</span>
            <div className="navbar-dropdown-menu">
              <NavLink to="/products" onClick={closeMenu} className="navbar-dropdown-item">Makine Yedek Parça</NavLink>
              <NavLink to="/products" onClick={closeMenu} className="navbar-dropdown-item">Kalıp İmalatı</NavLink>
              <NavLink to="/products" onClick={closeMenu} className="navbar-dropdown-item">Özel Tasarım</NavLink>
              <a href="tel:+905321347819" className="navbar-dropdown-item">Teknik Destek</a>
            </div>
          </div>
          <NavLink to="/gallery" onClick={closeMenu} style={({ isActive }) => ({ color: isActive ? 'var(--gold-accent)' : 'var(--chrome-primary)', textDecoration: 'none', fontWeight: 700, fontSize: 18, padding: '8px 0', transition: 'all 0.2s' })}>Galeri</NavLink>
          <NavLink to="/drawings" onClick={closeMenu} style={({ isActive }) => ({ color: isActive ? 'var(--gold-accent)' : 'var(--chrome-primary)', textDecoration: 'none', fontWeight: 700, fontSize: 18, padding: '8px 0', transition: 'all 0.2s' })}>Proje Çizimleri</NavLink>
          <NavLink to="/about" onClick={closeMenu} style={({ isActive }) => ({ color: isActive ? 'var(--gold-accent)' : 'var(--chrome-primary)', textDecoration: 'none', fontWeight: 700, fontSize: 18, padding: '8px 0', transition: 'all 0.2s' })}>Hakkımızda</NavLink>
          <NavLink to="/contact" onClick={closeMenu} style={({ isActive }) => ({ color: isActive ? 'var(--gold-accent)' : 'var(--chrome-primary)', textDecoration: 'none', fontWeight: 700, fontSize: 18, padding: '8px 0', transition: 'all 0.2s' })}>İletişim</NavLink>
        </div>
        {/* Sağ: Giriş/Panel/Çıkış Butonları */}
        <div style={{ display: 'flex', gap: 16, alignItems: 'center', minWidth: 120, position: 'absolute', right: 32, top: 0, height: '100%', justifyContent: 'flex-end', flex: '0 0 auto' }}>
          {isAdmin ? (
            <>
              <button onClick={() => navigate('/admin')} className="navbar-panel-btn">
                Panel
              </button>
              <button onClick={handleLogout} className="navbar-logout-btn">
                Çıkış
              </button>
            </>
          ) : null}
        </div>
        {/* Mobil Hamburger */}
        <button className="navbar-hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', background: 'none', border: 'none', color: 'var(--gold-accent)', fontSize: 32, marginLeft: 16, cursor: 'pointer' }}>
          &#9776;
        </button>
      </div>
      {/* Mobil Menü */}
      {menuOpen && (
        <div className="navbar-mobile-menu" style={{ background: 'linear-gradient(90deg, #f6f7fb 0%, #e0e5ec 60%, #f1c40f 100%)', position: 'absolute', top: 72, left: 0, width: '100%', boxShadow: '0 2px 8px #f1c40f22', display: 'flex', flexDirection: 'column', gap: 18, padding: 24, zIndex: 100 }}>
          <NavLink to="/" onClick={closeMenu} style={({ isActive }) => ({ color: isActive ? 'var(--gold-accent)' : 'var(--chrome-primary)', textDecoration: 'none', fontWeight: 'bold', fontSize: 20 })}>Anasayfa</NavLink>
          <NavLink to="/products" onClick={closeMenu} style={({ isActive }) => ({ color: isActive ? 'var(--gold-accent)' : 'var(--chrome-primary)', textDecoration: 'none', fontSize: 19 })}>Üretim</NavLink>
          <NavLink to="/gallery" onClick={closeMenu} style={({ isActive }) => ({ color: isActive ? 'var(--gold-accent)' : 'var(--chrome-primary)', textDecoration: 'none', fontSize: 19 })}>Galeri</NavLink>
          <NavLink to="/drawings" onClick={closeMenu} style={({ isActive }) => ({ color: isActive ? 'var(--gold-accent)' : 'var(--chrome-primary)', textDecoration: 'none', fontSize: 19 })}>Proje Çizimleri</NavLink>
          <NavLink to="/about" onClick={closeMenu} style={({ isActive }) => ({ color: isActive ? 'var(--gold-accent)' : 'var(--chrome-primary)', textDecoration: 'none', fontSize: 19 })}>Hakkımızda</NavLink>
          <NavLink to="/contact" onClick={closeMenu} style={({ isActive }) => ({ color: isActive ? 'var(--gold-accent)' : 'var(--chrome-primary)', textDecoration: 'none', fontSize: 19 })}>İletişim</NavLink>
          {isAdmin && <NavLink to="/admin" onClick={closeMenu} style={({ isActive }) => ({ color: isActive ? 'var(--gold-accent)' : 'var(--chrome-primary)', textDecoration: 'none', fontWeight: 'bold', fontSize: 18 })}>Panel</NavLink>}
          {isAdmin && <button onClick={() => { handleLogout(); closeMenu(); }} style={{ background: 'var(--gold-gradient)', color: 'var(--chrome-primary)', border: 'none', borderRadius: 6, padding: '10px 22px', cursor: 'pointer', fontWeight: 'bold', fontSize: 16, marginTop: 8 }}>Çıkış</button>}
        </div>
      )}
      {/* Responsive CSS */}
      <style>{`
        .main-navbar { 
          border-bottom: 2px solid var(--gold-accent); 
        }
        @media (max-width: 900px) {
          .navbar-links { display: none !important; }
          .navbar-hamburger { display: block !important; }
          .navbar-panel-btn, .navbar-logout-btn {
            display: block !important;
            width: 100% !important;
            margin: 0 0 10px 0 !important;
            font-size: 18px !important;
            padding: 12px 0 !important;
            border-radius: 10px !important;
            box-shadow: 0 2px 8px #f1c40f44 !important;
          }
          .navbar-logout-btn {
            margin-bottom: 0 !important;
          }
          .navbar-panel-btn, .navbar-logout-btn {
            background: var(--gold-gradient) !important;
            color: var(--chrome-primary) !important;
            border: none !important;
            font-weight: 700 !important;
          }
          .navbar-panel-btn:hover, .navbar-logout-btn:hover {
            background: var(--gold-accent) !important;
            color: #fff !important;
          }
        }
        @media (min-width: 901px) {
          .navbar-mobile-menu { display: none !important; }
          .navbar-panel-btn, .navbar-logout-btn {
            display: inline-block !important;
            width: auto !important;
            margin: 0 8px 0 0 !important;
            font-size: 16px !important;
            padding: 10px 22px !important;
            border-radius: 8px !important;
          }
        }
      `}</style>
    </nav>
  );
} 