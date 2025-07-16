import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get(`/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(() => setError(true));
  }, [id]);

  if (error) return <div style={{ textAlign: 'center', color: 'red', marginTop: 60 }}>Üretim alanı bulunamadı.</div>;
  if (!product) return <div style={{ textAlign: 'center', marginTop: 60 }}>Yükleniyor...</div>;
  return (
    <div
      style={{
        maxWidth: 500,
        margin: '40px auto',
        fontFamily: 'Inter, sans-serif',
        background: 'var(--steel-gradient)',
        borderRadius: 18,
        boxShadow: '0 4px 32px #0002',
        padding: 0,
        border: '2px solid var(--steel-medium)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: 520,
        overflow: 'hidden',
      }}
    >
      <div style={{ width: '100%', height: '55%', minHeight: 260, maxHeight: 320, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.7)' }}>
        <img
          src={product.imageUrl}
          alt={product.name}
          style={{
            width: '95%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: 14,
            boxShadow: 'var(--shadow-steel)',
            border: '2px solid var(--steel-medium)',
            background: '#fff',
          }}
        />
      </div>
      <div style={{
        flex: '1 1 auto',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '32px 24px 24px 24px',
        boxSizing: 'border-box',
      }}>
        <h2 style={{ fontSize: 26, marginBottom: 10, color: 'var(--chrome-primary)', fontWeight: 700, textAlign: 'center' }}>{product.name}</h2>
        <div style={{ fontSize: 20, color: 'var(--gold-accent)', marginBottom: 16, fontWeight: 600 }}>{product.price} TL</div>
        <p style={{ fontSize: 16, color: 'var(--steel-dark)', marginBottom: 24, lineHeight: 1.7, textAlign: 'center' }}>{product.description}</p>
        <a
          href="/contact"
          style={{
            background: 'var(--gold-gradient)',
            color: 'var(--chrome-primary)',
            padding: '14px 38px',
            borderRadius: 10,
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: 18,
            display: 'inline-block',
            boxShadow: 'var(--shadow-steel)',
            border: '2px solid var(--gold-accent)',
            transition: 'all 0.3s ease',
          }}
        >Teklif Al</a>
      </div>
    </div>
  );
} 