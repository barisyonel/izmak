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
          <div className="social-section">
            <h5 className="social-title">Sosyal Medya</h5>
            <nav className="social-links" aria-label="Sosyal Medya">
              <a href="https://www.instagram.com/izmirmakinakalip?igsh=cGcxYmZzb2JyZDU=" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
                <span>Instagram</span>
              </a>
            </nav>
          </div>
        </section>

        {/* Hızlı Linkler */}
        <nav className="footer-section" aria-labelledby="footer-links-title">
          <h4 className="footer-subtitle" id="footer-links-title">Hızlı Linkler</h4>
          <ul className="footer-links">
            <li><a href="/" className="footer-link">Ana Sayfa</a></li>
            <li><a href="/services" className="footer-link">Hizmetlerimiz</a></li>
            <li><a href="/products" className="footer-link">Ürünlerimiz</a></li>
            <li><a href="/gallery" className="footer-link">Galeri</a></li>
            <li><a href="/drawings" className="footer-link">Proje Çizimleri</a></li>
            <li><a href="/about" className="footer-link">Hakkımızda</a></li>
            <li><a href="/blog" className="footer-link">Blog</a></li>
            <li><a href="/contact" className="footer-link">İletişim</a></li>
            <li><a href="/privacy-policy" className="footer-link">Gizlilik Politikası</a></li>
          </ul>
        </nav>

        {/* Hizmetlerimiz */}
        <nav className="footer-section" aria-labelledby="footer-services-title">
          <h4 className="footer-subtitle" id="footer-services-title">Hizmetlerimiz</h4>
          <ul className="footer-links">
            <li><a href="/services" className="footer-link">Makine Yedek Parça</a></li>
            <li><a href="/services" className="footer-link">Kalıp İmalatı</a></li>
            <li><a href="/services" className="footer-link">CNC İşleme</a></li>
            <li><a href="/services" className="footer-link">CAD/CAM Hizmetleri</a></li>
            <li><a href="/services" className="footer-link">Özel Tasarım</a></li>
            <li><a href="/services" className="footer-link">Torna İşleri</a></li>
            <li><a href="tel:+905321347819" className="footer-link">Teknik Destek</a></li>
          </ul>
        </nav>

        {/* İletişim Bilgileri */}
        <address className="footer-section" aria-labelledby="footer-contact-title">
          <h4 className="footer-subtitle" id="footer-contact-title">İletişim</h4>
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>722/5 Sk No:2, Buca, İzmir</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>+90-532-134-78-19</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>info@izmak.com</span>
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
          <div className="footer-bottom-left">
            <small>&copy; {currentYear} İZMAK Makine Yedek Parça & Kalıp İmalatı. Tüm hakları saklıdır.</small>
            <nav className="footer-bottom-links" aria-label="Alt Linkler">
              <a href="/privacy-policy" className="footer-bottom-link">Gizlilik Politikası</a>
              <a href="/terms" className="footer-bottom-link">Kullanım Şartları</a>
            </nav>
          </div>
          <div className="footer-bottom-right">
            <div className="designer-credit">
              <span className="designer-label">Web Tasarım:</span>
              <a href="https://bariscanyonel.com" target="_blank" rel="noopener noreferrer" className="designer-link">
                <i className="fas fa-code"></i>
                Barış Can Yönel
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 