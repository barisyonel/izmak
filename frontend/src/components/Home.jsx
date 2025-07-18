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
    <div style={{ 
      fontFamily: 'Inter, sans-serif', 
      background: 'var(--steel-light)', 
      minHeight: '100vh',
      overflow: 'hidden',
      width: '100%'
    }}>
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
        minHeight: 'clamp(300px, 60vh, 420px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(120deg, #f6f7fb 0%, #e0e5ec 60%, #f1c40f 100%)',
        color: 'var(--chrome-primary)',
        padding: 'clamp(32px, 8vw, 64px) clamp(16px, 4vw, 16px) clamp(24px, 6vw, 48px) clamp(16px, 4vw, 16px)',
        position: 'relative',
        boxShadow: 'var(--shadow-metallic)',
        overflow: 'hidden'
      }}>
        <div style={{ 
          fontSize: 'clamp(16px, 4vw, 20px)', 
          fontWeight: 700, 
          letterSpacing: 2, 
          color: 'var(--gold-accent)', 
          marginBottom: 12, 
          textShadow: '0 1px 8px #fff8', 
          textAlign: 'center' 
        }}>
          1960'DAN BERİ
        </div>
        <h1 style={{ 
          fontSize: 'clamp(32px, 8vw, 54px)', 
          fontWeight: 900, 
          marginBottom: 18, 
          textAlign: 'center', 
          lineHeight: 1.1, 
          color: 'var(--chrome-primary)', 
          textShadow: '0 2px 16px #fff8',
          wordWrap: 'break-word',
          overflowWrap: 'break-word'
        }}>
          Makine Yedek Parça & Kalıp İmalatında Uzmanlık
        </h1>
        <p style={{ 
          color: 'var(--chrome-secondary)', 
          fontSize: 'clamp(16px, 4vw, 24px)', 
          marginBottom: 18, 
          textAlign: 'center', 
          maxWidth: 'clamp(300px, 80vw, 700px)', 
          fontWeight: 500,
          wordWrap: 'break-word',
          overflowWrap: 'break-word'
        }}>
          İzmak, makine yedek parça imalatı, plastik enjeksiyon kalıpları, kesme sıvama kalıpları, torna işleri ve CNC işleme merkezi hizmetlerinde uzmanlaşmıştır.
        </p>
        <p style={{ 
          color: 'var(--steel-dark)', 
          fontSize: 'clamp(14px, 3vw, 18px)', 
          marginBottom: 32, 
          textAlign: 'center', 
          maxWidth: 'clamp(280px, 70vw, 600px)',
          wordWrap: 'break-word',
          overflowWrap: 'break-word'
        }}>
          Modern CNC parkurumuz, CAD/CAM teknolojilerimiz ve deneyimli kadromuzla, endüstriyel projelerinize değer katıyor.
        </p>
        <Link to="/contact" style={{ 
          background: 'linear-gradient(90deg, #f1c40f 0%, #f39c12 100%)', 
          color: 'var(--chrome-primary)', 
          padding: 'clamp(14px, 3vw, 18px) clamp(32px, 6vw, 54px)', 
          borderRadius: 16, 
          textDecoration: 'none', 
          fontWeight: 'bold', 
          fontSize: 'clamp(18px, 4vw, 24px)', 
          boxShadow: '0 4px 24px #f1c40f55', 
          letterSpacing: 1, 
          transition: 'all 0.3s',
          border: 'none',
          outline: '3px solid #fff',
          outlineOffset: '-6px',
          textShadow: '0 1px 8px #fff8',
          marginTop: 8,
          whiteSpace: 'nowrap',
          display: 'inline-block'
        }}>
          Teklif Al
        </Link>
      </section>

      {/* Hizmet Alanları */}
      <section style={{ 
        padding: 'clamp(40px, 8vw, 80px) clamp(16px, 4vw, 32px)', 
        background: 'var(--steel-gradient)',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h2 style={{ 
              fontSize: 'clamp(24px, 6vw, 36px)', 
              fontWeight: 700, 
              textAlign: 'center', 
              marginBottom: 'clamp(30px, 6vw, 60px)', 
              color: 'var(--chrome-primary)',
              background: 'var(--gold-gradient)',
              display: 'inline-block',
              borderRadius: 8,
              padding: 'clamp(4px, 1vw, 6px) clamp(20px, 4vw, 32px)',
              boxShadow: 'var(--shadow-steel)',
            }}>
              Hizmet Alanlarımız
            </h2>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 40vw, 350px), 1fr))', 
            gap: 'clamp(20px, 4vw, 30px)',
            width: '100%'
          }}>
            {/* Makine Yedek Parça */}
            <div style={{ 
              background: 'var(--steel-light)', 
              borderRadius: 14, 
              padding: 'clamp(20px, 4vw, 30px)', 
              boxShadow: 'var(--shadow-steel)',
              transition: 'all 0.3s ease',
              overflow: 'hidden'
            }}>
              <div style={{ fontSize: 'clamp(36px, 8vw, 48px)', marginBottom: 20, textAlign: 'center' }}>🔧</div>
              <h3 style={{ 
                fontSize: 'clamp(18px, 4vw, 24px)', 
                fontWeight: 600, 
                marginBottom: 15, 
                color: 'var(--chrome-primary)', 
                textAlign: 'center',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
              }}>
                Makine Yedek Parça İmalatı
              </h3>
              <p style={{ 
                fontSize: 'clamp(14px, 3vw, 16px)', 
                color: 'var(--steel-dark)', 
                lineHeight: 1.6, 
                textAlign: 'center',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
              }}>
                Endüstriyel makinelerin yedek parçalarını hassas ölçülerde üretiyoruz. 
                CNC işleme merkezlerimizle her türlü parça imalatını gerçekleştiriyoruz.
              </p>
            </div>

            {/* Plastik Enjeksiyon Kalıpları */}
            <div style={{ 
              background: 'var(--steel-light)', 
              borderRadius: 14, 
              padding: 'clamp(20px, 4vw, 30px)', 
              boxShadow: 'var(--shadow-steel)',
              transition: 'all 0.3s ease',
              overflow: 'hidden'
            }}>
              <div style={{ fontSize: 'clamp(36px, 8vw, 48px)', marginBottom: 20, textAlign: 'center' }}>🏭</div>
              <h3 style={{ 
                fontSize: 'clamp(18px, 4vw, 24px)', 
                fontWeight: 600, 
                marginBottom: 15, 
                color: 'var(--chrome-primary)', 
                textAlign: 'center',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
              }}>
                Plastik Enjeksiyon Kalıpları
              </h3>
              <p style={{ 
                fontSize: 'clamp(14px, 3vw, 16px)', 
                color: 'var(--steel-dark)', 
                lineHeight: 1.6, 
                textAlign: 'center',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
              }}>
                Plastik enjeksiyon kalıpları tasarımı ve imalatı. 
                Seri üretim için kaliteli ve dayanıklı kalıp çözümleri.
              </p>
            </div>

            {/* Kesme Sıvama Kalıpları */}
            <div style={{ 
              background: 'var(--steel-light)', 
              borderRadius: 14, 
              padding: 'clamp(20px, 4vw, 30px)', 
              boxShadow: 'var(--shadow-steel)',
              transition: 'all 0.3s ease',
              overflow: 'hidden'
            }}>
              <div style={{ fontSize: 'clamp(36px, 8vw, 48px)', marginBottom: 20, textAlign: 'center' }}>✂️</div>
              <h3 style={{ 
                fontSize: 'clamp(18px, 4vw, 24px)', 
                fontWeight: 600, 
                marginBottom: 15, 
                color: 'var(--chrome-primary)', 
                textAlign: 'center',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
              }}>
                Kesme Sıvama Kalıpları
              </h3>
              <p style={{ 
                fontSize: 'clamp(14px, 3vw, 16px)', 
                color: 'var(--steel-dark)', 
                lineHeight: 1.6, 
                textAlign: 'center',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
              }}>
                Metal kesme ve sıvama işlemleri için özel kalıp tasarımı. 
                Hassas kesim ve şekillendirme kalıpları.
              </p>
            </div>

            {/* Üniversal Torna */}
            <div style={{ 
              background: 'var(--steel-light)', 
              borderRadius: 14, 
              padding: 'clamp(20px, 4vw, 30px)', 
              boxShadow: 'var(--shadow-steel)',
              transition: 'all 0.3s ease',
              overflow: 'hidden'
            }}>
              <div style={{ fontSize: 'clamp(36px, 8vw, 48px)', marginBottom: 20, textAlign: 'center' }}>⚙️</div>
              <h3 style={{ 
                fontSize: 'clamp(18px, 4vw, 24px)', 
                fontWeight: 600, 
                marginBottom: 15, 
                color: 'var(--chrome-primary)', 
                textAlign: 'center',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
              }}>
                Üniversal Torna İşleri
              </h3>
              <p style={{ 
                fontSize: 'clamp(14px, 3vw, 16px)', 
                color: 'var(--steel-dark)', 
                lineHeight: 1.6, 
                textAlign: 'center',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
              }}>
                Silindirik parça imalatı, dişli çarklar, miller, 
                akslar ve özel torna işleri.
              </p>
            </div>

            {/* CNC İşleme Merkezi */}
            <div style={{ 
              background: 'var(--steel-light)', 
              borderRadius: 14, 
              padding: 'clamp(20px, 4vw, 30px)', 
              boxShadow: 'var(--shadow-steel)',
              transition: 'all 0.3s ease',
              overflow: 'hidden'
            }}>
              <div style={{ fontSize: 'clamp(36px, 8vw, 48px)', marginBottom: 20, textAlign: 'center' }}>🖥️</div>
              <h3 style={{ 
                fontSize: 'clamp(18px, 4vw, 24px)', 
                fontWeight: 600, 
                marginBottom: 15, 
                color: 'var(--chrome-primary)', 
                textAlign: 'center',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
              }}>
                CNC İşleme Merkezi
              </h3>
              <p style={{ 
                fontSize: 'clamp(14px, 3vw, 16px)', 
                color: 'var(--steel-dark)', 
                lineHeight: 1.6, 
                textAlign: 'center',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
              }}>
                3 eksen ve 5 eksen CNC işleme merkezleri ile 
                karmaşık geometrili parça imalatı.
              </p>
            </div>

            {/* CAD/CAM */}
            <div style={{ 
              background: 'var(--steel-light)', 
              borderRadius: 14, 
              padding: 'clamp(20px, 4vw, 30px)', 
              boxShadow: 'var(--shadow-steel)',
              transition: 'all 0.3s ease',
              overflow: 'hidden'
            }}>
              <div style={{ fontSize: 'clamp(36px, 8vw, 48px)', marginBottom: 20, textAlign: 'center' }}>💻</div>
              <h3 style={{ 
                fontSize: 'clamp(18px, 4vw, 24px)', 
                fontWeight: 600, 
                marginBottom: 15, 
                color: 'var(--chrome-primary)', 
                textAlign: 'center',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
              }}>
                CAD/CAM Hizmetleri
              </h3>
              <p style={{ 
                fontSize: 'clamp(14px, 3vw, 16px)', 
                color: 'var(--steel-dark)', 
                lineHeight: 1.6, 
                textAlign: 'center',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
              }}>
                Ürün tasarımı, teknik çizim, 3D modelleme ve 
                CNC programlama hizmetleri.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Avantaj Kutuları */}
      <section style={{ 
        display: 'flex', 
        gap: 'clamp(16px, 3vw, 32px)', 
        justifyContent: 'center', 
        margin: 'clamp(28px, 6vw, 56px) 0', 
        flexWrap: 'wrap',
        padding: '0 clamp(16px, 4vw, 32px)',
        overflow: 'hidden'
      }}>
        <div className="advantage-box" style={{ 
          background: 'var(--steel-gradient)', 
          borderRadius: 14, 
          boxShadow: 'var(--shadow-steel)', 
          padding: 'clamp(20px, 4vw, 36px) clamp(16px, 3vw, 30px)', 
          minWidth: 'clamp(200px, 40vw, 220px)', 
          textAlign: 'center', 
          transition: 'all 0.3s ease', 
          fontWeight: 500,
          overflow: 'hidden'
        }}>
          <span role="img" aria-label="precision" style={{ fontSize: 'clamp(28px, 6vw, 38px)' }}>🎯</span>
          <h4 style={{ 
            margin: 'clamp(12px, 2vw, 18px) 0 clamp(6px, 1vw, 8px)', 
            fontSize: 'clamp(16px, 3vw, 21px)', 
            color: 'var(--chrome-primary)', 
            textAlign: 'center',
            wordWrap: 'break-word',
            overflowWrap: 'break-word'
          }}>
            Mikron Hassasiyeti
          </h4>
          <p style={{ 
            color: 'var(--steel-dark)', 
            fontSize: 'clamp(13px, 2.5vw, 15px)',
            wordWrap: 'break-word',
            overflowWrap: 'break-word'
          }}>
            0.01mm hassasiyetle üretim.
          </p>
        </div>
        <div className="advantage-box" style={{ 
          background: 'var(--steel-gradient)', 
          borderRadius: 14, 
          boxShadow: 'var(--shadow-steel)', 
          padding: 'clamp(20px, 4vw, 36px) clamp(16px, 3vw, 30px)', 
          minWidth: 'clamp(200px, 40vw, 220px)', 
          textAlign: 'center', 
          transition: 'all 0.3s ease', 
          fontWeight: 500,
          overflow: 'hidden'
        }}>
          <span role="img" aria-label="speed" style={{ fontSize: 'clamp(28px, 6vw, 38px)' }}>⚡</span>
          <h4 style={{ 
            margin: 'clamp(12px, 2vw, 18px) 0 clamp(6px, 1vw, 8px)', 
            fontSize: 'clamp(16px, 3vw, 21px)', 
            color: 'var(--chrome-primary)', 
            textAlign: 'center',
            wordWrap: 'break-word',
            overflowWrap: 'break-word'
          }}>
            Hızlı Teslimat
          </h4>
          <p style={{ 
            color: 'var(--steel-dark)', 
            fontSize: 'clamp(13px, 2.5vw, 15px)',
            wordWrap: 'break-word',
            overflowWrap: 'break-word'
          }}>
            Acil siparişler için hızlı üretim.
          </p>
        </div>
        <div className="advantage-box" style={{ 
          background: 'var(--steel-gradient)', 
          borderRadius: 14, 
          boxShadow: 'var(--shadow-steel)', 
          padding: 'clamp(20px, 4vw, 36px) clamp(16px, 3vw, 30px)', 
          minWidth: 'clamp(200px, 40vw, 220px)', 
          textAlign: 'center', 
          transition: 'all 0.3s ease', 
          fontWeight: 500,
          overflow: 'hidden'
        }}>
          <span role="img" aria-label="team" style={{ fontSize: 'clamp(28px, 6vw, 38px)' }}>👨‍🔧</span>
          <h4 style={{ 
            margin: 'clamp(12px, 2vw, 18px) 0 clamp(6px, 1vw, 8px)', 
            fontSize: 'clamp(16px, 3vw, 21px)', 
            color: 'var(--chrome-primary)', 
            textAlign: 'center',
            wordWrap: 'break-word',
            overflowWrap: 'break-word'
          }}>
            Uzman Kadro
          </h4>
          <p style={{ 
            color: 'var(--steel-dark)', 
            fontSize: 'clamp(13px, 2.5vw, 15px)',
            wordWrap: 'break-word',
            overflowWrap: 'break-word'
          }}>
            Deneyimli mühendis ve teknisyenler.
          </p>
        </div>
        <div className="advantage-box" style={{ 
          background: 'var(--steel-gradient)', 
          borderRadius: 14, 
          boxShadow: 'var(--shadow-steel)', 
          padding: 'clamp(20px, 4vw, 36px) clamp(16px, 3vw, 30px)', 
          minWidth: 'clamp(200px, 40vw, 220px)', 
          textAlign: 'center', 
          transition: 'all 0.3s ease', 
          fontWeight: 500,
          overflow: 'hidden'
        }}>
          <span role="img" aria-label="cnc" style={{ fontSize: 'clamp(28px, 6vw, 38px)' }}>🛠️</span>
          <h4 style={{ 
            margin: 'clamp(12px, 2vw, 18px) 0 clamp(6px, 1vw, 8px)', 
            fontSize: 'clamp(16px, 3vw, 21px)', 
            color: 'var(--chrome-primary)', 
            textAlign: 'center',
            wordWrap: 'break-word',
            overflowWrap: 'break-word'
          }}>
            Modern Ekipman
          </h4>
          <p style={{ 
            color: 'var(--steel-dark)', 
            fontSize: 'clamp(13px, 2.5vw, 15px)',
            wordWrap: 'break-word',
            overflowWrap: 'break-word'
          }}>
            Son teknoloji CNC makineleri.
          </p>
        </div>
      </section>

      {/* Hakkımızda Mini Blok */}
      <section style={{ 
        background: 'var(--metallic-gradient)', 
        color: '#fff', 
        borderRadius: 18, 
        maxWidth: 'clamp(300px, 90vw, 900px)', 
        margin: '0 auto clamp(28px, 6vw, 56px) auto', 
        padding: 'clamp(24px, 5vw, 40px) clamp(16px, 4vw, 32px)', 
        boxShadow: 'var(--shadow-metallic)', 
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        <h2 style={{ 
          fontSize: 'clamp(20px, 5vw, 28px)', 
          marginBottom: 16, 
          color: 'var(--gold-bright)', 
          fontWeight: 700, 
          textAlign: 'center',
          wordWrap: 'break-word',
          overflowWrap: 'break-word'
        }}>
          IZMAK Hakkında
        </h2>
        <p style={{ 
          fontSize: 'clamp(14px, 3vw, 18px)', 
          color: '#f3f3f3', 
          marginBottom: 8,
          wordWrap: 'break-word',
          overflowWrap: 'break-word'
        }}>
          1960 yılında kurulan İzmak, makine yedek parça imalatı, kalıp üretimi ve CNC işleme sektöründe Türkiye'nin öncü firmalarından biridir.
        </p>
        <p style={{ 
          fontSize: 'clamp(13px, 2.5vw, 16px)', 
          color: '#e0e0e0',
          wordWrap: 'break-word',
          overflowWrap: 'break-word'
        }}>
          Plastik enjeksiyon kalıpları, kesme sıvama kalıpları, torna işleri ve CAD/CAM hizmetlerinde uzmanlaşmış ekibimizle hizmetinizdeyiz.
        </p>
      </section>

      {/* Öne Çıkan Projeler */}
      <section style={{ 
        margin: 'clamp(24px, 5vw, 48px) 0 clamp(28px, 6vw, 56px)',
        padding: '0 clamp(16px, 4vw, 32px)',
        overflow: 'hidden'
      }}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h2 style={{ 
            fontSize: 'clamp(20px, 5vw, 28px)', 
            marginBottom: 24, 
            textAlign: 'center', 
            color: 'var(--chrome-primary)', 
            background: 'var(--gold-gradient)', 
            display: 'inline-block', 
            borderRadius: 8, 
            padding: 'clamp(4px, 1vw, 6px) clamp(20px, 4vw, 32px)', 
            fontWeight: 700, 
            boxShadow: 'var(--shadow-steel)',
            wordWrap: 'break-word',
            overflowWrap: 'break-word'
          }}>
            Öne Çıkan Projelerimiz
          </h2>
        </div>
        {projects.length === 0 ? (
          <div style={{ 
            textAlign: 'center', 
            color: 'var(--steel-dark)', 
            fontSize: 'clamp(16px, 4vw, 20px)', 
            marginTop: 40 
          }}>
            Henüz proje eklenmedi.
          </div>
        ) : (
          <div style={{ 
            display: 'flex', 
            gap: 'clamp(16px, 3vw, 32px)', 
            flexWrap: 'wrap', 
            justifyContent: 'center',
            width: '100%'
          }}>
            {projects.map(p => (
              <div key={p._id} style={{ 
                width: 'clamp(240px, 80vw, 260px)', 
                borderRadius: 14, 
                padding: 'clamp(12px, 2vw, 18px)', 
                background: 'var(--steel-gradient)', 
                boxShadow: 'var(--shadow-steel)', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                minHeight: 'clamp(280px, 60vh, 340px)',
                transition: 'all 0.3s ease',
                overflow: 'hidden'
              }}>
                <img 
                  src={p.imageUrl} 
                  alt={p.name} 
                  style={{ 
                    maxWidth: 'clamp(180px, 60vw, 220px)', 
                    maxHeight: 'clamp(120px, 30vh, 180px)', 
                    borderRadius: 8, 
                    marginBottom: 12, 
                    objectFit: 'cover', 
                    boxShadow: 'var(--shadow-steel)',
                    width: '100%',
                    height: 'auto'
                  }} 
                />
                <h3 style={{ 
                  margin: '8px 0 4px', 
                  fontSize: 'clamp(16px, 3vw, 20px)', 
                  color: 'var(--chrome-primary)',
                  textAlign: 'center',
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word'
                }}>
                  {p.name}
                </h3>
                <p style={{ 
                  fontSize: 'clamp(13px, 2.5vw, 15px)', 
                  color: 'var(--steel-dark)', 
                  textAlign: 'center',
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word'
                }}>
                  {p.description}
                </p>
                <div style={{ 
                  fontWeight: 'bold', 
                  color: 'var(--gold-accent)', 
                  fontSize: 'clamp(16px, 3vw, 18px)', 
                  marginTop: 8 
                }}>
                  {p.price ? p.price + ' TL' : ''}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
} 