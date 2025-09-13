import React, { useState } from 'react';
import axios from 'axios';
import { API_ENDPOINTS } from '../../config';

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/ddm7ouuwk/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'deneme';

export default function AddProduct() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !description || !imageFile) {
      alert('Tüm alanları doldurun');
      return;
    }

    try {
      console.log('Starting image upload...');
      const imageUrl = await uploadImageToCloudinary(imageFile);
      console.log('Image uploaded successfully:', imageUrl);
      
      console.log('Sending product data:', { name, description, imageUrl });
      const response = await axios.post(API_ENDPOINTS.PRODUCTS, {
        name,
        description,
        imageUrl
      }, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
      });
      
      console.log('Product created successfully:', response.data);
      alert('Ürün başarıyla eklendi!');
      setName('');
      setDescription('');
      setImageFile(null);
    } catch (err) {
      console.error('Add product error:', err);
      console.error('Error details:', err.response?.data);
      alert('Ürün eklenirken hata oluştu: ' + (err.response?.data?.message || err.message));
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
        Yeni Ürün Ekle
      </h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
        <div style={{ marginBottom: '24px' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '8px', 
            fontWeight: '600', 
            color: '#2c3e50',
            fontSize: '16px'
          }}>
            Ürün Adı
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ürün adını girin"
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
            Açıklama
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Ürün açıklamasını girin"
            rows={4}
            style={{
              width: '100%',
              padding: '16px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              fontSize: '16px',
              resize: 'vertical',
              boxSizing: 'border-box'
            }}
            required
          />
        </div>


        <div style={{ marginBottom: '32px' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '8px', 
            fontWeight: '600', 
            color: '#2c3e50',
            fontSize: '16px'
          }}>
            Ürün Resmi
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
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
            opacity: uploading ? 0.6 : 1,
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(52,152,219,0.3)'
          }}
          onMouseEnter={(e) => {
            if (!uploading) {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(52,152,219,0.4)';
            }
          }}
          onMouseLeave={(e) => {
            if (!uploading) {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(52,152,219,0.3)';
            }
          }}
        >
          {uploading ? 'Yükleniyor...' : 'Ürün Ekle'}
        </button>
      </form>
    </div>
  );
} 