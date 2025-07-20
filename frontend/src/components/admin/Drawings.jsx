import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_ENDPOINTS } from '../../config';

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/ddm7ouuwk/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'deneme';

export default function Drawings() {
  const [drawings, setDrawings] = useState([]);
  const [drawingName, setDrawingName] = useState('');
  const [drawingImageFile, setDrawingImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetchDrawings();
  }, []);

  const fetchDrawings = async () => {
    try {
      const res = await axios.get(API_ENDPOINTS.DRAWINGS);
      setDrawings(res.data);
    } catch (err) {
      console.error('Drawings fetch error:', err);
    }
  };

  const uploadImageToCloudinary = async (file) => {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    setUploading(true);
    const res = await fetch(CLOUDINARY_URL, {
      method: 'POST',
      body: data,
    });
    setUploading(false);
    const result = await res.json();
    return result.secure_url;
  };

  const handleDrawingSubmit = async (e) => {
    e.preventDefault();
    if (!drawingName || !drawingImageFile) {
      alert('Tüm alanları doldurun');
      return;
    }

    try {
      const imageUrl = await uploadImageToCloudinary(drawingImageFile);
      await axios.post(API_ENDPOINTS.DRAWINGS, {
        name: drawingName,
        imageUrl
      }, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
      });

      alert('Proje çizimi başarıyla eklendi!');
      setDrawingName('');
      setDrawingImageFile(null);
      fetchDrawings();
    } catch (err) {
      console.error('Drawing add error:', err);
      alert('Proje çizimi eklenirken hata oluştu');
    }
  };

  const deleteDrawing = async (id) => {
    if (!window.confirm('Bu proje çizimini silmek istediğinizden emin misiniz?')) return;

    try {
      await axios.delete(`${API_ENDPOINTS.DRAWINGS}/${id}`, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
      });
      alert('Proje çizimi başarıyla silindi!');
      fetchDrawings();
    } catch (err) {
      console.error('Drawing delete error:', err);
      alert('Proje çizimi silinirken hata oluştu');
    }
  };

  return (
    <div style={{ 
      background: '#fff', 
      borderRadius: '12px', 
      padding: '40px', 
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)' 
    }}>
      <h1 style={{ 
        fontSize: '32px', 
        fontWeight: '700', 
        color: '#2c3e50', 
        marginBottom: '40px' 
      }}>
        Proje Çizimleri
      </h1>

      <form onSubmit={handleDrawingSubmit} style={{ maxWidth: '600px', marginBottom: '40px' }}>
        <div style={{ marginBottom: '24px' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '8px', 
            fontWeight: '600', 
            color: '#2c3e50',
            fontSize: '16px'
          }}>
            Proje Adı
          </label>
          <input
            type="text"
            value={drawingName}
            onChange={(e) => setDrawingName(e.target.value)}
            placeholder="Proje adını girin"
            style={{
              width: '100%',
              padding: '16px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
            required
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '8px', 
            fontWeight: '600', 
            color: '#2c3e50',
            fontSize: '16px'
          }}>
            Çizim Dosyası
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setDrawingImageFile(e.target.files[0])}
            style={{
              width: '100%',
              padding: '16px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
            required
          />
        </div>

        <button
          type="submit"
          disabled={uploading}
          style={{
            background: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            padding: '16px 32px',
            fontSize: '18px',
            fontWeight: '600',
            cursor: uploading ? 'not-allowed' : 'pointer',
            opacity: uploading ? 0.6 : 1
          }}
        >
          {uploading ? 'Yükleniyor...' : 'Proje Çizimi Ekle'}
        </button>
      </form>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '24px' 
      }}>
        {drawings.map(item => (
          <div key={item._id} style={{ 
            border: '1px solid #e1e8ed', 
            borderRadius: '12px', 
            padding: '20px', 
            background: '#f8f9fa' 
          }}>
            <img 
              src={item.imageUrl} 
              alt={item.name} 
              style={{ 
                width: '100%', 
                height: '200px', 
                objectFit: 'cover', 
                borderRadius: '8px', 
                marginBottom: '16px' 
              }}
            />
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: '600', 
              marginBottom: '16px',
              color: '#2c3e50'
            }}>
              {item.name}
            </h3>
            <button 
              onClick={() => deleteDrawing(item._id)}
              style={{
                background: '#e74c3c',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                padding: '12px 20px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '600',
                width: '100%'
              }}
            >
              Sil
            </button>
          </div>
        ))}
      </div>
    </div>
  );
} 