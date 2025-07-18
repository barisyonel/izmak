import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './components/AdminPanelProfile.css';
import './components/AdminPanelSections.css';
import { Helmet } from 'react-helmet-async';
import { API_ENDPOINTS } from './config';

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/ddm7ouuwk/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'deneme';

const SIDEBAR_OPTIONS = [
  { key: 'dashboard', label: 'Dashboard' },
  { key: 'products', label: 'Üretim Alanları' },
  { key: 'add', label: 'Ürün Ekle' },
  { key: 'gallery', label: 'Galeri' },
  { key: 'drawings', label: 'Proje Çizimleri' },
  { key: 'contacts', label: 'Teklif ve İletişim Talepleri' },
  { key: 'profile', label: 'Profil' },
];

export default function AdminPanel() {
  // Ürün yönetimi
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editImageUrl, setEditImageUrl] = useState('');

  // Loading ve error states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Dashboard analytics
  const [analytics, setAnalytics] = useState(null);
  const [analyticsLoading, setAnalyticsLoading] = useState(false);

  // Başvurular
  const [contacts, setContacts] = useState([]);

  // Galeri ve Çizim state'leri
  const [gallery, setGallery] = useState([]);
  const [galleryName, setGalleryName] = useState('');
  const [galleryImageFile, setGalleryImageFile] = useState(null);
  const [galleryEditId, setGalleryEditId] = useState(null);
  const [galleryEditImageUrl, setGalleryEditImageUrl] = useState('');
  const [galleryLoading, setGalleryLoading] = useState(false);

  const [drawings, setDrawings] = useState([]);
  const [drawingName, setDrawingName] = useState('');
  const [drawingImageFile, setDrawingImageFile] = useState(null);
  const [drawingEditId, setDrawingEditId] = useState(null);
  const [drawingEditImageUrl, setDrawingEditImageUrl] = useState('');
  const [drawingLoading, setDrawingLoading] = useState(false);

  // Sidebar state
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Search and filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  // Profil state'leri
  const [usernameChangeLoading, setUsernameChangeLoading] = useState(false);
  const [passwordChangeLoading, setPasswordChangeLoading] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const [usernamePassword, setUsernamePassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const showSuccess = (message) => {
    setSuccess(message);
    setTimeout(() => setSuccess(''), 3000);
  };

  const showError = (message) => {
    setError(message);
    setTimeout(() => setError(''), 5000);
  };

  // Filtered and sorted products
  const filteredProducts = products
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];
      
      if (sortBy === 'price') {
        aValue = Number(aValue);
        bValue = Number(bValue);
      } else {
        aValue = String(aValue).toLowerCase();
        bValue = String(bValue).toLowerCase();
      }
      
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_ENDPOINTS.PRODUCTS);
      setProducts(res.data);
    } catch (err) {
      showError('Ürünler yüklenirken hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  const fetchContacts = async () => {
    try {
      const res = await axios.get(API_ENDPOINTS.CONTACTS, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
      });
      setContacts(res.data);
    } catch (err) {
      showError('İletişim talepleri yüklenirken hata oluştu');
    }
  };

  const fetchAnalytics = async () => {
    setAnalyticsLoading(true);
    try {
      const res = await axios.get(API_ENDPOINTS.ANALYTICS, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
      });
      setAnalytics(res.data);
    } catch (err) {
      showError('Analytics verileri yüklenirken hata oluştu');
    } finally {
      setAnalyticsLoading(false);
    }
  };

  // Galeri fetch
  const fetchGallery = async () => {
    setGalleryLoading(true);
    try {
      const res = await axios.get(API_ENDPOINTS.GALLERY);
      setGallery(res.data);
    } catch (err) {
      showError('Galeri yüklenirken hata oluştu');
    } finally {
      setGalleryLoading(false);
    }
  };
  // Çizim fetch
  const fetchDrawings = async () => {
    setDrawingLoading(true);
    try {
      console.log('Proje çizimleri yükleniyor...');
      const res = await axios.get(API_ENDPOINTS.DRAWINGS);
      console.log('Çizimler yüklendi:', res.data);
      setDrawings(res.data);
    } catch (err) {
      console.error('Çizim yükleme hatası:', err);
      showError('Proje çizimleri yüklenirken hata oluştu');
    } finally {
      setDrawingLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchContacts();
    fetchAnalytics();
    fetchGallery();
    fetchDrawings();
  }, []);

  // Mobil cihaz kontrolü
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const uploadImageToCloudinary = async (file) => {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    setUploading(true);
    try {
      const res = await fetch(CLOUDINARY_URL, {
        method: 'POST',
        body: data,
      });
      const result = await res.json();
      if (!result.secure_url) {
        throw new Error('Resim yüklenemedi');
      }
      return result.secure_url;
    } catch (err) {
      showError('Resim yüklenirken hata oluştu');
      throw err;
    } finally {
      setUploading(false);
    }
  };

  // Ürün ekle/güncelle
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !description || (!imageFile && !editId) || !price) {
      showError('Lütfen tüm alanları doldurun');
      return;
    }

    setLoading(true);
    try {
      let imageUrl = editImageUrl;
      if (imageFile) {
        imageUrl = await uploadImageToCloudinary(imageFile);
      }

      if (editId) {
        // Güncelle
        await axios.put(`/api/products/${editId}`, { 
          name, 
          description, 
          imageUrl, 
          price: Number(price) 
        }, {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
        });
        showSuccess('Ürün başarıyla güncellendi');
      } else {
        // Ekle
        await axios.post('/api/products', { 
          name, 
          description, 
          imageUrl, 
          price: Number(price) 
        }, {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
        });
        showSuccess('Ürün başarıyla eklendi');
      }

      setName('');
      setDescription('');
      setPrice('');
      setImageFile(null);
      setEditId(null);
      setEditImageUrl('');
      fetchProducts();
      setActiveTab('products');
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Bir hata oluştu';
      showError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Ürün sil
  const deleteProduct = async (id) => {
    if (!window.confirm('Bu ürünü silmek istediğinizden emin misiniz?')) {
      return;
    }

    try {
      await axios.delete(`/api/products/${id}`, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
      });
      showSuccess('Ürün başarıyla silindi');
      fetchProducts();
    } catch (err) {
      showError('Ürün silinirken hata oluştu');
    }
  };

  // Ürün düzenle
  const editProduct = (product) => {
    setEditId(product._id);
    setName(product.name);
    setDescription(product.description);
    setPrice(product.price);
    setEditImageUrl(product.imageUrl);
    setImageFile(null);
    setActiveTab('add');
  };

  // Düzenleme iptal
  const cancelEdit = () => {
    setEditId(null);
    setName('');
    setDescription('');
    setPrice('');
    setImageFile(null);
    setEditImageUrl('');
  };

  // Açıklama 350 karaktere sınırla
  const truncate = (str, n) => (str && str.length > n ? str.slice(0, n) + '...' : str);

  // Kullanıcı adı değiştirme
  const handleUsernameChange = async (e) => {
    e.preventDefault();
    if (!newUsername || !usernamePassword) {
      showError('Tüm alanları doldurun');
      return;
    }
    setUsernameChangeLoading(true);
    try {
      const res = await axios.post('/api/admin/change-username', {
        newUsername,
        password: usernamePassword
      }, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
      });
      showSuccess(res.data.message);
      setTimeout(() => {
        localStorage.removeItem('token');
        window.location.href = '/login';
      }, 2000);
    } catch (err) {
      showError(err.response?.data?.message || 'Bir hata oluştu');
    } finally {
      setUsernameChangeLoading(false);
    }
  };

  // Şifre değiştirme
  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (!oldPassword || !newPassword || !confirmPassword) {
      showError('Tüm alanları doldurun');
      return;
    }
    if (newPassword !== confirmPassword) {
      showError('Yeni şifreler eşleşmiyor');
      return;
    }
    setPasswordChangeLoading(true);
    try {
      const res = await axios.post('/api/admin/change-password', {
        oldPassword,
        newPassword
      }, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
      });
      showSuccess(res.data.message);
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      showError(err.response?.data?.message || 'Bir hata oluştu');
    } finally {
      setPasswordChangeLoading(false);
    }
  };

  // Galeri ekle/güncelle
  const handleGallerySubmit = async (e) => {
    e.preventDefault();
    if (!galleryName || (!galleryImageFile && !galleryEditId)) {
      showError('Tüm alanları doldurun');
      return;
    }
    setGalleryLoading(true);
    try {
      let imageUrl = galleryEditImageUrl;
      if (galleryImageFile) {
        imageUrl = await uploadImageToCloudinary(galleryImageFile);
      }
      if (galleryEditId) {
        await axios.put(`/api/gallery/${galleryEditId}`, { name: galleryName, imageUrl }, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } });
        showSuccess('Galeri görseli güncellendi');
      } else {
        await axios.post('/api/gallery', { name: galleryName, imageUrl }, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } });
        showSuccess('Galeri görseli eklendi');
      }
      setGalleryName('');
      setGalleryImageFile(null);
      setGalleryEditId(null);
      setGalleryEditImageUrl('');
      fetchGallery();
    } catch (err) {
      showError('İşlem sırasında hata oluştu');
    } finally {
      setGalleryLoading(false);
    }
  };
  const editGallery = (item) => {
    setGalleryEditId(item._id);
    setGalleryName(item.name);
    setGalleryEditImageUrl(item.imageUrl);
    setGalleryImageFile(null);
  };
  const cancelGalleryEdit = () => {
    setGalleryEditId(null);
    setGalleryName('');
    setGalleryEditImageUrl('');
    setGalleryImageFile(null);
  };
  const deleteGallery = async (id) => {
    if (!window.confirm('Bu görseli silmek istediğinizden emin misiniz?')) return;
    setGalleryLoading(true);
    try {
      await axios.delete(`/api/gallery/${id}`, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } });
      showSuccess('Galeri görseli silindi');
      fetchGallery();
    } catch (err) {
      showError('Silme sırasında hata oluştu');
    } finally {
      setGalleryLoading(false);
    }
  };
  // Çizim ekle/güncelle
  const handleDrawingSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!drawingName || drawingName.trim().length < 2) {
      showError('Çizim adı en az 2 karakter olmalıdır');
      return;
    }
    
    if (!drawingImageFile && !drawingEditId) {
      showError('Lütfen bir görsel seçin');
      return;
    }
    
    if (drawingEditId && !drawingImageFile && !drawingEditImageUrl) {
      showError('Lütfen bir görsel seçin veya mevcut görseli koruyun');
      return;
    }
    
    setDrawingLoading(true);
    try {
      let imageUrl = drawingEditImageUrl;
      
      if (drawingImageFile) {
        console.log('Cloudinary\'ye yükleniyor:', drawingImageFile.name);
        imageUrl = await uploadImageToCloudinary(drawingImageFile);
        console.log('Cloudinary URL alındı:', imageUrl);
      }
      
      if (drawingEditId) {
        console.log('Çizim güncelleniyor:', drawingEditId);
        const response = await axios.put(
          `/api/drawings/${drawingEditId}`, 
          { name: drawingName.trim(), imageUrl }, 
          { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } }
        );
        console.log('Güncelleme başarılı:', response.data);
        showSuccess('Proje çizimi başarıyla güncellendi');
      } else {
        console.log('Yeni çizim ekleniyor');
        const response = await axios.post(
          '/api/drawings', 
          { name: drawingName.trim(), imageUrl }, 
          { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } }
        );
        console.log('Ekleme başarılı:', response.data);
        showSuccess('Proje çizimi başarıyla eklendi');
      }
      
      // Form temizleme
      setDrawingName('');
      setDrawingImageFile(null);
      setDrawingEditId(null);
      setDrawingEditImageUrl('');
      
      // Listeyi yenile
      await fetchDrawings();
      
    } catch (err) {
      console.error('Çizim işlemi hatası:', err);
      const errorMessage = err.response?.data?.message || 'İşlem sırasında hata oluştu';
      showError(errorMessage);
    } finally {
      setDrawingLoading(false);
    }
  };
  const editDrawing = (item) => {
    setDrawingEditId(item._id);
    setDrawingName(item.name);
    setDrawingEditImageUrl(item.imageUrl);
    setDrawingImageFile(null);
  };
  const cancelDrawingEdit = () => {
    setDrawingEditId(null);
    setDrawingName('');
    setDrawingEditImageUrl('');
    setDrawingImageFile(null);
  };
  const deleteDrawing = async (id) => {
    if (!window.confirm('Bu çizimi silmek istediğinizden emin misiniz?')) return;
    setDrawingLoading(true);
    try {
      await axios.delete(`/api/drawings/${id}`, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } });
      showSuccess('Proje çizimi silindi');
      fetchDrawings();
    } catch (err) {
      showError('Silme sırasında hata oluştu');
    } finally {
      setDrawingLoading(false);
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'var(--steel-light)', 
      fontFamily: 'Inter, sans-serif',
      display: 'flex',
      flexDirection: 'row',
      position: 'relative',
    }}>
      <Helmet>
        <title>Admin Paneli | IZMAK Makine Yedek Parça & Kalıp İmalatı</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="IZMAK yönetim paneli. Ürün, galeri, teklif ve iletişim talepleri yönetimi." />
      </Helmet>
      {/* Sidebar */}
      <aside className="admin-sidebar" style={{ 
        width: sidebarOpen ? 300 : 0,
        background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 50%, #2c3e50 100%)', 
        padding: sidebarOpen ? '24px 0' : '24px 0',
        boxShadow: '2px 0 10px rgba(0,0,0,0.1)',
        minWidth: sidebarOpen ? 300 : 0,
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        border: 'none',
        overflow: 'hidden',
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        zIndex: 1000,
      }}>
        {/* Başlık kaldırıldı, sadece menü */}
        <nav style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 8, 
          padding: 0, 
          margin: 0,
          opacity: sidebarOpen ? 1 : 0,
          transition: 'opacity 0.3s ease',
          width: '100%',
        }}>
          {SIDEBAR_OPTIONS.map((option) => (
            <button
              key={option.key}
              onClick={() => setActiveTab(option.key)}
              style={{
                width: '100%',
                padding: '16px 24px',
                backgroundColor: activeTab === option.key ? 'rgba(241,196,15,0.15)' : 'transparent',
                color: activeTab === option.key ? '#f1c40f' : '#ffffff',
                border: 'none',
                textAlign: 'left',
                fontSize: 16,
                fontWeight: activeTab === option.key ? 700 : 500,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                borderRadius: 0,
                boxShadow: activeTab === option.key ? '0 2px 8px rgba(241,196,15,0.2)' : 'none',
                outline: 'none',
                letterSpacing: 0.5,
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                margin: '4px 16px',
                maxWidth: 'calc(100% - 32px)',
                minHeight: 48,
                boxSizing: 'border-box',
                borderLeft: activeTab === option.key ? '4px solid #f1c40f' : '4px solid transparent',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                if (activeTab !== option.key) {
                  e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  e.target.style.transform = 'translateX(4px)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== option.key) {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.transform = 'translateX(0)';
                }
              }}
            >
              {option.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Mobile Overlay */}
      {sidebarOpen && isMobile && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 998,
          }}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Header with Toggle and Logout */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: sidebarOpen ? 300 : 0,
        right: 0,
        height: 70,
        background: 'var(--steel-gradient)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        zIndex: 999,
        transition: 'left 0.3s ease',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      }}>
        {/* Toggle Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          style={{
            background: 'var(--metallic-gradient)',
            border: 'none',
            borderRadius: '50%',
            width: 45,
            height: 45,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease',
            color: '#fff',
            fontSize: 18,
          }}
          aria-label={sidebarOpen ? 'Sidebar\'ı kapat' : 'Sidebar\'ı aç'}
        >
          {sidebarOpen ? '✕' : '☰'}
        </button>

        {/* Page Title */}
        <h1 style={{
          fontSize: 24,
          fontWeight: 700,
          color: 'var(--chrome-primary)',
          margin: 0,
          textAlign: 'center',
          flex: 1,
        }}>
          {activeTab === 'dashboard' && 'Dashboard'}
          {activeTab === 'products' && 'Üretim Alanları'}
          {activeTab === 'add' && 'Ürün Ekle'}
          {activeTab === 'gallery' && 'Galeri'}
          {activeTab === 'drawings' && 'Proje Çizimleri'}
          {activeTab === 'contacts' && 'İletişim Talepleri'}
          {activeTab === 'profile' && 'Profil'}
        </h1>

        {/* Logout Button */}
        <button
          onClick={() => {
            localStorage.removeItem('token');
            window.location.href = '/';
          }}
          style={{
            background: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
            border: 'none',
            borderRadius: 8,
            padding: '10px 20px',
            color: '#fff',
            fontSize: 14,
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 8px rgba(231, 76, 60, 0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 4px 12px rgba(231, 76, 60, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 2px 8px rgba(231, 76, 60, 0.3)';
          }}
        >
          <span style={{ fontSize: 16 }}>🚪</span>
          Çıkış
        </button>
      </header>

      {/* Main Content */}
      <main className="admin-main" style={{ 
        flex: 1, 
        padding: '90px 24px 40px 24px', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        width: '100%',
        marginLeft: sidebarOpen ? 300 : 0,
        transition: 'margin-left 0.3s ease',
        minHeight: '100vh',
      }}>
        {/* Success/Error Messages */}
        {success && (
          <div style={{
            position: 'fixed',
            top: 20,
            right: 20,
            background: '#4caf50',
            color: 'white',
            padding: '12px 24px',
            borderRadius: 8,
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            zIndex: 1000,
            animation: 'slideIn 0.3s ease'
          }}>
            {success}
          </div>
        )}
        
        {error && (
          <div style={{
            position: 'fixed',
            top: 20,
            right: 20,
            background: '#f44336',
            color: 'white',
            padding: '12px 24px',
            borderRadius: 8,
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            zIndex: 1000,
            animation: 'slideIn 0.3s ease'
          }}>
            {error}
          </div>
        )}

        {activeTab === 'dashboard' && (
          <section style={{ background: '#f9f9f9', borderRadius: 10, padding: 24, minWidth: 340, maxWidth: 900, width: '100%' }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--chrome-primary)', marginBottom: 24 }}>Dashboard</h2>
            
            {analyticsLoading ? (
              <div style={{ textAlign: 'center', padding: '40px', color: 'var(--steel-dark)' }}>
                <div style={{ fontSize: 18 }}>Analytics yükleniyor...</div>
              </div>
            ) : analytics ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
                {/* Toplam Ürün */}
                <div style={{ 
                  background: 'var(--steel-gradient)', 
                  padding: '20px', 
                  borderRadius: 8, 
                  textAlign: 'center',
                  border: '2px solid var(--steel-medium)',
                  boxShadow: 'var(--shadow-steel)'
                }}>
                  <div style={{ fontSize: 32, fontWeight: 700, color: 'var(--chrome-primary)', marginBottom: 8 }}>
                    {analytics.totalProducts}
                  </div>
                  <div style={{ fontSize: 14, color: 'var(--steel-dark)' }}>Toplam Ürün</div>
                </div>

                {/* Toplam İletişim */}
                <div style={{ 
                  background: 'var(--steel-gradient)', 
                  padding: '20px', 
                  borderRadius: 8, 
                  textAlign: 'center',
                  border: '2px solid var(--steel-medium)',
                  boxShadow: 'var(--shadow-steel)'
                }}>
                  <div style={{ fontSize: 32, fontWeight: 700, color: 'var(--chrome-primary)', marginBottom: 8 }}>
                    {analytics.totalContacts}
                  </div>
                  <div style={{ fontSize: 14, color: 'var(--steel-dark)' }}>Toplam İletişim</div>
                </div>

                {/* Son 30 Gün */}
                <div style={{ 
                  background: 'var(--steel-gradient)', 
                  padding: '20px', 
                  borderRadius: 8, 
                  textAlign: 'center',
                  border: '2px solid var(--steel-medium)',
                  boxShadow: 'var(--shadow-steel)'
                }}>
                  <div style={{ fontSize: 32, fontWeight: 700, color: 'var(--gold-accent)', marginBottom: 8 }}>
                    {analytics.recentContacts}
                  </div>
                  <div style={{ fontSize: 14, color: 'var(--steel-dark)' }}>Son 30 Gün</div>
                </div>

                {/* Ortalama Fiyat */}
                <div style={{ 
                  background: 'var(--steel-gradient)', 
                  padding: '20px', 
                  borderRadius: 8, 
                  textAlign: 'center',
                  border: '2px solid var(--steel-medium)',
                  boxShadow: 'var(--shadow-steel)'
                }}>
                  <div style={{ fontSize: 32, fontWeight: 700, color: 'var(--gold-accent)', marginBottom: 8 }}>
                    {Math.round(analytics.avgPrice)} TL
                  </div>
                  <div style={{ fontSize: 14, color: 'var(--steel-dark)' }}>Ortalama Fiyat</div>
                </div>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '40px', color: 'var(--steel-dark)' }}>
                <div style={{ fontSize: 18 }}>Analytics verileri yüklenemedi</div>
              </div>
            )}
          </section>
        )}

        {activeTab === 'add' && (
          <section className="admin-section-card">
            <h2 className="admin-section-title">Üretim Alanı Ekle</h2>
            <form onSubmit={handleSubmit} className="admin-form">
              <input
                className="admin-input"
                placeholder="Üretim alanı adı (örn: Makine Yedek Parça, Plastik Enjeksiyon Kalıbı)"
                value={name}
                onChange={e => setName(e.target.value)}
                disabled={loading}
              />
              <textarea
                className="admin-textarea"
                placeholder="Açıklama (hizmet detayları, özellikler)"
                value={description}
                onChange={e => setDescription(e.target.value)}
                maxLength={350}
                disabled={loading}
              />
              <input
                className="admin-input"
                placeholder="Fiyat (TL)"
                type="number"
                value={price}
                onChange={e => setPrice(e.target.value)}
                disabled={loading}
              />
              <input
                className="admin-input"
                type="file"
                accept="image/*"
                onChange={e => setImageFile(e.target.files[0])}
                disabled={loading}
              />
              {editImageUrl && !imageFile && (
                <img src={editImageUrl} alt="Seçili görsel" style={{ maxWidth: 120, margin: '8px 0', borderRadius: 8, border: '1px solid #ccc' }} />
              )}
              <div style={{ display: 'flex', gap: 10 }}>
                <button type="submit" className="admin-btn" disabled={loading || uploading}>
                  {loading ? 'İşleniyor...' : uploading ? 'Resim Yükleniyor...' : (editId ? 'Güncelle' : 'Ekle')}
                </button>
                {editId && <button type="button" className="admin-btn" onClick={cancelEdit} disabled={loading}>İptal</button>}
              </div>
            </form>
          </section>
        )}

        {activeTab === 'products' && (
          <section style={{ background: '#f9f9f9', borderRadius: 10, padding: 24, minWidth: 340, maxWidth: 900, width: '100%' }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--chrome-primary)', marginBottom: 18 }}>Üretim Alanları</h2>
            
            {/* Search and Filter Controls */}
            <div style={{ 
              display: 'flex', 
              gap: 16, 
              marginBottom: 24, 
              flexWrap: 'wrap',
              alignItems: 'center',
              background: '#fff',
              padding: '16px',
              borderRadius: 8,
              border: '1px solid #ddd'
            }}>
              <div style={{ flex: 1, minWidth: 200 }}>
                <input
                  type="text"
                  placeholder="Ürün ara..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: 4,
                    fontSize: 14
                  }}
                />
              </div>
              
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <label style={{ fontSize: 14, fontWeight: 600, color: 'var(--chrome-primary)' }}>Sırala:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  style={{
                    padding: '6px 8px',
                    border: '1px solid #ccc',
                    borderRadius: 4,
                    fontSize: 14
                  }}
                >
                  <option value="name">İsim</option>
                  <option value="price">Fiyat</option>
                  <option value="description">Açıklama</option>
                </select>
                
                <button
                  onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                  style={{
                    padding: '6px 12px',
                    border: '1px solid #ccc',
                    borderRadius: 4,
                    background: '#fff',
                    cursor: 'pointer',
                    fontSize: 14
                  }}
                >
                  {sortOrder === 'asc' ? '↑' : '↓'}
                </button>
              </div>
              
              <div style={{ fontSize: 14, color: 'var(--steel-dark)' }}>
                {filteredProducts.length} ürün bulundu
              </div>
            </div>
            
            {loading ? (
              <div style={{ textAlign: 'center', padding: '40px', color: 'var(--steel-dark)' }}>
                <div style={{ fontSize: 18 }}>Yükleniyor...</div>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px', color: 'var(--steel-dark)' }}>
                <div style={{ fontSize: 18 }}>
                  {searchTerm ? 'Arama kriterlerine uygun ürün bulunamadı' : 'Henüz ürün eklenmemiş'}
                </div>
              </div>
            ) : (
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'flex-start' }}>
                {filteredProducts.map(p => (
                  <li key={p._id} style={{ width: 260, border: '1px solid #ccc', borderRadius: 8, padding: 12, background: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 420 }}>
                    <div>
                      <h3 style={{ fontWeight: 700, fontSize: 20, margin: 0, marginBottom: 8 }}>{p.name}</h3>
                      <img src={p.imageUrl} alt={p.name} style={{ width: 220, height: 180, objectFit: 'cover', borderRadius: 8, display: 'block', margin: '0 auto 8px auto', background: '#f3f3f3', border: '1px solid #eee' }} />
                      <p style={{ minHeight: 48, fontSize: 15, color: '#444', margin: 0, marginBottom: 8 }}>{truncate(p.description, 350)}</p>
                    </div>
                    <div>
                      <div style={{ fontWeight: 'bold', color: '#ffd700', fontSize: 18, marginBottom: 8 }}>{p.price} TL</div>
                      <div style={{ display: 'flex', gap: 8 }}>
                        <button onClick={() => editProduct(p)} style={{ background: '#ffe082', color: '#333', border: '1px solid #ffd700', borderRadius: 6, padding: '6px 14px', cursor: 'pointer' }}>Düzenle</button>
                        <button onClick={() => deleteProduct(p._id)} style={{ background: '#e74c3c', color: '#fff', border: 'none', borderRadius: 6, padding: '6px 14px', cursor: 'pointer' }}>Sil</button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>
        )}

        {activeTab === 'contacts' && (
          <section style={{ background: '#f9f9f9', borderRadius: 10, padding: 24, minWidth: 340, maxWidth: 900, width: '100%' }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--chrome-primary)', marginBottom: 18 }}>Teklif ve İletişim Talepleri</h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: 8, overflow: 'hidden' }}>
                <thead>
                  <tr style={{ background: 'var(--metallic-gradient)', color: '#fff' }}>
                    <th style={{ padding: '12px', textAlign: 'left' }}>Ad Soyad</th>
                    <th style={{ padding: '12px', textAlign: 'left' }}>Email</th>
                    <th style={{ padding: '12px', textAlign: 'left' }}>Telefon</th>
                    <th style={{ padding: '12px', textAlign: 'left' }}>Mesaj</th>
                    <th style={{ padding: '12px', textAlign: 'left' }}>Tarih</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map(contact => (
                    <tr key={contact._id} style={{ borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '12px' }}>{contact.name}</td>
                      <td style={{ padding: '12px' }}>{contact.email}</td>
                      <td style={{ padding: '12px' }}>{contact.phone}</td>
                      <td style={{ padding: '12px', maxWidth: 200 }}>{truncate(contact.message, 100)}</td>
                      <td style={{ padding: '12px' }}>{new Date(contact.createdAt).toLocaleDateString('tr-TR')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {activeTab === 'gallery' && (
          <section className="admin-section-card">
            <h2 className="admin-section-title">Galeri Yönetimi</h2>
            <form onSubmit={handleGallerySubmit} className="admin-form">
              <input
                className="admin-input"
                placeholder="Görsel adı"
                value={galleryName}
                onChange={e => setGalleryName(e.target.value)}
                disabled={galleryLoading}
              />
              <input
                className="admin-input"
                type="file"
                accept="image/*"
                onChange={e => setGalleryImageFile(e.target.files[0])}
                disabled={galleryLoading}
              />
              {galleryEditImageUrl && !galleryImageFile && (
                <img src={galleryEditImageUrl} alt="Seçili görsel" style={{ maxWidth: 120, margin: '8px 0', borderRadius: 8, border: '1px solid #ccc' }} />
              )}
              <div style={{ display: 'flex', gap: 10 }}>
                <button type="submit" className="admin-btn" disabled={galleryLoading}>
                  {galleryEditId ? 'Güncelle' : 'Ekle'}
                </button>
                {galleryEditId && <button type="button" className="admin-btn" onClick={cancelGalleryEdit} disabled={galleryLoading}>İptal</button>}
              </div>
            </form>
            {galleryLoading ? (
              <div>Yükleniyor...</div>
            ) : (
              <ul className="admin-list">
                {gallery.map(item => (
                  <li key={item._id} className="admin-list-item">
                    <img src={item.imageUrl} alt={item.name} className="admin-list-img" />
                    <div className="admin-list-title">{item.name}</div>
                    <div className="admin-list-btns">
                      <button onClick={() => editGallery(item)} className="admin-list-btn">Düzenle</button>
                      <button onClick={() => deleteGallery(item._id)} className="admin-list-btn delete">Sil</button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>
        )}

        {activeTab === 'drawings' && (
          <section style={{ background: '#f9f9f9', borderRadius: 10, padding: 24, minWidth: 340, maxWidth: 900, width: '100%' }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--chrome-primary)', marginBottom: 24 }}>Proje Çizimleri Yönetimi</h2>
            
            {/* Form */}
            <form onSubmit={handleDrawingSubmit} style={{ 
              background: '#fff', 
              padding: '20px', 
              borderRadius: 8, 
              border: '1px solid #ddd',
              marginBottom: 24
            }}>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', marginBottom: 8, fontWeight: 600, color: 'var(--chrome-primary)' }}>
                  Çizim Adı *
                </label>
                <input
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ccc',
                    borderRadius: 6,
                    fontSize: 14,
                    boxSizing: 'border-box'
                  }}
                  placeholder="Örn: Plastik Enjeksiyon Kalıbı Çizimi"
                  value={drawingName}
                  onChange={e => setDrawingName(e.target.value)}
                  disabled={drawingLoading}
                  required
                  minLength={2}
                />
              </div>
              
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', marginBottom: 8, fontWeight: 600, color: 'var(--chrome-primary)' }}>
                  Görsel *
                </label>
                <input
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ccc',
                    borderRadius: 6,
                    fontSize: 14,
                    boxSizing: 'border-box'
                  }}
                  type="file"
                  accept="image/*"
                  onChange={e => setDrawingImageFile(e.target.files[0])}
                  disabled={drawingLoading}
                  required={!drawingEditId}
                />
                {drawingImageFile && (
                  <div style={{ marginTop: 8, fontSize: 14, color: '#666' }}>
                    Seçilen dosya: {drawingImageFile.name}
                  </div>
                )}
              </div>
              
              {drawingEditImageUrl && !drawingImageFile && (
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', marginBottom: 8, fontWeight: 600, color: 'var(--chrome-primary)' }}>
                    Mevcut Görsel
                  </label>
                  <img 
                    src={drawingEditImageUrl} 
                    alt="Mevcut görsel" 
                    style={{ 
                      maxWidth: 200, 
                      maxHeight: 150, 
                      borderRadius: 8, 
                      border: '1px solid #ccc',
                      objectFit: 'cover'
                    }} 
                  />
                </div>
              )}
              
              <div style={{ display: 'flex', gap: 12 }}>
                <button 
                  type="submit" 
                  style={{
                    background: 'linear-gradient(135deg, #f1c40f 0%, #f39c12 100%)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 6,
                    padding: '12px 24px',
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: drawingLoading ? 'not-allowed' : 'pointer',
                    opacity: drawingLoading ? 0.7 : 1,
                    transition: 'all 0.3s ease'
                  }}
                  disabled={drawingLoading}
                >
                  {drawingLoading ? 'İşleniyor...' : (drawingEditId ? 'Güncelle' : 'Ekle')}
                </button>
                {drawingEditId && (
                  <button 
                    type="button" 
                    onClick={cancelDrawingEdit}
                    style={{
                      background: '#95a5a6',
                      color: '#fff',
                      border: 'none',
                      borderRadius: 6,
                      padding: '12px 24px',
                      fontSize: 14,
                      fontWeight: 600,
                      cursor: drawingLoading ? 'not-allowed' : 'pointer',
                      opacity: drawingLoading ? 0.7 : 1,
                      transition: 'all 0.3s ease'
                    }}
                    disabled={drawingLoading}
                  >
                    İptal
                  </button>
                )}
              </div>
            </form>
            
            {/* Liste */}
            {drawingLoading ? (
              <div style={{ textAlign: 'center', padding: '40px', color: 'var(--steel-dark)' }}>
                <div style={{ fontSize: 18 }}>Yükleniyor...</div>
              </div>
            ) : drawings.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px', color: 'var(--steel-dark)' }}>
                <div style={{ fontSize: 18 }}>Henüz proje çizimi eklenmemiş</div>
              </div>
            ) : (
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
                gap: 20 
              }}>
                {drawings.map(item => (
                  <div key={item._id} style={{ 
                    background: '#fff', 
                    borderRadius: 8, 
                    padding: 16, 
                    border: '1px solid #ddd',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>
                    <img 
                      src={item.imageUrl} 
                      alt={item.name} 
                      style={{ 
                        width: '100%', 
                        height: 200, 
                        objectFit: 'cover', 
                        borderRadius: 6,
                        marginBottom: 12
                      }} 
                    />
                    <h3 style={{ 
                      fontSize: 16, 
                      fontWeight: 600, 
                      margin: '0 0 12px 0', 
                      color: 'var(--chrome-primary)',
                      textAlign: 'center'
                    }}>
                      {item.name}
                    </h3>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button 
                        onClick={() => editDrawing(item)} 
                        style={{
                          flex: 1,
                          background: '#3498db',
                          color: '#fff',
                          border: 'none',
                          borderRadius: 4,
                          padding: '8px 12px',
                          fontSize: 12,
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'background 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.background = '#2980b9'}
                        onMouseLeave={(e) => e.target.style.background = '#3498db'}
                      >
                        Düzenle
                      </button>
                      <button 
                        onClick={() => deleteDrawing(item._id)} 
                        style={{
                          flex: 1,
                          background: '#e74c3c',
                          color: '#fff',
                          border: 'none',
                          borderRadius: 4,
                          padding: '8px 12px',
                          fontSize: 12,
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'background 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.background = '#c0392b'}
                        onMouseLeave={(e) => e.target.style.background = '#e74c3c'}
                      >
                        Sil
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {activeTab === 'profile' && (
          <section className="profile-settings-card">
            <h2 className="profile-settings-title">Profil Ayarları</h2>
            {/* Kullanıcı adı değiştirme formu */}
            <form onSubmit={handleUsernameChange} className="profile-form">
              <label className="profile-label">Yeni Kullanıcı Adı</label>
              <input
                type="text"
                placeholder="Yeni kullanıcı adı"
                value={newUsername}
                onChange={e => setNewUsername(e.target.value)}
                minLength={3}
                required
                disabled={usernameChangeLoading}
                className="profile-input"
              />
              <label className="profile-label">Mevcut Şifre</label>
              <input
                type="password"
                placeholder="Mevcut şifreniz"
                value={usernamePassword}
                onChange={e => setUsernamePassword(e.target.value)}
                required
                disabled={usernameChangeLoading}
                className="profile-input"
              />
              <button type="submit" disabled={usernameChangeLoading} className="profile-btn">
                {usernameChangeLoading ? 'İşleniyor...' : 'Kullanıcı Adını Değiştir'}
              </button>
            </form>
            {/* Şifre değiştirme formu */}
            <form onSubmit={handlePasswordChange} className="profile-form">
              <label className="profile-label">Mevcut Şifre</label>
              <input
                type="password"
                placeholder="Mevcut şifreniz"
                value={oldPassword}
                onChange={e => setOldPassword(e.target.value)}
                required
                disabled={passwordChangeLoading}
                className="profile-input"
              />
              <label className="profile-label">Yeni Şifre</label>
              <input
                type="password"
                placeholder="Yeni şifre"
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
                minLength={6}
                required
                disabled={passwordChangeLoading}
                className="profile-input"
              />
              <label className="profile-label">Yeni Şifre (Tekrar)</label>
              <input
                type="password"
                placeholder="Yeni şifre tekrar"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                minLength={6}
                required
                disabled={passwordChangeLoading}
                className="profile-input"
              />
              <button type="submit" disabled={passwordChangeLoading} className="profile-btn">
                {passwordChangeLoading ? 'İşleniyor...' : 'Şifreyi Değiştir'}
              </button>
            </form>
          </section>
        )}
      </main>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        /* Mobil responsive tasarım */
        @media (max-width: 768px) {
          .admin-sidebar {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            height: 100vh !important;
            z-index: 999 !important;
            width: ${sidebarOpen ? '280px' : '0'} !important;
            min-width: ${sidebarOpen ? '280px' : '0'} !important;
            padding: 12px 0 !important;
            transform: translateX(${sidebarOpen ? '0' : '-100%'}) !important;
          }
          
          .admin-sidebar button {
            font-size: 14px !important;
            padding: 12px 16px !important;
            white-space: nowrap !important;
          }
          
          .admin-main {
            margin-left: 0 !important;
            padding-top: 90px !important;
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          
          /* Header mobil ayarları */
          header {
            left: 0 !important;
            padding: 0 16px !important;
            height: 60px !important;
          }
          
          /* Page title mobil */
          header h1 {
            font-size: 18px !important;
          }
          
          /* Logout button mobil */
          header button:last-child {
            padding: 8px 16px !important;
            font-size: 13px !important;
          }
        }
        
        @media (max-width: 480px) {
          .admin-sidebar {
            width: ${sidebarOpen ? '260px' : '0'} !important;
            min-width: ${sidebarOpen ? '260px' : '0'} !important;
          }
          
          .admin-sidebar button {
            font-size: 13px !important;
            padding: 10px 12px !important;
          }
          
          .admin-main {
            padding-top: 80px !important;
            padding-left: 12px !important;
            padding-right: 12px !important;
          }
          
          /* Header küçük ekran ayarları */
          header {
            height: 55px !important;
            padding: 0 12px !important;
          }
          
          /* Page title küçük ekran */
          header h1 {
            font-size: 16px !important;
          }
          
          /* Logout button küçük ekran */
          header button:last-child {
            padding: 6px 12px !important;
            font-size: 12px !important;
          }
          
          /* Toggle button küçük ekran */
          header button:first-child {
            width: 40px !important;
            height: 40px !important;
            font-size: 16px !important;
          }
        }
        
        @media (max-width: 700px) {
          .admin-main section {
            min-width: 0 !important;
            max-width: 98vw !important;
            padding: 10px !important;
          }
          .admin-main table, .admin-main th, .admin-main td {
            font-size: 13px !important;
            padding: 6px !important;
          }
        }
        
        @media (max-width: 500px) {
          .admin-main section {
            padding: 4px !important;
          }
        }
        
        /* Sidebar overlay mobilde */
        @media (max-width: 768px) {
          .admin-sidebar::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.5);
            z-index: -1;
            opacity: ${sidebarOpen ? '1' : '0'};
            transition: opacity 0.3s ease;
            pointer-events: ${sidebarOpen ? 'auto' : 'none'};
          }
        }
      `}</style>
    </div>
  );
}