import React from 'react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        {/* Şirket Bilgileri */}
        <section className="footer-section" aria-labelledby="footer-company-title">
          <h3 className="footer-title" id="footer-company-title">İZMAK</h3>
          <p className="footer-description">
            Makine yedek parça ve kalıp imalatında uzmanlaşmış, kaliteli hizmet anlayışıyla 
            müşteri memnuniyetini ön planda tutan güvenilir iş ortağınız.
          </p>
          <nav className="social-links" aria-label="Sosyal Medya">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </nav>
        </section>

        {/* Hızlı Linkler */}
        <nav className="footer-section" aria-labelledby="footer-links-title">
          <h4 className="footer-subtitle" id="footer-links-title">Hızlı Linkler</h4>
          <ul className="footer-links">
            <li><a href="/" className="footer-link">Ana Sayfa</a></li>
            <li><a href="/products" className="footer-link">Ürünlerimiz</a></li>
            <li><a href="/about" className="footer-link">Hakkımızda</a></li>
            <li><a href="/contact" className="footer-link">İletişim</a></li>
          </ul>
        </nav>

        {/* Hizmetlerimiz */}
        <nav className="footer-section" aria-labelledby="footer-services-title">
          <h4 className="footer-subtitle" id="footer-services-title">Hizmetlerimiz</h4>
          <ul className="footer-links">
            <li><a href="/products" className="footer-link">Makine Yedek Parça</a></li>
            <li><a href="/products" className="footer-link">Kalıp İmalatı</a></li>
            <li><a href="/products" className="footer-link">Özel Tasarım</a></li>
            <li><a href="tel:+905321347819" className="footer-link">Teknik Destek</a></li>
          </ul>
        </nav>

        {/* İletişim Bilgileri */}
        <address className="footer-section" aria-labelledby="footer-contact-title">
          <h4 className="footer-subtitle" id="footer-contact-title">İletişim</h4>
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Organize Sanayi Bölgesi, 1. Cadde No: 15, İstanbul</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>+90 (212) 555 0123</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>info@izmak.com.tr</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-clock"></i>
              <span>Pzt - Cmt: 08:00 - 18:00</span>
            </div>
          </div>
        </address>
      </div>

      {/* Alt Footer */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <small>&copy; {currentYear} İZMAK Makine Yedek Parça & Kalıp İmalatı. Tüm hakları saklıdır.</small>
          <nav className="footer-bottom-links" aria-label="Alt Linkler">
            <a href="/privacy" className="footer-bottom-link">Gizlilik Politikası</a>
            <a href="/terms" className="footer-bottom-link">Kullanım Şartları</a>
          </nav>
        </div>
      </div>
    </footer>
  );
} 