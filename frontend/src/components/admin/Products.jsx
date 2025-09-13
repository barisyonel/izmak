import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_ENDPOINTS } from '../../config';

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/ddm7ouuwk/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'deneme';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState(null);
  const [editName, setEditName] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editImageFile, setEditImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_ENDPOINTS.PRODUCTS);
      setProducts(res.data);
    } catch (err) {
      console.error('Products fetch error:', err);
    } finally {
      setLoading(false);
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

  const startEditProduct = (product) => {
    setEditingProduct(product._id);
    setEditName(product.name);
    setEditDescription(product.description);
    setEditImageFile(null);
  };

  const cancelEdit = () => {
    setEditingProduct(null);
    setEditName('');
    setEditDescription('');
    setEditImageFile(null);
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    if (!editName || !editDescription) {
      alert('Tüm alanları doldurun');
      return;
    }

    try {
      const currentProduct = products.find(p => p._id === editingProduct);
      if (!currentProduct) {
        alert('Ürün bulunamadı');
        return;
      }

      let imageUrl = currentProduct.imageUrl;
      if (editImageFile) {
        imageUrl = await uploadImageToCloudinary(editImageFile);
      }

      await axios.put(`${API_ENDPOINTS.PRODUCTS}/${editingProduct}`, {
        name: editName,
        description: editDescription,
        imageUrl
      }, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
      });

      alert('Ürün başarıyla güncellendi!');
      cancelEdit();
      fetchProducts();
    } catch (err) {
      console.error('Update product error:', err);
      alert('Ürün güncellenirken hata oluştu');
    }
  };

  const deleteProduct = async (id) => {
    if (!window.confirm('Bu ürünü silmek istediğinizden emin misiniz?')) return;

    try {
      await axios.delete(`${API_ENDPOINTS.PRODUCTS}/${id}`, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
      });
      alert('Ürün başarıyla silindi!');
      fetchProducts();
    } catch (err) {
      console.error('Delete product error:', err);
      alert('Ürün silinirken hata oluştu');
    }
  };

  if (loading) {
    return (
      <div style={{ 
        background: '#fff', 
        borderRadius: '12px', 
        padding: '40px', 
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '18px', color: '#7f8c8d' }}>Yükleniyor...</div>
      </div>
    );
  }

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
        Üretim Alanları
      </h1>

      {products.length === 0 ? (
        <div style={{ 
          textAlign: 'center', 
          padding: '60px', 
          color: '#7f8c8d',
          fontSize: '18px'
        }}>
          Henüz ürün eklenmemiş.
        </div>
      ) : (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
          gap: '24px' 
        }}>
          {products.map(product => (
            <div key={product._id} style={{ 
              border: '1px solid #e1e8ed', 
              borderRadius: '12px', 
              padding: '24px', 
              background: '#f8f9fa',
              transition: 'all 0.3s ease'
            }}>
              {editingProduct === product._id ? (
                <form onSubmit={updateProduct} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    placeholder="Ürün adı"
                    style={{
                      padding: '12px',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      fontSize: '16px',
                    }}
                    required
                  />
                  <textarea
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                    placeholder="Açıklama"
                    rows={3}
                    style={{
                      padding: '12px',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      fontSize: '16px',
                      resize: 'vertical',
                    }}
                    required
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setEditImageFile(e.target.files[0])}
                    style={{
                      padding: '12px',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      fontSize: '16px',
                    }}
                  />
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button
                      type="submit"
                      disabled={uploading}
                      style={{
                        background: '#27ae60',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '12px 20px',
                        cursor: uploading ? 'not-allowed' : 'pointer',
                        fontSize: '16px',
                        fontWeight: '600',
                        flex: 1,
                        opacity: uploading ? 0.6 : 1
                      }}
                    >
                      {uploading ? 'Kaydediliyor...' : 'Kaydet'}
                    </button>
                    <button
                      type="button"
                      onClick={cancelEdit}
                      style={{
                        background: '#95a5a6',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '12px 20px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: '600',
                        flex: 1
                      }}
                    >
                      İptal
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    style={{ 
                      width: '100%', 
                      height: '200px', 
                      objectFit: 'cover', 
                      borderRadius: '8px', 
                      marginBottom: '16px' 
                    }}
                  />
                  <h3 style={{ 
                    fontSize: '20px', 
                    fontWeight: '600', 
                    marginBottom: '12px',
                    color: '#2c3e50'
                  }}>
                    {product.name}
                  </h3>
                  <p style={{ 
                    color: '#7f8c8d', 
                    marginBottom: '16px', 
                    fontSize: '16px',
                    lineHeight: '1.5'
                  }}>
                    {product.description}
                  </p>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button 
                      onClick={() => startEditProduct(product)}
                      style={{
                        background: '#3498db',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '12px 20px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: '600',
                        flex: 1
                      }}
                    >
                      Düzenle
                    </button>
                    <button 
                      onClick={() => deleteProduct(product._id)}
                      style={{
                        background: '#e74c3c',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '12px 20px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: '600',
                        flex: 1
                      }}
                    >
                      Sil
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 