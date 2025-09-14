import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function PrivacyPolicy() {
  return (
    <div style={{ 
      fontFamily: 'Inter, sans-serif', 
      background: 'var(--steel-light)', 
      minHeight: '100vh',
      padding: 'clamp(20px, 4vw, 40px) clamp(16px, 4vw, 32px)',
      color: 'var(--chrome-primary)',
      lineHeight: 1.6
    }}>
      <Helmet>
        <title>Gizlilik Politikası - IZMAK Makine Yedek Parça & Kalıp İmalatı</title>
        <meta name="description" content="IZMAK'ın kişisel verilerin korunması ve gizlilik politikası hakkında detaylı bilgiler." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://izmirmakinakalip.com/privacy-policy" />
      </Helmet>

      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto',
        background: 'var(--steel-gradient)',
        borderRadius: '16px',
        padding: 'clamp(24px, 5vw, 40px)',
        boxShadow: 'var(--shadow-steel)'
      }}>
        <h1 style={{ 
          fontSize: 'clamp(24px, 6vw, 32px)', 
          fontWeight: 700, 
          marginBottom: '24px', 
          color: 'var(--chrome-primary)',
          textAlign: 'center',
          background: 'var(--gold-gradient)',
          display: 'inline-block',
          borderRadius: '8px',
          padding: '8px 24px',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          Gizlilik Politikası ve KVKK Aydınlatma Metni
        </h1>

        <div style={{ marginBottom: '32px' }}>
          <p style={{ 
            fontSize: 'clamp(14px, 3vw, 16px)', 
            color: 'var(--steel-dark)', 
            marginBottom: '16px',
            fontStyle: 'italic'
          }}>
            <strong>Son Güncelleme:</strong> 14 Eylül 2024
          </p>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ 
            fontSize: 'clamp(18px, 4vw, 22px)', 
            fontWeight: 600, 
            marginBottom: '16px', 
            color: 'var(--chrome-primary)',
            borderBottom: '2px solid var(--gold-accent)',
            paddingBottom: '8px'
          }}>
            1. Genel Bilgiler
          </h2>
          <p style={{ 
            fontSize: 'clamp(14px, 3vw, 16px)', 
            color: 'var(--steel-dark)', 
            marginBottom: '16px' 
          }}>
            IZMAK Makine Yedek Parça & Kalıp İmalatı ("Şirket" veya "Biz"), 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında, kişisel verilerinizin işlenmesi konusunda aşağıdaki bilgileri sunmaktadır.
          </p>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ 
            fontSize: 'clamp(18px, 4vw, 22px)', 
            fontWeight: 600, 
            marginBottom: '16px', 
            color: 'var(--chrome-primary)',
            borderBottom: '2px solid var(--gold-accent)',
            paddingBottom: '8px'
          }}>
            2. Toplanan Kişisel Veriler
          </h2>
          <p style={{ 
            fontSize: 'clamp(14px, 3vw, 16px)', 
            color: 'var(--steel-dark)', 
            marginBottom: '16px' 
          }}>
            Web sitemiz üzerinden aşağıdaki kişisel verilerinizi toplayabiliriz:
          </p>
          <ul style={{ 
            fontSize: 'clamp(14px, 3vw, 16px)', 
            color: 'var(--steel-dark)', 
            marginLeft: '20px',
            marginBottom: '16px'
          }}>
            <li>Ad, soyad</li>
            <li>E-posta adresi</li>
            <li>Telefon numarası</li>
            <li>İletişim mesajları</li>
            <li>IP adresi ve çerez bilgileri</li>
          </ul>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ 
            fontSize: 'clamp(18px, 4vw, 22px)', 
            fontWeight: 600, 
            marginBottom: '16px', 
            color: 'var(--chrome-primary)',
            borderBottom: '2px solid var(--gold-accent)',
            paddingBottom: '8px'
          }}>
            3. Verilerin İşlenme Amaçları
          </h2>
          <p style={{ 
            fontSize: 'clamp(14px, 3vw, 16px)', 
            color: 'var(--steel-dark)', 
            marginBottom: '16px' 
          }}>
            Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:
          </p>
          <ul style={{ 
            fontSize: 'clamp(14px, 3vw, 16px)', 
            color: 'var(--steel-dark)', 
            marginLeft: '20px',
            marginBottom: '16px'
          }}>
            <li>Müşteri hizmetleri sunumu</li>
            <li>Teklif ve bilgi taleplerinin değerlendirilmesi</li>
            <li>Web sitesi performansının iyileştirilmesi</li>
            <li>Yasal yükümlülüklerin yerine getirilmesi</li>
            <li>İletişim ve pazarlama faaliyetleri</li>
          </ul>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ 
            fontSize: 'clamp(18px, 4vw, 22px)', 
            fontWeight: 600, 
            marginBottom: '16px', 
            color: 'var(--chrome-primary)',
            borderBottom: '2px solid var(--gold-accent)',
            paddingBottom: '8px'
          }}>
            4. Veri Güvenliği
          </h2>
          <p style={{ 
            fontSize: 'clamp(14px, 3vw, 16px)', 
            color: 'var(--steel-dark)', 
            marginBottom: '16px' 
          }}>
            Kişisel verilerinizin güvenliği için uygun teknik ve idari tedbirleri almaktayız. Verileriniz SSL şifreleme ile korunmakta ve sadece yetkili personelimiz tarafından erişilebilmektedir.
          </p>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ 
            fontSize: 'clamp(18px, 4vw, 22px)', 
            fontWeight: 600, 
            marginBottom: '16px', 
            color: 'var(--chrome-primary)',
            borderBottom: '2px solid var(--gold-accent)',
            paddingBottom: '8px'
          }}>
            5. Haklarınız
          </h2>
          <p style={{ 
            fontSize: 'clamp(14px, 3vw, 16px)', 
            color: 'var(--steel-dark)', 
            marginBottom: '16px' 
          }}>
            KVKK kapsamında aşağıdaki haklara sahipsiniz:
          </p>
          <ul style={{ 
            fontSize: 'clamp(14px, 3vw, 16px)', 
            color: 'var(--steel-dark)', 
            marginLeft: '20px',
            marginBottom: '16px'
          }}>
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
            <li>İşlenen verileriniz hakkında bilgi talep etme</li>
            <li>Verilerinizin işlenme amacını öğrenme</li>
            <li>Verilerinizin silinmesini veya yok edilmesini isteme</li>
            <li>Verilerinizin düzeltilmesini isteme</li>
          </ul>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ 
            fontSize: 'clamp(18px, 4vw, 22px)', 
            fontWeight: 600, 
            marginBottom: '16px', 
            color: 'var(--chrome-primary)',
            borderBottom: '2px solid var(--gold-accent)',
            paddingBottom: '8px'
          }}>
            6. İletişim
          </h2>
          <p style={{ 
            fontSize: 'clamp(14px, 3vw, 16px)', 
            color: 'var(--steel-dark)', 
            marginBottom: '16px' 
          }}>
            KVKK kapsamındaki haklarınızı kullanmak veya sorularınız için bizimle iletişime geçebilirsiniz:
          </p>
          <div style={{ 
            background: 'var(--steel-light)', 
            padding: '16px', 
            borderRadius: '8px',
            marginBottom: '16px'
          }}>
            <p style={{ 
              fontSize: 'clamp(14px, 3vw, 16px)', 
              color: 'var(--steel-dark)', 
              margin: '4px 0'
            }}>
              <strong>E-posta:</strong> info@izmak.com
            </p>
            <p style={{ 
              fontSize: 'clamp(14px, 3vw, 16px)', 
              color: 'var(--steel-dark)', 
              margin: '4px 0'
            }}>
              <strong>Telefon:</strong> +90-532-134-78-19
            </p>
            <p style={{ 
              fontSize: 'clamp(14px, 3vw, 16px)', 
              color: 'var(--steel-dark)', 
              margin: '4px 0'
            }}>
              <strong>Adres:</strong> 722/5 Sk No:2, Buca, İzmir
            </p>
          </div>
        </div>

        <div style={{ 
          background: 'var(--gold-gradient)', 
          padding: '16px', 
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <p style={{ 
            fontSize: 'clamp(14px, 3vw, 16px)', 
            color: 'var(--chrome-primary)', 
            margin: 0,
            fontWeight: 600
          }}>
            Bu gizlilik politikası, IZMAK Makine Yedek Parça & Kalıp İmalatı tarafından hazırlanmıştır.
          </p>
        </div>
      </div>
    </div>
  );
}
