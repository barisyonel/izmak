import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Contact() {

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
                722/5 Sk No:2, Buca, İzmir<br />
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

      {/* Harita Bölümü */}
      <section style={{ padding: '80px 32px', background: 'var(--steel-gradient)', color: 'var(--chrome-primary)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, textAlign: 'center', marginBottom: 60, color: 'var(--chrome-primary)' }}>Konumumuz</h2>
          <div style={{ 
            background: 'var(--steel-light)', 
            padding: '20px', 
            borderRadius: 12, 
            boxShadow: 'var(--shadow-steel)',
            border: '2px solid var(--steel-medium)',
            marginBottom: '40px'
          }}>
            <h3 style={{ fontSize: 24, fontWeight: 600, marginBottom: 20, color: 'var(--chrome-primary)', textAlign: 'center' }}>
              📍 722/5 Sk No:2, Buca, İzmir
            </h3>
            <div style={{ 
              width: '100%', 
              height: '400px', 
              borderRadius: '8px',
              overflow: 'hidden',
              border: '2px solid var(--steel-medium)'
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3124.123456789!2d27.123456!3d38.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDA3JzI0LjQiTiAyN8KwMDcnMjQuNCJF!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="İZMAK Konumu - 722/5 Sk No:2, Buca, İzmir"
              ></iframe>
            </div>
            <div style={{ 
              marginTop: '20px', 
              textAlign: 'center',
              padding: '20px',
              background: 'var(--steel-gradient)',
              borderRadius: '8px',
              border: '1px solid var(--steel-medium)'
            }}>
              <p style={{ fontSize: 16, color: 'var(--steel-dark)', marginBottom: '10px' }}>
                <strong>İZMAK Makine Yedek Parça & Kalıp İmalatı</strong>
              </p>
              <p style={{ fontSize: 14, color: 'var(--steel-dark)', lineHeight: '1.6' }}>
                Buca, İzmir'deki tesisimizde makine yedek parça üretimi ve kalıp imalatı hizmetleri sunmaktayız.
              </p>
            </div>
          </div>
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