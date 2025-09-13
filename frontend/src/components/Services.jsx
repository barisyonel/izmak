import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Hizmetlerimiz - İZMAK</title>
        <meta name="description" content="İZMAK olarak sunduğumuz makine yedek parça, kalıp imalatı, özel tasarım ve teknik destek hizmetleri." />
      </Helmet>
      
      <div style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        padding: '120px 0 80px'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 20px' 
        }}>
          <div style={{ 
            textAlign: 'center', 
            marginBottom: '80px' 
          }}>
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
              fontWeight: '700', 
              color: '#2c3e50', 
              marginBottom: '20px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
            }}>
              Hizmetlerimiz
            </h1>
            <p style={{ 
              fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)', 
              color: '#7f8c8d', 
              maxWidth: '600px', 
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Endüstriyel ihtiyaçlarınıza yönelik kapsamlı çözümler sunuyoruz
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '40px',
            marginBottom: '80px'
          }}>
            {/* Makine Yedek Parça */}
            <div style={{ 
              background: '#fff', 
              borderRadius: '20px', 
              padding: '40px 30px', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
              border: '1px solid #e1e8ed'
            }}>
              <div style={{ 
                fontSize: '4rem', 
                marginBottom: '20px',
                textAlign: 'center'
              }}>
                ⚙️
              </div>
              <h3 style={{ 
                fontSize: '1.8rem', 
                fontWeight: '700', 
                color: '#2c3e50', 
                marginBottom: '20px',
                textAlign: 'center'
              }}>
                Makine Yedek Parça
              </h3>
              <p style={{ 
                color: '#7f8c8d', 
                lineHeight: '1.6', 
                marginBottom: '25px',
                textAlign: 'center'
              }}>
                Endüstriyel makineleriniz için kaliteli yedek parçalar. Orijinal kalitede, 
                hızlı teslimat garantisi ile.
              </p>
              <ul style={{ 
                color: '#34495e', 
                paddingLeft: '20px',
                lineHeight: '1.8'
              }}>
                <li>CNC Makine Parçaları</li>
                <li>Hidrolik Sistem Parçaları</li>
                <li>Elektrik Motor Parçaları</li>
                <li>Özel İmalat Parçalar</li>
                <li>Hızlı Teslimat</li>
              </ul>
            </div>

            {/* Kalıp İmalatı */}
            <div style={{ 
              background: '#fff', 
              borderRadius: '20px', 
              padding: '40px 30px', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
              border: '1px solid #e1e8ed'
            }}>
              <div style={{ 
                fontSize: '4rem', 
                marginBottom: '20px',
                textAlign: 'center'
              }}>
                🔧
              </div>
              <h3 style={{ 
                fontSize: '1.8rem', 
                fontWeight: '700', 
                color: '#2c3e50', 
                marginBottom: '20px',
                textAlign: 'center'
              }}>
                Kalıp İmalatı
              </h3>
              <p style={{ 
                color: '#7f8c8d', 
                lineHeight: '1.6', 
                marginBottom: '25px',
                textAlign: 'center'
              }}>
                Profesyonel kalıp tasarımı ve imalatı. Yüksek hassasiyet, 
                dayanıklılık ve verimlilik odaklı çözümler.
              </p>
              <ul style={{ 
                color: '#34495e', 
                paddingLeft: '20px',
                lineHeight: '1.8'
              }}>
                <li>Enjeksiyon Kalıpları</li>
                <li>Döküm Kalıpları</li>
                <li>Pres Kalıpları</li>
                <li>Özel Tasarım Kalıplar</li>
                <li>Kalite Kontrol</li>
              </ul>
            </div>

            {/* Özel Tasarım */}
            <div style={{ 
              background: '#fff', 
              borderRadius: '20px', 
              padding: '40px 30px', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
              border: '1px solid #e1e8ed'
            }}>
              <div style={{ 
                fontSize: '4rem', 
                marginBottom: '20px',
                textAlign: 'center'
              }}>
                🎨
              </div>
              <h3 style={{ 
                fontSize: '1.8rem', 
                fontWeight: '700', 
                color: '#2c3e50', 
                marginBottom: '20px',
                textAlign: 'center'
              }}>
                Özel Tasarım
              </h3>
              <p style={{ 
                color: '#7f8c8d', 
                lineHeight: '1.6', 
                marginBottom: '25px',
                textAlign: 'center'
              }}>
                İhtiyaçlarınıza özel tasarım ve imalat çözümleri. 
                Yaratıcılık ve teknolojiyi birleştiriyoruz.
              </p>
              <ul style={{ 
                color: '#34495e', 
                paddingLeft: '20px',
                lineHeight: '1.8'
              }}>
                <li>3D Tasarım ve Modelleme</li>
                <li>Prototip Geliştirme</li>
                <li>Özel Makine Tasarımı</li>
                <li>Endüstriyel Tasarım</li>
                <li>Danışmanlık Hizmeti</li>
              </ul>
            </div>

            {/* Teknik Destek */}
            <div style={{ 
              background: '#fff', 
              borderRadius: '20px', 
              padding: '40px 30px', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
              border: '1px solid #e1e8ed'
            }}>
              <div style={{ 
                fontSize: '4rem', 
                marginBottom: '20px',
                textAlign: 'center'
              }}>
                🛠️
              </div>
              <h3 style={{ 
                fontSize: '1.8rem', 
                fontWeight: '700', 
                color: '#2c3e50', 
                marginBottom: '20px',
                textAlign: 'center'
              }}>
                Teknik Destek
              </h3>
              <p style={{ 
                color: '#7f8c8d', 
                lineHeight: '1.6', 
                marginBottom: '25px',
                textAlign: 'center'
              }}>
                7/24 teknik destek hizmeti. Uzman ekibimizle 
                her zaman yanınızdayız.
              </p>
              <ul style={{ 
                color: '#34495e', 
                paddingLeft: '20px',
                lineHeight: '1.8'
              }}>
                <li>7/24 Teknik Destek</li>
                <li>Uzaktan Bakım</li>
                <li>Onarım Hizmetleri</li>
                <li>Eğitim Programları</li>
                <li>Yedek Parça Desteği</li>
              </ul>
            </div>
          </div>

          {/* İletişim Bölümü */}
          <div style={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
            borderRadius: '20px', 
            padding: '60px 40px', 
            textAlign: 'center',
            color: '#fff',
            boxShadow: '0 15px 35px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700', 
              marginBottom: '20px' 
            }}>
              Hizmetlerimiz Hakkında Daha Fazla Bilgi
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              marginBottom: '30px', 
              opacity: '0.9',
              maxWidth: '600px',
              margin: '0 auto 30px'
            }}>
              Uzman ekibimizle birlikte projelerinizi hayata geçiriyoruz. 
              Detaylı bilgi için bizimle iletişime geçin.
            </p>
            <div style={{ 
              display: 'flex', 
              gap: '20px', 
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a 
                href="tel:+905321347819" 
                style={{ 
                  background: '#fff', 
                  color: '#667eea', 
                  padding: '15px 30px', 
                  borderRadius: '50px', 
                  textDecoration: 'none', 
                  fontWeight: '700',
                  fontSize: '1.1rem',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                }}
              >
                📞 Hemen Ara
              </a>
              <a 
                href="/contact" 
                style={{ 
                  background: 'transparent', 
                  color: '#fff', 
                  padding: '15px 30px', 
                  borderRadius: '50px', 
                  textDecoration: 'none', 
                  fontWeight: '700',
                  fontSize: '1.1rem',
                  border: '2px solid #fff',
                  transition: 'all 0.3s ease'
                }}
              >
                📧 İletişim Formu
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
