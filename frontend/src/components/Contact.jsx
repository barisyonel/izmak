import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
    console.log('Form data:', formData);
    alert('Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.');
    setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  };

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: 'var(--steel-light)', minHeight: '100vh', color: 'var(--chrome-primary)' }}>
      <Helmet>
        <title>İletişim | IZMAK Makine Yedek Parça & Kalıp İmalatı</title>
        <meta name="description" content="Makine yedek parça, kalıp üretimi veya CNC işleme projeleriniz için bizimle iletişime geçin. Uzman ekibimiz size en uygun çözümleri sunacaktır." />
        <meta property="og:title" content="İletişim | IZMAK Makine Yedek Parça & Kalıp İmalatı" />
        <meta property="og:description" content="Makine yedek parça, kalıp üretimi veya CNC işleme projeleriniz için bizimle iletişime geçin. Uzman ekibimiz size en uygun çözümleri sunacaktır." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://izmak.com/contact" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:site_name" content="IZMAK" />
        <meta property="og:locale" content="tr_TR" />
      </Helmet>
      {/* Hero Bölümü */}
      <section style={{ 
        padding: '120px 32px 80px', 
        textAlign: 'center', 
        background: 'var(--metallic-gradient)',
        borderBottom: '3px solid var(--gold-accent)'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h1 style={{ fontSize: 48, fontWeight: 700, marginBottom: 20, color: 'var(--gold-bright)' }}>İletişim</h1>
          <p style={{ fontSize: 20, lineHeight: 1.6, color: '#f3f3f3', maxWidth: 800, margin: '0 auto' }}>
            Makine yedek parça, kalıp üretimi veya CNC işleme projeleriniz için bizimle iletişime geçin. 
            Uzman ekibimiz size en uygun çözümleri sunacaktır.
          </p>
        </div>
      </section>

      {/* İletişim Bilgileri */}
      <section style={{ padding: '80px 32px', background: 'var(--steel-gradient)', color: 'var(--chrome-primary)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, textAlign: 'center', marginBottom: 60, color: 'var(--chrome-primary)' }}>İletişim Bilgileri</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40 }}>
            <div style={{ 
              textAlign: 'center', 
              padding: '40px 20px', 
              background: 'var(--steel-light)', 
              borderRadius: 12,
              border: '2px solid var(--steel-medium)',
              boxShadow: 'var(--shadow-steel)'
            }}>
              <div style={{ fontSize: 48, marginBottom: 20 }}>📞</div>
              <h3 style={{ fontSize: 22, fontWeight: 600, marginBottom: 15, color: 'var(--chrome-primary)' }}>Telefon</h3>
              <p style={{ fontSize: 18, color: 'var(--steel-dark)', marginBottom: 10 }}>
                <a href="tel:+905321347819" style={{ color: 'var(--gold-accent)', textDecoration: 'none', fontWeight: 600 }}>
                  0 (532) 134 78 19
                </a>
              </p>
              <p style={{ fontSize: 14, color: 'var(--steel-dark)' }}>Hafta içi: 08:00 - 18:00</p>
            </div>
            
            <div style={{ 
              textAlign: 'center', 
              padding: '40px 20px', 
              background: 'var(--steel-light)', 
              borderRadius: 12,
              border: '2px solid var(--steel-medium)',
              boxShadow: 'var(--shadow-steel)'
            }}>
              <div style={{ fontSize: 48, marginBottom: 20 }}>📧</div>
              <h3 style={{ fontSize: 22, fontWeight: 600, marginBottom: 15, color: 'var(--chrome-primary)' }}>E-posta</h3>
              <p style={{ fontSize: 18, color: 'var(--steel-dark)', marginBottom: 10 }}>
                <a href="mailto:info@izmak.com" style={{ color: 'var(--gold-accent)', textDecoration: 'none', fontWeight: 600 }}>
                  info@izmak.com
                </a>
              </p>
              <p style={{ fontSize: 14, color: 'var(--steel-dark)' }}>24 saat içinde yanıt</p>
            </div>
            
            <div style={{ 
              textAlign: 'center', 
              padding: '40px 20px', 
              background: 'var(--steel-light)', 
              borderRadius: 12,
              border: '2px solid var(--steel-medium)',
              boxShadow: 'var(--shadow-steel)'
            }}>
              <div style={{ fontSize: 48, marginBottom: 20 }}>📍</div>
              <h3 style={{ fontSize: 22, fontWeight: 600, marginBottom: 15, color: 'var(--chrome-primary)' }}>Adres</h3>
              <p style={{ fontSize: 16, color: 'var(--steel-dark)', lineHeight: 1.5 }}>
                İzmir, Türkiye<br />
                Makine Yedek Parça & Kalıp Üretim Tesisi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Çalışma Saatları */}
      <section style={{ padding: '60px 32px', background: 'var(--steel-light)', color: 'var(--chrome-primary)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 28, fontWeight: 600, marginBottom: 40, color: 'var(--chrome-primary)' }}>Çalışma Saatları</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
            <div style={{ 
              background: 'var(--steel-gradient)', 
              padding: '20px', 
              borderRadius: 8, 
              boxShadow: 'var(--shadow-steel)',
              border: '2px solid var(--steel-medium)'
            }}>
              <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 10, color: 'var(--chrome-primary)' }}>Pazartesi - Cuma</h4>
              <p style={{ fontSize: 14, color: 'var(--steel-dark)' }}>08:00 - 18:00</p>
            </div>
            <div style={{ 
              background: 'var(--steel-gradient)', 
              padding: '20px', 
              borderRadius: 8, 
              boxShadow: 'var(--shadow-steel)',
              border: '2px solid var(--steel-medium)'
            }}>
              <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 10, color: 'var(--chrome-primary)' }}>Cumartesi</h4>
              <p style={{ fontSize: 14, color: 'var(--steel-dark)' }}>08:00 - 13:00</p>
            </div>
            <div style={{ 
              background: 'var(--steel-gradient)', 
              padding: '20px', 
              borderRadius: 8, 
              boxShadow: 'var(--shadow-steel)',
              border: '2px solid var(--steel-medium)'
            }}>
              <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 10, color: 'var(--chrome-primary)' }}>Pazar</h4>
              <p style={{ fontSize: 14, color: 'var(--steel-dark)' }}>Kapalı</p>
            </div>
          </div>
        </div>
      </section>

      {/* İletişim Formu */}
      <section style={{ padding: '80px 32px', background: 'var(--steel-gradient)', color: 'var(--chrome-primary)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, textAlign: 'center', marginBottom: 60, color: 'var(--chrome-primary)' }}>Teklif ve Bilgi Talebi</h2>
          <form onSubmit={handleSubmit} style={{ 
            background: 'var(--steel-light)', 
            padding: '40px', 
            borderRadius: 12, 
            boxShadow: 'var(--shadow-steel)',
            border: '2px solid var(--steel-medium)'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20, marginBottom: 20 }}>
              <div>
                <label style={{ display: 'block', marginBottom: 8, fontWeight: 600, color: 'var(--chrome-primary)' }}>Ad Soyad *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid var(--steel-medium)',
                    borderRadius: 6,
                    fontSize: 16,
                    boxSizing: 'border-box',
                    background: '#fff',
                    transition: 'all 0.3s ease'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: 8, fontWeight: 600, color: 'var(--chrome-primary)' }}>E-posta *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid var(--steel-medium)',
                    borderRadius: 6,
                    fontSize: 16,
                    boxSizing: 'border-box',
                    background: '#fff',
                    transition: 'all 0.3s ease'
                  }}
                />
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20, marginBottom: 20 }}>
              <div>
                <label style={{ display: 'block', marginBottom: 8, fontWeight: 600, color: 'var(--chrome-primary)' }}>Telefon</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid var(--steel-medium)',
                    borderRadius: 6,
                    fontSize: 16,
                    boxSizing: 'border-box',
                    background: '#fff',
                    transition: 'all 0.3s ease'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: 8, fontWeight: 600, color: 'var(--chrome-primary)' }}>Firma Adı</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid var(--steel-medium)',
                    borderRadius: 6,
                    fontSize: 16,
                    boxSizing: 'border-box',
                    background: '#fff',
                    transition: 'all 0.3s ease'
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={{ display: 'block', marginBottom: 8, fontWeight: 600, color: 'var(--chrome-primary)' }}>Hizmet Türü</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid var(--steel-medium)',
                  borderRadius: 6,
                  fontSize: 16,
                  boxSizing: 'border-box',
                  background: '#fff',
                  transition: 'all 0.3s ease'
                }}
              >
                <option value="">Hizmet seçiniz</option>
                <option value="makine-yedek-parca">Makine Yedek Parça İmalatı</option>
                <option value="plastik-enjeksiyon">Plastik Enjeksiyon Kalıpları</option>
                <option value="kesme-sivama">Kesme Sıvama Kalıpları</option>
                <option value="universal-torna">Üniversal Torna İşleri</option>
                <option value="cnc-islene">CNC İşleme Merkezi</option>
                <option value="cad-cam">CAD/CAM Hizmetleri</option>
                <option value="diger">Diğer</option>
              </select>
            </div>
            
            <div style={{ marginBottom: 30 }}>
              <label style={{ display: 'block', marginBottom: 8, fontWeight: 600, color: 'var(--chrome-primary)' }}>Proje Detayları *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid var(--steel-medium)',
                  borderRadius: 6,
                  fontSize: 16,
                  boxSizing: 'border-box',
                  resize: 'vertical',
                  background: '#fff',
                  transition: 'all 0.3s ease'
                }}
                placeholder="Projeniz hakkında detayları, parça özellikleri, miktar, teslimat süresi gibi bilgileri buraya yazabilirsiniz..."
              />
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <button
                type="submit"
                style={{
                  background: 'var(--gold-gradient)',
                  color: 'var(--chrome-primary)',
                  border: '2px solid var(--gold-accent)',
                  padding: '16px 40px',
                  fontSize: 18,
                  fontWeight: 600,
                  borderRadius: 8,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: 'var(--shadow-steel)'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
              >
                Teklif Talep Et
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Harita veya Ek Bilgiler */}
      <section style={{ padding: '60px 32px', background: 'var(--steel-light)', color: 'var(--chrome-primary)', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h3 style={{ fontSize: 24, fontWeight: 600, marginBottom: 20, color: 'var(--chrome-primary)' }}>Hızlı İletişim</h3>
          <p style={{ fontSize: 16, color: 'var(--steel-dark)', lineHeight: 1.6 }}>
            Acil makine yedek parça, kalıp üretimi veya CNC işleme projeleriniz için telefon ile direkt iletişime geçebilir, 
            detaylı bilgi için e-posta gönderebilirsiniz. Uzman ekibimiz en kısa sürede size dönüş yapacaktır.
          </p>
        </div>
      </section>
    </div>
  );
} 