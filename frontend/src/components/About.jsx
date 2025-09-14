import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function About() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: 'var(--steel-light)', minHeight: '100vh', color: 'var(--chrome-primary)' }}>
      <Helmet>
        <title>Hakkımızda | IZMAK Makine Yedek Parça & Kalıp İmalatı</title>
        <meta name="description" content="IZMAK, 1960'tan beri makine yedek parça imalatı, kalıp üretimi ve CNC işleme sektöründe uzmanlaşmış, Türkiye'nin öncü üretim firmalarından biridir." />
        <meta property="og:title" content="Hakkımızda | IZMAK Makine Yedek Parça & Kalıp İmalatı" />
        <meta property="og:description" content="Makine yedek parça, kalıp üretimi ve CNC işleme sektöründe uzmanlaşmış, 1960'tan beri hizmet veren firma." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://izmak.com/about" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:site_name" content="IZMAK" />
        <meta property="og:locale" content="tr_TR" />
      </Helmet>
      {/* Hero Bölümü */}
      <section style={{ 
        padding: 'clamp(60px, 8vw, 120px) clamp(16px, 4vw, 32px) clamp(40px, 6vw, 80px)', 
        textAlign: 'center', 
        background: 'var(--metallic-gradient)',
        borderBottom: '3px solid var(--gold-accent)'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: 'clamp(28px, 5vw, 48px)', 
            fontWeight: 700, 
            marginBottom: 'clamp(15px, 3vw, 20px)', 
            color: 'var(--gold-bright)',
            lineHeight: 1.2
          }}>IZMAK Hakkında</h1>
          <p style={{ 
            fontSize: 'clamp(16px, 2.5vw, 20px)', 
            lineHeight: 1.6, 
            color: '#f3f3f3', 
            maxWidth: 'clamp(300px, 80vw, 800px)', 
            margin: '0 auto',
            padding: '0 clamp(10px, 2vw, 20px)'
          }}>
            1960'tan beri makine yedek parça imalatı, kalıp üretimi ve CNC işleme sektöründe faaliyet gösteren IZMAK, Türkiye'nin öncü üretim firmalarından biridir.
          </p>
        </div>
      </section>

      {/* Tarihçe Bölümü */}
      <section style={{ 
        padding: 'clamp(40px, 6vw, 80px) clamp(16px, 4vw, 32px)', 
        background: 'var(--steel-gradient)', 
        color: 'var(--chrome-primary)' 
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(300px, 50vw, 400px), 1fr))', 
            gap: 'clamp(30px, 5vw, 60px)', 
            alignItems: 'center' 
          }}>
            <div>
              <h2 style={{ 
                fontSize: 'clamp(24px, 4vw, 36px)', 
                fontWeight: 700, 
                marginBottom: 'clamp(20px, 3vw, 30px)', 
                color: 'var(--chrome-primary)',
                lineHeight: 1.2
              }}>64 Yıllık Tecrübe</h2>
              <p style={{ 
                fontSize: 'clamp(14px, 2vw, 18px)', 
                lineHeight: 1.7, 
                color: 'var(--steel-dark)', 
                marginBottom: 'clamp(15px, 2vw, 20px)',
                textAlign: 'justify'
              }}>
                1960 yılında kurulan IZMAK, yarım asrı aşkın süredir makine yedek parça imalatı, plastik enjeksiyon kalıpları, 
                kesme sıvama kalıpları ve CNC işleme sektöründe faaliyet göstermektedir.
              </p>
              <p style={{ 
                fontSize: 'clamp(14px, 2vw, 18px)', 
                lineHeight: 1.7, 
                color: 'var(--steel-dark)', 
                marginBottom: 'clamp(15px, 2vw, 20px)',
                textAlign: 'justify'
              }}>
                Uşak Üniversitesi Makine Mühendisliği mezunu uzmanlarımız ile modern teknoloji ve geleneksel ustalığı 
                bir araya getirerek, sektörde güvenilir bir çözüm ortağı olmayı başardık.
              </p>
              <p style={{ 
                fontSize: 'clamp(14px, 2vw, 18px)', 
                lineHeight: 1.7, 
                color: 'var(--steel-dark)',
                textAlign: 'justify'
              }}>
                Bugün, ISO 9001, 14001 ve 45001 sertifikalarımız ile kalite, çevre ve iş güvenliği standartlarında 
                hizmet veren, sektörün önde gelen firmalarından biriyiz.
              </p>
            </div>
            <div style={{ textAlign: 'center', order: -1 }}>
              <div style={{ fontSize: 'clamp(60px, 10vw, 120px)', marginBottom: 'clamp(15px, 2vw, 20px)' }}>🏭</div>
              <div style={{ 
                fontSize: 'clamp(32px, 6vw, 48px)', 
                fontWeight: 700, 
                color: 'var(--gold-accent)', 
                marginBottom: 'clamp(8px, 1vw, 10px)',
                lineHeight: 1
              }}>1960</div>
              <div style={{ 
                fontSize: 'clamp(14px, 2vw, 18px)', 
                color: 'var(--steel-dark)',
                fontWeight: 500
              }}>Kuruluş Yılı</div>
            </div>
          </div>
        </div>
      </section>

      {/* Misyon & Vizyon */}
      <section style={{ 
        padding: 'clamp(40px, 6vw, 80px) clamp(16px, 4vw, 32px)', 
        background: 'var(--steel-light)', 
        color: 'var(--chrome-primary)' 
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: 'clamp(24px, 4vw, 36px)', 
            fontWeight: 700, 
            textAlign: 'center', 
            marginBottom: 'clamp(30px, 5vw, 60px)', 
            color: 'var(--chrome-primary)',
            lineHeight: 1.2
          }}>Misyon & Vizyon</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 45vw, 500px), 1fr))', 
            gap: 'clamp(20px, 3vw, 40px)' 
          }}>
            <div style={{ 
              background: 'var(--steel-gradient)', 
              padding: 'clamp(20px, 4vw, 40px)', 
              borderRadius: 12, 
              boxShadow: 'var(--shadow-steel)',
              border: '2px solid var(--steel-medium)'
            }}>
              <h3 style={{ 
                fontSize: 'clamp(20px, 3vw, 28px)', 
                fontWeight: 600, 
                marginBottom: 'clamp(15px, 2vw, 20px)', 
                color: 'var(--chrome-primary)',
                lineHeight: 1.3
              }}>🎯 Misyonumuz</h3>
              <p style={{ 
                fontSize: 'clamp(14px, 2vw, 16px)', 
                lineHeight: 1.6, 
                color: 'var(--steel-dark)',
                textAlign: 'justify'
              }}>
                Müşterilerimizin ihtiyaçlarına en uygun makine yedek parça, kalıp ve CNC çözümlerini geliştirerek, 
                yüksek kaliteli üretim hizmeti sunmak. Modern teknoloji ve uzman mühendislik 
                kadromuzla sektörde güvenilir bir çözüm ortağı olmak.
              </p>
            </div>
            <div style={{ 
              background: 'var(--steel-gradient)', 
              padding: 'clamp(20px, 4vw, 40px)', 
              borderRadius: 12, 
              boxShadow: 'var(--shadow-steel)',
              border: '2px solid var(--steel-medium)'
            }}>
              <h3 style={{ 
                fontSize: 'clamp(20px, 3vw, 28px)', 
                fontWeight: 600, 
                marginBottom: 'clamp(15px, 2vw, 20px)', 
                color: 'var(--chrome-primary)',
                lineHeight: 1.3
              }}>🔮 Vizyonumuz</h3>
              <p style={{ 
                fontSize: 'clamp(14px, 2vw, 16px)', 
                lineHeight: 1.6, 
                color: 'var(--steel-dark)',
                textAlign: 'justify'
              }}>
                Makine yedek parça imalatı, kalıp üretimi ve CNC işleme sektöründe Türkiye'nin önde gelen firmalarından biri olarak, 
                uluslararası standartlarda hizmet veren, yenilikçi ve sürdürülebilir 
                üretim çözümleri sunan bir marka haline gelmek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hizmet Alanları Detay */}
      <section style={{ 
        padding: 'clamp(40px, 6vw, 80px) clamp(16px, 4vw, 32px)', 
        background: 'var(--steel-gradient)', 
        color: 'var(--chrome-primary)' 
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: 'clamp(24px, 4vw, 36px)', 
            fontWeight: 700, 
            textAlign: 'center', 
            marginBottom: 'clamp(30px, 5vw, 60px)', 
            color: 'var(--chrome-primary)',
            lineHeight: 1.2
          }}>Hizmet Alanlarımız</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 40vw, 350px), 1fr))', 
            gap: 'clamp(20px, 3vw, 30px)' 
          }}>
            <div style={{ 
              background: 'var(--steel-light)', 
              padding: 'clamp(20px, 3vw, 30px)', 
              borderRadius: 12, 
              boxShadow: 'var(--shadow-steel)',
              border: '2px solid var(--steel-medium)'
            }}>
              <h3 style={{ 
                fontSize: 'clamp(18px, 2.5vw, 22px)', 
                fontWeight: 600, 
                marginBottom: 'clamp(12px, 2vw, 15px)', 
                color: 'var(--chrome-primary)',
                lineHeight: 1.3
              }}>🔧 Makine Yedek Parça İmalatı</h3>
              <ul style={{ 
                fontSize: 'clamp(14px, 2vw, 16px)', 
                color: 'var(--steel-dark)', 
                lineHeight: 1.6, 
                paddingLeft: 'clamp(15px, 2vw, 20px)',
                margin: 0
              }}>
                <li>Endüstriyel makine parçaları</li>
                <li>Hassas ölçülü üretim</li>
                <li>Prototip parça imalatı</li>
                <li>Seri üretim parçaları</li>
              </ul>
            </div>
            <div style={{ 
              background: 'var(--steel-light)', 
              padding: 'clamp(20px, 3vw, 30px)', 
              borderRadius: 12, 
              boxShadow: 'var(--shadow-steel)',
              border: '2px solid var(--steel-medium)'
            }}>
              <h3 style={{ 
                fontSize: 'clamp(18px, 2.5vw, 22px)', 
                fontWeight: 600, 
                marginBottom: 'clamp(12px, 2vw, 15px)', 
                color: 'var(--chrome-primary)',
                lineHeight: 1.3
              }}>🏭 Plastik Enjeksiyon Kalıpları</h3>
              <ul style={{ 
                fontSize: 'clamp(14px, 2vw, 16px)', 
                color: 'var(--steel-dark)', 
                lineHeight: 1.6, 
                paddingLeft: 'clamp(15px, 2vw, 20px)',
                margin: 0
              }}>
                <li>Kalıp tasarımı ve imalatı</li>
                <li>Seri üretim kalıpları</li>
                <li>Prototip kalıpları</li>
                <li>Kalıp bakım ve onarım</li>
              </ul>
            </div>
            <div style={{ 
              background: 'var(--steel-light)', 
              padding: 'clamp(20px, 3vw, 30px)', 
              borderRadius: 12, 
              boxShadow: 'var(--shadow-steel)',
              border: '2px solid var(--steel-medium)'
            }}>
              <h3 style={{ 
                fontSize: 'clamp(18px, 2.5vw, 22px)', 
                fontWeight: 600, 
                marginBottom: 'clamp(12px, 2vw, 15px)', 
                color: 'var(--chrome-primary)',
                lineHeight: 1.3
              }}>✂️ Kesme Sıvama Kalıpları</h3>
              <ul style={{ 
                fontSize: 'clamp(14px, 2vw, 16px)', 
                color: 'var(--steel-dark)', 
                lineHeight: 1.6, 
                paddingLeft: 'clamp(15px, 2vw, 20px)',
                margin: 0
              }}>
                <li>Metal kesme kalıpları</li>
                <li>Sıvama ve şekillendirme</li>
                <li>Hassas kesim kalıpları</li>
                <li>Özel geometri kalıpları</li>
              </ul>
            </div>
            <div style={{ 
              background: 'var(--steel-light)', 
              padding: 'clamp(20px, 3vw, 30px)', 
              borderRadius: 12, 
              boxShadow: 'var(--shadow-steel)',
              border: '2px solid var(--steel-medium)'
            }}>
              <h3 style={{ 
                fontSize: 'clamp(18px, 2.5vw, 22px)', 
                fontWeight: 600, 
                marginBottom: 'clamp(12px, 2vw, 15px)', 
                color: 'var(--chrome-primary)',
                lineHeight: 1.3
              }}>⚙️ Üniversal Torna İşleri</h3>
              <ul style={{ 
                fontSize: 'clamp(14px, 2vw, 16px)', 
                color: 'var(--steel-dark)', 
                lineHeight: 1.6, 
                paddingLeft: 'clamp(15px, 2vw, 20px)',
                margin: 0
              }}>
                <li>Silindirik parça imalatı</li>
                <li>Dişli çarklar</li>
                <li>Miller ve akslar</li>
                <li>Özel torna işleri</li>
              </ul>
            </div>
            <div style={{ 
              background: 'var(--steel-light)', 
              padding: 'clamp(20px, 3vw, 30px)', 
              borderRadius: 12, 
              boxShadow: 'var(--shadow-steel)',
              border: '2px solid var(--steel-medium)'
            }}>
              <h3 style={{ 
                fontSize: 'clamp(18px, 2.5vw, 22px)', 
                fontWeight: 600, 
                marginBottom: 'clamp(12px, 2vw, 15px)', 
                color: 'var(--chrome-primary)',
                lineHeight: 1.3
              }}>🖥️ CNC İşleme Merkezi</h3>
              <ul style={{ 
                fontSize: 'clamp(14px, 2vw, 16px)', 
                color: 'var(--steel-dark)', 
                lineHeight: 1.6, 
                paddingLeft: 'clamp(15px, 2vw, 20px)',
                margin: 0
              }}>
                <li>3 eksen CNC işleme</li>
                <li>5 eksen CNC işleme</li>
                <li>Karmaşık geometri parçalar</li>
                <li>Hassas işleme</li>
              </ul>
            </div>
            <div style={{ 
              background: 'var(--steel-light)', 
              padding: 'clamp(20px, 3vw, 30px)', 
              borderRadius: 12, 
              boxShadow: 'var(--shadow-steel)',
              border: '2px solid var(--steel-medium)'
            }}>
              <h3 style={{ 
                fontSize: 'clamp(18px, 2.5vw, 22px)', 
                fontWeight: 600, 
                marginBottom: 'clamp(12px, 2vw, 15px)', 
                color: 'var(--chrome-primary)',
                lineHeight: 1.3
              }}>💻 CAD/CAM Hizmetleri</h3>
              <ul style={{ 
                fontSize: 'clamp(14px, 2vw, 16px)', 
                color: 'var(--steel-dark)', 
                lineHeight: 1.6, 
                paddingLeft: 'clamp(15px, 2vw, 20px)',
                margin: 0
              }}>
                <li>3D modelleme</li>
                <li>Teknik çizim</li>
                <li>CNC programlama</li>
                <li>Ürün tasarımı</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section style={{ 
        padding: 'clamp(40px, 6vw, 80px) clamp(16px, 4vw, 32px)', 
        background: 'var(--steel-light)', 
        color: 'var(--chrome-primary)' 
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: 'clamp(24px, 4vw, 36px)', 
            fontWeight: 700, 
            textAlign: 'center', 
            marginBottom: 'clamp(30px, 5vw, 60px)', 
            color: 'var(--chrome-primary)',
            lineHeight: 1.2
          }}>Değerlerimiz</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(250px, 35vw, 300px), 1fr))', 
            gap: 'clamp(20px, 3vw, 30px)' 
          }}>
            <div style={{ 
              textAlign: 'center', 
              padding: 'clamp(20px, 3vw, 30px) clamp(15px, 2vw, 20px)' 
            }}>
              <div style={{ 
                fontSize: 'clamp(36px, 6vw, 48px)', 
                marginBottom: 'clamp(15px, 2vw, 20px)' 
              }}>🏆</div>
              <h3 style={{ 
                fontSize: 'clamp(18px, 2.5vw, 22px)', 
                fontWeight: 600, 
                marginBottom: 'clamp(12px, 2vw, 15px)', 
                color: 'var(--chrome-primary)',
                lineHeight: 1.3
              }}>Kalite</h3>
              <p style={{ 
                fontSize: 'clamp(14px, 2vw, 16px)', 
                color: 'var(--steel-dark)', 
                lineHeight: 1.5,
                textAlign: 'justify'
              }}>
                Her projede en yüksek kalite standartlarını koruyarak müşteri memnuniyetini sağlamak.
              </p>
            </div>
            <div style={{ 
              textAlign: 'center', 
              padding: 'clamp(20px, 3vw, 30px) clamp(15px, 2vw, 20px)' 
            }}>
              <div style={{ 
                fontSize: 'clamp(36px, 6vw, 48px)', 
                marginBottom: 'clamp(15px, 2vw, 20px)' 
              }}>🤝</div>
              <h3 style={{ 
                fontSize: 'clamp(18px, 2.5vw, 22px)', 
                fontWeight: 600, 
                marginBottom: 'clamp(12px, 2vw, 15px)', 
                color: 'var(--chrome-primary)',
                lineHeight: 1.3
              }}>Güvenilirlik</h3>
              <p style={{ 
                fontSize: 'clamp(14px, 2vw, 16px)', 
                color: 'var(--steel-dark)', 
                lineHeight: 1.5,
                textAlign: 'justify'
              }}>
                64 yıllık tecrübemizle müşterilerimize güvenilir ve sürdürülebilir çözümler sunmak.
              </p>
            </div>
            <div style={{ 
              textAlign: 'center', 
              padding: 'clamp(20px, 3vw, 30px) clamp(15px, 2vw, 20px)' 
            }}>
              <div style={{ 
                fontSize: 'clamp(36px, 6vw, 48px)', 
                marginBottom: 'clamp(15px, 2vw, 20px)' 
              }}>⚡</div>
              <h3 style={{ 
                fontSize: 'clamp(18px, 2.5vw, 22px)', 
                fontWeight: 600, 
                marginBottom: 'clamp(12px, 2vw, 15px)', 
                color: 'var(--chrome-primary)',
                lineHeight: 1.3
              }}>Yenilikçilik</h3>
              <p style={{ 
                fontSize: 'clamp(14px, 2vw, 16px)', 
                color: 'var(--steel-dark)', 
                lineHeight: 1.5,
                textAlign: 'justify'
              }}>
                Modern teknoloji ve yenilikçi yaklaşımlarla sektörde öncü olmak.
              </p>
            </div>
            <div style={{ 
              textAlign: 'center', 
              padding: 'clamp(20px, 3vw, 30px) clamp(15px, 2vw, 20px)' 
            }}>
              <div style={{ 
                fontSize: 'clamp(36px, 6vw, 48px)', 
                marginBottom: 'clamp(15px, 2vw, 20px)' 
              }}>👥</div>
              <h3 style={{ 
                fontSize: 'clamp(18px, 2.5vw, 22px)', 
                fontWeight: 600, 
                marginBottom: 'clamp(12px, 2vw, 15px)', 
                color: 'var(--chrome-primary)',
                lineHeight: 1.3
              }}>Takım Ruhu</h3>
              <p style={{ 
                fontSize: 'clamp(14px, 2vw, 16px)', 
                color: 'var(--steel-dark)', 
                lineHeight: 1.5,
                textAlign: 'justify'
              }}>
                Uzman mühendislik kadromuzla birlikte çalışarak en iyi sonuçları elde etmek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sertifikalar */}
      <section style={{ 
        padding: 'clamp(40px, 6vw, 80px) clamp(16px, 4vw, 32px)', 
        background: 'var(--steel-gradient)', 
        color: 'var(--chrome-primary)' 
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: 'clamp(24px, 4vw, 36px)', 
            fontWeight: 700, 
            marginBottom: 'clamp(30px, 4vw, 50px)', 
            color: 'var(--chrome-primary)',
            lineHeight: 1.2
          }}>Kalite Sertifikalarımız</h2>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: 'clamp(20px, 3vw, 40px)', 
            flexWrap: 'wrap' 
          }}>
            <div style={{ 
              background: 'var(--steel-light)', 
              padding: 'clamp(20px, 3vw, 30px)', 
              borderRadius: 12, 
              boxShadow: 'var(--shadow-steel)', 
              minWidth: 'clamp(180px, 25vw, 200px)',
              border: '2px solid var(--steel-medium)'
            }}>
              <div style={{ 
                fontSize: 'clamp(36px, 6vw, 48px)', 
                marginBottom: 'clamp(12px, 2vw, 15px)' 
              }}>🏆</div>
              <h4 style={{ 
                fontSize: 'clamp(16px, 2.5vw, 20px)', 
                fontWeight: 600, 
                marginBottom: 'clamp(8px, 1vw, 10px)', 
                color: 'var(--chrome-primary)',
                lineHeight: 1.3
              }}>ISO 9001</h4>
              <p style={{ 
                fontSize: 'clamp(12px, 1.8vw, 14px)', 
                color: 'var(--steel-dark)',
                lineHeight: 1.4
              }}>Kalite Yönetim Sistemi</p>
            </div>
            <div style={{ 
              background: 'var(--steel-light)', 
              padding: 'clamp(20px, 3vw, 30px)', 
              borderRadius: 12, 
              boxShadow: 'var(--shadow-steel)', 
              minWidth: 'clamp(180px, 25vw, 200px)',
              border: '2px solid var(--steel-medium)'
            }}>
              <div style={{ 
                fontSize: 'clamp(36px, 6vw, 48px)', 
                marginBottom: 'clamp(12px, 2vw, 15px)' 
              }}>🌱</div>
              <h4 style={{ 
                fontSize: 'clamp(16px, 2.5vw, 20px)', 
                fontWeight: 600, 
                marginBottom: 'clamp(8px, 1vw, 10px)', 
                color: 'var(--chrome-primary)',
                lineHeight: 1.3
              }}>ISO 14001</h4>
              <p style={{ 
                fontSize: 'clamp(12px, 1.8vw, 14px)', 
                color: 'var(--steel-dark)',
                lineHeight: 1.4
              }}>Çevre Yönetim Sistemi</p>
            </div>
            <div style={{ 
              background: 'var(--steel-light)', 
              padding: 'clamp(20px, 3vw, 30px)', 
              borderRadius: 12, 
              boxShadow: 'var(--shadow-steel)', 
              minWidth: 'clamp(180px, 25vw, 200px)',
              border: '2px solid var(--steel-medium)'
            }}>
              <div style={{ 
                fontSize: 'clamp(36px, 6vw, 48px)', 
                marginBottom: 'clamp(12px, 2vw, 15px)' 
              }}>🛡️</div>
              <h4 style={{ 
                fontSize: 'clamp(16px, 2.5vw, 20px)', 
                fontWeight: 600, 
                marginBottom: 'clamp(8px, 1vw, 10px)', 
                color: 'var(--chrome-primary)',
                lineHeight: 1.3
              }}>ISO 45001</h4>
              <p style={{ 
                fontSize: 'clamp(12px, 1.8vw, 14px)', 
                color: 'var(--steel-dark)',
                lineHeight: 1.4
              }}>İş Sağlığı ve Güvenliği</p>
            </div>
          </div>
        </div>
      </section>

      {/* İletişim CTA */}
      <section style={{ 
        padding: 'clamp(40px, 6vw, 80px) clamp(16px, 4vw, 32px)', 
        background: 'var(--metallic-gradient)', 
        textAlign: 'center',
        borderTop: '3px solid var(--gold-accent)'
      }}>
        <div style={{ maxWidth: 'clamp(300px, 80vw, 800px)', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: 'clamp(24px, 4vw, 36px)', 
            fontWeight: 700, 
            marginBottom: 'clamp(15px, 2vw, 20px)', 
            color: 'var(--gold-bright)',
            lineHeight: 1.2
          }}>Bizimle İletişime Geçin</h2>
          <p style={{ 
            fontSize: 'clamp(14px, 2vw, 18px)', 
            lineHeight: 1.6, 
            color: '#f3f3f3', 
            marginBottom: 'clamp(25px, 4vw, 40px)',
            padding: '0 clamp(10px, 2vw, 20px)'
          }}>
            Makine yedek parça, kalıp üretimi veya CNC işleme projeleriniz için uzman ekibimizle görüşmek ister misiniz?
          </p>
          <button style={{ 
            background: 'var(--gold-gradient)', 
            color: 'var(--chrome-primary)', 
            border: '2px solid var(--gold-accent)', 
            padding: 'clamp(12px, 2vw, 16px) clamp(24px, 4vw, 32px)', 
            fontSize: 'clamp(14px, 2vw, 18px)', 
            fontWeight: 600, 
            borderRadius: 8, 
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: 'var(--shadow-steel)',
            minWidth: 'clamp(120px, 20vw, 150px)'
          }} onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
            Teklif Alın
          </button>
        </div>
      </section>
    </div>
  );
} 