import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('/api/products').then(res => setProducts(res.data));
  }, []);
  return (
    <div style={{ maxWidth: 1100, margin: '40px auto', fontFamily: 'Inter, sans-serif' }}>
      <Helmet>
        <title>Üretim Alanlarımız | IZMAK Makine Yedek Parça & Kalıp İmalatı</title>
        <meta name="description" content="Makine yedek parça, kalıp üretimi ve CNC işleme hizmetlerimizi inceleyin. İzmak, 1960'tan beri endüstriyel çözümler sunar." />
        <meta property="og:title" content="Üretim Alanlarımız | IZMAK Makine Yedek Parça & Kalıp İmalatı" />
        <meta property="og:description" content="Makine yedek parça, kalıp üretimi ve CNC işleme hizmetlerimizi inceleyin. İzmak, 1960'tan beri endüstriyel çözümler sunar." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://izmak.com/products" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:site_name" content="IZMAK" />
        <meta property="og:locale" content="tr_TR" />
      </Helmet>
      <h1 style={{ textAlign: 'center', marginBottom: 8, color: 'var(--chrome-primary)' }}>Üretim Alanlarımız</h1>
      <p style={{ textAlign: 'center', color: 'var(--steel-dark)', marginBottom: 32, fontSize: 18 }}>
        Makine yedek parça, kalıp üretimi ve CNC işleme hizmetlerimizi aşağıda inceleyebilirsiniz.
      </p>
      {Array.isArray(products) && products.length === 0 ? (
        <div style={{ textAlign: 'center', color: 'var(--steel-dark)', fontSize: 20, marginTop: 60 }}>Henüz proje eklenmedi.</div>
      ) : (
        <div
          className="product-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 24,
            justifyItems: 'center',
            alignItems: 'stretch',
            maxWidth: 800,
            margin: '0 auto',
          }}
        >
          {Array.isArray(products) && products.map(p => (
            <div
              key={p._id}
              className="product-card"
              style={{
                border: '2px solid var(--steel-medium)',
                borderRadius: 14,
                padding: 16,
                background: 'var(--steel-gradient)',
                boxShadow: 'var(--shadow-steel)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minHeight: 320,
                maxWidth: 340,
                width: '100%',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                height: '100%',
              }}
              onClick={() => navigate(`/products/${p._id}`)}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-5px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flex: '0 0 auto', height: '55%' }}>
                <img
                  src={p.imageUrl}
                  alt={p.name}
                  style={{
                    width: '95%',
                    height: '100%',
                    maxHeight: '100%',
                    objectFit: 'cover',
                    borderRadius: 10,
                    marginBottom: 12,
                    boxShadow: 'var(--shadow-steel)',
                    border: '2px solid var(--steel-medium)',
                  }}
                />
              </div>
              <div style={{ flex: '1 1 auto', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
                <h3 style={{ margin: '8px 0 4px', fontSize: 20, color: 'var(--chrome-primary)', fontWeight: 600 }}>{p.name}</h3>
                <p style={{ fontSize: 15, color: 'var(--steel-dark)', textAlign: 'center', lineHeight: 1.5 }}>{p.description}</p>
                <div style={{ fontWeight: 'bold', color: 'var(--gold-accent)', fontSize: 18, marginTop: 8 }}>{p.price ? p.price + ' TL' : ''}</div>
              </div>
            </div>
          ))}
        </div>
      )}
      <style>{`
        @media (min-width: 901px) {
          .product-card {
            min-height: 440px !important;
            height: 440px !important;
          }
        }
        @media (max-width: 900px) {
          .product-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
            max-width: 98vw !important;
          }
        }
        @media (max-width: 600px) {
          .product-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
            max-width: 100vw !important;
          }
        }
      `}</style>
    </div>
  );
} 