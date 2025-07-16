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
        padding: '120px 32px 80px', 
        textAlign: 'center', 
        background: 'var(--metallic-gradient)',
        borderBottom: '3px solid var(--gold-accent)'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h1 style={{ fontSize: 48, fontWeight: 700, marginBottom: 20, color: 'var(--gold-bright)' }}>IZMAK Hakkında</h1>
          <p style={{ fontSize: 20, lineHeight: 1.6, color: '#f3f3f3', maxWidth: 800, margin: '0 auto' }}>
            1960'tan beri makine yedek parça imalatı, kalıp üretimi ve CNC işleme sektöründe faaliyet gösteren IZMAK, Türkiye'nin öncü üretim firmalarından biridir.
          </p>
        </div>
      </section>

      {/* Tarihçe Bölümü */}
      <section style={{ padding: '80px 32px', background: 'var(--steel-gradient)', color: 'var(--chrome-primary)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 60, alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 30, color: 'var(--chrome-primary)' }}>64 Yıllık Tecrübe</h2>
              <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--steel-dark)', marginBottom: 20 }}>
                1960 yılında kurulan IZMAK, yarım asrı aşkın süredir makine yedek parça imalatı, plastik enjeksiyon kalıpları, 
                kesme sıvama kalıpları ve CNC işleme sektöründe faaliyet göstermektedir.
              </p>
              <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--steel-dark)', marginBottom: 20 }}>
                Uşak Üniversitesi Makine Mühendisliği mezunu uzmanlarımız ile modern teknoloji ve geleneksel ustalığı 
                bir araya getirerek, sektörde güvenilir bir çözüm ortağı olmayı başardık.
              </p>
              <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--steel-dark)' }}>
                Bugün, ISO 9001, 14001 ve 45001 sertifikalarımız ile kalite, çevre ve iş güvenliği standartlarında 
                hizmet veren, sektörün önde gelen firmalarından biriyiz.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 120, marginBottom: 20 }}>🏭</div>
              <div style={{ fontSize: 48, fontWeight: 700, color: 'var(--gold-accent)', marginBottom: 10 }}>1960</div>
              <div style={{ fontSize: 18, color: 'var(--steel-dark)' }}>Kuruluş Yılı</div>
            </div>
          </div>
        </div>
      </section>

      {/* Misyon & Vizyon */}
      <section style={{ padding: '80px 32px', background: 'var(--steel-light)', color: 'var(--chrome-primary)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, textAlign: 'center', marginBottom: 60, color: 'var(--chrome-primary)' }}>Misyon & Vizyon</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: 40 }}>
            <div style={{ 
              background: 'var(--steel-gradient)', 
              padding: '40px', 
              borderRadius: 12, 
              boxShadow: 'var(--shadow-steel)',
              border: '2px solid var(--steel-medium)'
            }}>
              <h3 style={{ fontSize: 28, fontWeight: 600, marginBottom: 20, color: 'var(--chrome-primary)' }}>🎯 Misyonumuz</h3>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--steel-dark)' }}>
                Müşterilerimizin ihtiyaçlarına en uygun makine yedek parça, kalıp ve CNC çözümlerini geliştirerek, 
                yüksek kaliteli üretim hizmeti sunmak. Modern teknoloji ve uzman mühendislik 
                kadromuzla sektörde güvenilir bir çözüm ortağı olmak.
              </p>
            </div>
            <div style={{ 
              background: 'var(--steel-gradient)', 
              padding: '40px', 
              borderRadius: 12, 
              boxShadow: 'var(--shadow-steel)',
              border: '2px solid var(--steel-medium)'
            }}>
              <h3 style={{ fontSize: 28, fontWeight: 600, marginBottom: 20, color: 'var(--chrome-primary)' }}>🔮 Vizyonumuz</h3>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--steel-dark)' }}>
                Makine yedek parça imalatı, kalıp üretimi ve CNC işleme sektöründe Türkiye'nin önde gelen firmalarından biri olarak, 
                uluslararası standartlarda hizmet veren, yenilikçi ve sürdürülebilir 
                üretim çözümleri sunan bir marka haline gelmek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hizmet Alanları Detay */}
      <section style={{ padding: '80px 32px', background: 'var(--steel-gradient)', color: 'var(--chrome-primary)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, textAlign: 'center', marginBottom: 60, color: 'var(--chrome-primary)' }}>Hizmet Alanlarımız</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 30 }}>
            <div style={{ 
              background: 'var(--steel-light)', 
              padding: '30px', 
              borderRadius: 12, 
              boxShadow: 'var(--shadow-steel)',
              border: '2px solid var(--steel-medium)'
            }}>
              <h3 style={{ fontSize: 22, fontWeight: 600, marginBottom: 15, color: 'var(--chrome-primary)' }}>🔧 Makine Yedek Parça İmalatı</h3>
              <ul style={{ fontSize: 16, color: 'var(--steel-dark)', lineHeight: 1.6, paddingLeft: 20 }}>
                <li>Endüstriyel makine parçaları</li>
                <li>Hassas ölçülü üretim</li>
                <li>Prototip parça imalatı</li>
                <li>Seri üretim parçaları</li>
              </ul>
            </div>
            <div style={{ 
              background: 'var(--steel-light)', 
              padding: '30px', 
              borderRadius: 12, 
              boxShadow: 'var(--shadow-steel)',
              border: '2px solid var(--steel-medium)'
            }}>
              <h3 style={{ fontSize: 22, fontWeight: 600, marginBottom: 15, color: 'var(--chrome-primary)' }}>🏭 Plastik Enjeksiyon Kalıpları</h3>
              <ul style={{ fontSize: 16, color: 'var(--steel-dark)', lineHeight: 1.6, paddingLeft: 20 }}>
                <li>Kalıp tasarımı ve imalatı</li>
                <li>Seri üretim kalıpları</li>
                <li>Prototip kalıpları</li>
                <li>Kalıp bakım ve onarım</li>
              </ul>
            </div>
            <div style={{ 
              background: 'var(--steel-light)', 
              padding: '30px', 
              borderRadius: 12, 
              boxShadow: 'var(--shadow-steel)',
              border: '2px solid var(--steel-medium)'
            }}>
              <h3 style={{ fontSize: 22, fontWeight: 600, marginBottom: 15, color: 'var(--chrome-primary)' }}>✂️ Kesme Sıvama Kalıpları</h3>
              <ul style={{ fontSize: 16, color: 'var(--steel-dark)', lineHeight: 1.6, paddingLeft: 20 }}>
                <li>Metal kesme kalıpları</li>
                <li>Sıvama ve şekillendirme</li>
                <li>Hassas kesim kalıpları</li>
                <li>Özel geometri kalıpları</li>
              </ul>
            </div>
            <div style={{ 
              background: 'var(--steel-light)', 
              padding: '30px', 
              borderRadius: 12, 
              boxShadow: 'var(--shadow-steel)',
              border: '2px solid var(--steel-medium)'
            }}>
              <h3 style={{ fontSize: 22, fontWeight: 600, marginBottom: 15, color: 'var(--chrome-primary)' }}>⚙️ Üniversal Torna İşleri</h3>
              <ul style={{ fontSize: 16, color: 'var(--steel-dark)', lineHeight: 1.6, paddingLeft: 20 }}>
                <li>Silindirik parça imalatı</li>
                <li>Dişli çarklar</li>
                <li>Miller ve akslar</li>
                <li>Özel torna işleri</li>
              </ul>
            </div>
            <div style={{ 
              background: 'var(--steel-light)', 
              padding: '30px', 
              borderRadius: 12, 
              boxShadow: 'var(--shadow-steel)',
              border: '2px solid var(--steel-medium)'
            }}>
              <h3 style={{ fontSize: 22, fontWeight: 600, marginBottom: 15, color: 'var(--chrome-primary)' }}>🖥️ CNC İşleme Merkezi</h3>
              <ul style={{ fontSize: 16, color: 'var(--steel-dark)', lineHeight: 1.6, paddingLeft: 20 }}>
                <li>3 eksen CNC işleme</li>
                <li>5 eksen CNC işleme</li>
                <li>Karmaşık geometri parçalar</li>
                <li>Hassas işleme</li>
              </ul>
            </div>
            <div style={{ 
              background: 'var(--steel-light)', 
              padding: '30px', 
              borderRadius: 12, 
              boxShadow: 'var(--shadow-steel)',
              border: '2px solid var(--steel-medium)'
            }}>
              <h3 style={{ fontSize: 22, fontWeight: 600, marginBottom: 15, color: 'var(--chrome-primary)' }}>💻 CAD/CAM Hizmetleri</h3>
              <ul style={{ fontSize: 16, color: 'var(--steel-dark)', lineHeight: 1.6, paddingLeft: 20 }}>
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
      <section style={{ padding: '80px 32px', background: 'var(--steel-light)', color: 'var(--chrome-primary)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, textAlign: 'center', marginBottom: 60, color: 'var(--chrome-primary)' }}>Değerlerimiz</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 30 }}>
            <div style={{ textAlign: 'center', padding: '30px 20px' }}>
              <div style={{ fontSize: 48, marginBottom: 20 }}>🏆</div>
              <h3 style={{ fontSize: 22, fontWeight: 600, marginBottom: 15, color: 'var(--chrome-primary)' }}>Kalite</h3>
              <p style={{ fontSize: 16, color: 'var(--steel-dark)', lineHeight: 1.5 }}>
                Her projede en yüksek kalite standartlarını koruyarak müşteri memnuniyetini sağlamak.
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '30px 20px' }}>
              <div style={{ fontSize: 48, marginBottom: 20 }}>🤝</div>
              <h3 style={{ fontSize: 22, fontWeight: 600, marginBottom: 15, color: 'var(--chrome-primary)' }}>Güvenilirlik</h3>
              <p style={{ fontSize: 16, color: 'var(--steel-dark)', lineHeight: 1.5 }}>
                64 yıllık tecrübemizle müşterilerimize güvenilir ve sürdürülebilir çözümler sunmak.
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '30px 20px' }}>
              <div style={{ fontSize: 48, marginBottom: 20 }}>⚡</div>
              <h3 style={{ fontSize: 22, fontWeight: 600, marginBottom: 15, color: 'var(--chrome-primary)' }}>Yenilikçilik</h3>
              <p style={{ fontSize: 16, color: 'var(--steel-dark)', lineHeight: 1.5 }}>
                Modern teknoloji ve yenilikçi yaklaşımlarla sektörde öncü olmak.
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '30px 20px' }}>
              <div style={{ fontSize: 48, marginBottom: 20 }}>👥</div>
              <h3 style={{ fontSize: 22, fontWeight: 600, marginBottom: 15, color: 'var(--chrome-primary)' }}>Takım Ruhu</h3>
              <p style={{ fontSize: 16, color: 'var(--steel-dark)', lineHeight: 1.5 }}>
                Uzman mühendislik kadromuzla birlikte çalışarak en iyi sonuçları elde etmek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sertifikalar */}
      <section style={{ padding: '80px 32px', background: 'var(--steel-gradient)', color: 'var(--chrome-primary)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 50, color: 'var(--chrome-primary)' }}>Kalite Sertifikalarımız</h2>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 40, flexWrap: 'wrap' }}>
            <div style={{ 
              background: 'var(--steel-light)', 
              padding: '30px', 
              borderRadius: 12, 
              boxShadow: 'var(--shadow-steel)', 
              minWidth: 200,
              border: '2px solid var(--steel-medium)'
            }}>
              <div style={{ fontSize: 48, marginBottom: 15 }}>🏆</div>
              <h4 style={{ fontSize: 20, fontWeight: 600, marginBottom: 10, color: 'var(--chrome-primary)' }}>ISO 9001</h4>
              <p style={{ fontSize: 14, color: 'var(--steel-dark)' }}>Kalite Yönetim Sistemi</p>
            </div>
            <div style={{ 
              background: 'var(--steel-light)', 
              padding: '30px', 
              borderRadius: 12, 
              boxShadow: 'var(--shadow-steel)', 
              minWidth: 200,
              border: '2px solid var(--steel-medium)'
            }}>
              <div style={{ fontSize: 48, marginBottom: 15 }}>🌱</div>
              <h4 style={{ fontSize: 20, fontWeight: 600, marginBottom: 10, color: 'var(--chrome-primary)' }}>ISO 14001</h4>
              <p style={{ fontSize: 14, color: 'var(--steel-dark)' }}>Çevre Yönetim Sistemi</p>
            </div>
            <div style={{ 
              background: 'var(--steel-light)', 
              padding: '30px', 
              borderRadius: 12, 
              boxShadow: 'var(--shadow-steel)', 
              minWidth: 200,
              border: '2px solid var(--steel-medium)'
            }}>
              <div style={{ fontSize: 48, marginBottom: 15 }}>🛡️</div>
              <h4 style={{ fontSize: 20, fontWeight: 600, marginBottom: 10, color: 'var(--chrome-primary)' }}>ISO 45001</h4>
              <p style={{ fontSize: 14, color: 'var(--steel-dark)' }}>İş Sağlığı ve Güvenliği</p>
            </div>
          </div>
        </div>
      </section>

      {/* İletişim CTA */}
      <section style={{ 
        padding: '80px 32px', 
        background: 'var(--metallic-gradient)', 
        textAlign: 'center',
        borderTop: '3px solid var(--gold-accent)'
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 20, color: 'var(--gold-bright)' }}>Bizimle İletişime Geçin</h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: '#f3f3f3', marginBottom: 40 }}>
            Makine yedek parça, kalıp üretimi veya CNC işleme projeleriniz için uzman ekibimizle görüşmek ister misiniz?
          </p>
          <button style={{ 
            background: 'var(--gold-gradient)', 
            color: 'var(--chrome-primary)', 
            border: '2px solid var(--gold-accent)', 
            padding: '16px 32px', 
            fontSize: 18, 
            fontWeight: 600, 
            borderRadius: 8, 
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: 'var(--shadow-steel)'
          }} onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
            Teklif Alın
          </button>
        </div>
      </section>
    </div>
  );
} 