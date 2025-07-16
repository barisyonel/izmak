import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios.get('/api/products').then(res => setProjects(res.data.slice(0, 3)));
  }, []);
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: 'var(--steel-light)', minHeight: '100vh' }}>
      <Helmet>
        <title>IZMAK - Makine Yedek Parça & Kalıp İmalatı | 1960'dan Beri</title>
        <meta name="description" content="IZMAK, 1960'tan beri makine yedek parça imalatı, plastik enjeksiyon kalıpları, kesme sıvama kalıpları, torna işleri ve CNC işleme merkezi hizmetlerinde uzmanlaşmıştır." />
        <meta property="og:title" content="IZMAK - Makine Yedek Parça & Kalıp İmalatı" />
        <meta property="og:description" content="1960'tan beri makine yedek parça imalatı, kalıp üretimi ve CNC işleme sektöründe uzmanlaşmış IZMAK" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://izmak.com" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:site_name" content="IZMAK" />
        <meta property="og:locale" content="tr_TR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IZMAK - Makine Yedek Parça & Kalıp İmalatı" />
        <meta name="twitter:description" content="1960'tan beri makine yedek parça imalatı, kalıp üretimi ve CNC işleme sektöründe uzmanlaşmış IZMAK" />
        <meta name="twitter:image" content="/logo.png" />
      </Helmet>
      {/* HERO Alanı */}
      <section style={{
        width: '100%',
        minHeight: 420,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(120deg, #f6f7fb 0%, #e0e5ec 60%, #f1c40f 100%)',
        color: 'var(--chrome-primary)',
        padding: '64px 16px 48px 16px',
        position: 'relative',
        boxShadow: 'var(--shadow-metallic)',
      }}>
        <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: 2, color: 'var(--gold-accent)', marginBottom: 12, textShadow: '0 1px 8px #fff8', textAlign: 'center' }}>1960'DAN BERİ</div>
        <h1 style={{ fontSize: 54, fontWeight: 900, marginBottom: 18, textAlign: 'center', lineHeight: 1.1, color: 'var(--chrome-primary)', textShadow: '0 2px 16px #fff8' }}>
          Makine Yedek Parça & Kalıp İmalatında Uzmanlık
        </h1>
        <p style={{ color: 'var(--chrome-secondary)', fontSize: 24, marginBottom: 18, textAlign: 'center', maxWidth: 700, fontWeight: 500 }}>
          İzmak, makine yedek parça imalatı, plastik enjeksiyon kalıpları, kesme sıvama kalıpları, torna işleri ve CNC işleme merkezi hizmetlerinde uzmanlaşmıştır.
        </p>
        <p style={{ color: 'var(--steel-dark)', fontSize: 18, marginBottom: 32, textAlign: 'center', maxWidth: 600 }}>
          Modern CNC parkurumuz, CAD/CAM teknolojilerimiz ve deneyimli kadromuzla, endüstriyel projelerinize değer katıyor.
        </p>
        <Link to="/contact" style={{ 
          background: 'linear-gradient(90deg, #f1c40f 0%, #f39c12 100%)', 
          color: 'var(--chrome-primary)', 
          padding: '18px 54px', 
          borderRadius: 16, 
          textDecoration: 'none', 
          fontWeight: 'bold', 
          fontSize: 24, 
          boxShadow: '0 4px 24px #f1c40f55', 
          letterSpacing: 1, 
          transition: 'all 0.3s',
          border: 'none',
          outline: '3px solid #fff',
          outlineOffset: '-6px',
          textShadow: '0 1px 8px #fff8',
          marginTop: 8
        }}>
          Teklif Al
        </Link>
      </section>

      {/* Hizmet Alanları */}
      <section style={{ padding: '80px 32px', background: 'var(--steel-gradient)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h2 style={{ 
              fontSize: 36, 
              fontWeight: 700, 
              textAlign: 'center', 
              marginBottom: 60, 
              color: 'var(--chrome-primary)',
              background: 'var(--gold-gradient)',
              display: 'inline-block',
              borderRadius: 8,
              padding: '6px 32px',
              boxShadow: 'var(--shadow-steel)',
            }}>Hizmet Alanlarımız</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 30 }}>
            {/* Makine Yedek Parça */}
            <div style={{ 
              background: 'var(--steel-light)', 
              borderRadius: 14, 
              padding: '30px', 
              boxShadow: 'var(--shadow-steel)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ fontSize: 48, marginBottom: 20, textAlign: 'center' }}>🔧</div>
              <h3 style={{ fontSize: 24, fontWeight: 600, marginBottom: 15, color: 'var(--chrome-primary)', textAlign: 'center' }}>Makine Yedek Parça İmalatı</h3>
              <p style={{ fontSize: 16, color: 'var(--steel-dark)', lineHeight: 1.6, textAlign: 'center' }}>
                Endüstriyel makinelerin yedek parçalarını hassas ölçülerde üretiyoruz. 
                CNC işleme merkezlerimizle her türlü parça imalatını gerçekleştiriyoruz.
              </p>
            </div>

            {/* Plastik Enjeksiyon Kalıpları */}
            <div style={{ 
              background: 'var(--steel-light)', 
              borderRadius: 14, 
              padding: '30px', 
              boxShadow: 'var(--shadow-steel)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ fontSize: 48, marginBottom: 20, textAlign: 'center' }}>🏭</div>
              <h3 style={{ fontSize: 24, fontWeight: 600, marginBottom: 15, color: 'var(--chrome-primary)', textAlign: 'center' }}>Plastik Enjeksiyon Kalıpları</h3>
              <p style={{ fontSize: 16, color: 'var(--steel-dark)', lineHeight: 1.6, textAlign: 'center' }}>
                Plastik enjeksiyon kalıpları tasarımı ve imalatı. 
                Seri üretim için kaliteli ve dayanıklı kalıp çözümleri.
              </p>
            </div>

            {/* Kesme Sıvama Kalıpları */}
            <div style={{ 
              background: 'var(--steel-light)', 
              borderRadius: 14, 
              padding: '30px', 
              boxShadow: 'var(--shadow-steel)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ fontSize: 48, marginBottom: 20, textAlign: 'center' }}>✂️</div>
              <h3 style={{ fontSize: 24, fontWeight: 600, marginBottom: 15, color: 'var(--chrome-primary)', textAlign: 'center' }}>Kesme Sıvama Kalıpları</h3>
              <p style={{ fontSize: 16, color: 'var(--steel-dark)', lineHeight: 1.6, textAlign: 'center' }}>
                Metal kesme ve sıvama işlemleri için özel kalıp tasarımı. 
                Hassas kesim ve şekillendirme kalıpları.
              </p>
            </div>

            {/* Üniversal Torna */}
            <div style={{ 
              background: 'var(--steel-light)', 
              borderRadius: 14, 
              padding: '30px', 
              boxShadow: 'var(--shadow-steel)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ fontSize: 48, marginBottom: 20, textAlign: 'center' }}>⚙️</div>
              <h3 style={{ fontSize: 24, fontWeight: 600, marginBottom: 15, color: 'var(--chrome-primary)', textAlign: 'center' }}>Üniversal Torna İşleri</h3>
              <p style={{ fontSize: 16, color: 'var(--steel-dark)', lineHeight: 1.6, textAlign: 'center' }}>
                Silindirik parça imalatı, dişli çarklar, miller, 
                akslar ve özel torna işleri.
              </p>
            </div>

            {/* CNC İşleme Merkezi */}
            <div style={{ 
              background: 'var(--steel-light)', 
              borderRadius: 14, 
              padding: '30px', 
              boxShadow: 'var(--shadow-steel)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ fontSize: 48, marginBottom: 20, textAlign: 'center' }}>🖥️</div>
              <h3 style={{ fontSize: 24, fontWeight: 600, marginBottom: 15, color: 'var(--chrome-primary)', textAlign: 'center' }}>CNC İşleme Merkezi</h3>
              <p style={{ fontSize: 16, color: 'var(--steel-dark)', lineHeight: 1.6, textAlign: 'center' }}>
                3 eksen ve 5 eksen CNC işleme merkezleri ile 
                karmaşık geometrili parça imalatı.
              </p>
            </div>

            {/* CAD/CAM */}
            <div style={{ 
              background: 'var(--steel-light)', 
              borderRadius: 14, 
              padding: '30px', 
              boxShadow: 'var(--shadow-steel)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ fontSize: 48, marginBottom: 20, textAlign: 'center' }}>💻</div>
              <h3 style={{ fontSize: 24, fontWeight: 600, marginBottom: 15, color: 'var(--chrome-primary)', textAlign: 'center' }}>CAD/CAM Hizmetleri</h3>
              <p style={{ fontSize: 16, color: 'var(--steel-dark)', lineHeight: 1.6, textAlign: 'center' }}>
                Ürün tasarımı, teknik çizim, 3D modelleme ve 
                CNC programlama hizmetleri.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Avantaj Kutuları */}
      <section style={{ display: 'flex', gap: 32, justifyContent: 'center', margin: '56px 0 56px', flexWrap: 'wrap' }}>
        <div className="advantage-box" style={{ 
          background: 'var(--steel-gradient)', 
          borderRadius: 14, 
          boxShadow: 'var(--shadow-steel)', 
          padding: '36px 30px', 
          minWidth: 220, 
          textAlign: 'center', 
          transition: 'all 0.3s ease', 
          fontWeight: 500,
        }}>
          <span role="img" aria-label="precision" style={{ fontSize: 38 }}>🎯</span>
          <h4 style={{ margin: '18px 0 8px', fontSize: 21, color: 'var(--chrome-primary)', textAlign: 'center' }}>Mikron Hassasiyeti</h4>
          <p style={{ color: 'var(--steel-dark)', fontSize: 15 }}>0.01mm hassasiyetle üretim.</p>
        </div>
        <div className="advantage-box" style={{ 
          background: 'var(--steel-gradient)', 
          borderRadius: 14, 
          boxShadow: 'var(--shadow-steel)', 
          padding: '36px 30px', 
          minWidth: 220, 
          textAlign: 'center', 
          transition: 'all 0.3s ease', 
          fontWeight: 500,
        }}>
          <span role="img" aria-label="speed" style={{ fontSize: 38 }}>⚡</span>
          <h4 style={{ margin: '18px 0 8px', fontSize: 21, color: 'var(--chrome-primary)', textAlign: 'center' }}>Hızlı Teslimat</h4>
          <p style={{ color: 'var(--steel-dark)', fontSize: 15 }}>Acil siparişler için hızlı üretim.</p>
        </div>
        <div className="advantage-box" style={{ 
          background: 'var(--steel-gradient)', 
          borderRadius: 14, 
          boxShadow: 'var(--shadow-steel)', 
          padding: '36px 30px', 
          minWidth: 220, 
          textAlign: 'center', 
          transition: 'all 0.3s ease', 
          fontWeight: 500,
        }}>
          <span role="img" aria-label="team" style={{ fontSize: 38 }}>👨‍🔧</span>
          <h4 style={{ margin: '18px 0 8px', fontSize: 21, color: 'var(--chrome-primary)', textAlign: 'center' }}>Uzman Kadro</h4>
          <p style={{ color: 'var(--steel-dark)', fontSize: 15 }}>Deneyimli mühendis ve teknisyenler.</p>
        </div>
        <div className="advantage-box" style={{ 
          background: 'var(--steel-gradient)', 
          borderRadius: 14, 
          boxShadow: 'var(--shadow-steel)', 
          padding: '36px 30px', 
          minWidth: 220, 
          textAlign: 'center', 
          transition: 'all 0.3s ease', 
          fontWeight: 500,
        }}>
          <span role="img" aria-label="cnc" style={{ fontSize: 38 }}>🛠️</span>
          <h4 style={{ margin: '18px 0 8px', fontSize: 21, color: 'var(--chrome-primary)', textAlign: 'center' }}>Modern Ekipman</h4>
          <p style={{ color: 'var(--steel-dark)', fontSize: 15 }}>Son teknoloji CNC makineleri.</p>
        </div>
      </section>

      {/* Hakkımızda Mini Blok */}
      <section style={{ 
        background: 'var(--metallic-gradient)', 
        color: '#fff', 
        borderRadius: 18, 
        maxWidth: 900, 
        margin: '0 auto 56px auto', 
        padding: '40px 32px', 
        boxShadow: 'var(--shadow-metallic)', 
        textAlign: 'center',
      }}>
        <h2 style={{ fontSize: 28, marginBottom: 16, color: 'var(--gold-bright)', fontWeight: 700, textAlign: 'center' }}>IZMAK Hakkında</h2>
        <p style={{ fontSize: 18, color: '#f3f3f3', marginBottom: 8 }}>
          1960 yılında kurulan İzmak, makine yedek parça imalatı, kalıp üretimi ve CNC işleme sektöründe Türkiye'nin öncü firmalarından biridir.
        </p>
        <p style={{ fontSize: 16, color: '#e0e0e0' }}>
          Plastik enjeksiyon kalıpları, kesme sıvama kalıpları, torna işleri ve CAD/CAM hizmetlerinde uzmanlaşmış ekibimizle hizmetinizdeyiz.
        </p>
      </section>

      {/* Öne Çıkan Projeler */}
      <section style={{ margin: '48px 0 56px' }}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h2 style={{ 
            fontSize: 28, 
            marginBottom: 24, 
            textAlign: 'center', 
            color: 'var(--chrome-primary)', 
            background: 'var(--gold-gradient)', 
            display: 'inline-block', 
            borderRadius: 8, 
            padding: '6px 32px', 
            fontWeight: 700, 
            boxShadow: 'var(--shadow-steel)',
          }}>Öne Çıkan Projelerimiz</h2>
        </div>
        {projects.length === 0 ? (
          <div style={{ textAlign: 'center', color: 'var(--steel-dark)', fontSize: 20, marginTop: 40 }}>Henüz proje eklenmedi.</div>
        ) : (
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
            {projects.map(p => (
              <div key={p._id} style={{ 
                width: 260, 
                borderRadius: 14, 
                padding: 18, 
                background: 'var(--steel-gradient)', 
                boxShadow: 'var(--shadow-steel)', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                minHeight: 340,
                transition: 'all 0.3s ease'
              }}>
                <img src={p.imageUrl} alt={p.name} style={{ 
                  maxWidth: 220, 
                  maxHeight: 180, 
                  borderRadius: 8, 
                  marginBottom: 12, 
                  objectFit: 'cover', 
                  boxShadow: 'var(--shadow-steel)',
                }} />
                <h3 style={{ margin: '8px 0 4px', fontSize: 20, color: 'var(--chrome-primary)' }}>{p.name}</h3>
                <p style={{ fontSize: 15, color: 'var(--steel-dark)', textAlign: 'center' }}>{p.description}</p>
                <div style={{ fontWeight: 'bold', color: 'var(--gold-accent)', fontSize: 18, marginTop: 8 }}>{p.price ? p.price + ' TL' : ''}</div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
} 