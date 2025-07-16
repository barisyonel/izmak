import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/ddm7ouuwk/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'deneme';

export default function AdminPanel() {
  // Ürün yönetimi
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  // Banner yönetimi
  const [banner, setBanner] = useState({ title: '', imageUrl: '', countdown: '' });
  const [bannerFile, setBannerFile] = useState(null);
  const [bannerSuccess, setBannerSuccess] = useState(false);

  // Başvurular
  const [contacts, setContacts] = useState([]);

  const fetchProducts = async () => {
    const res = await axios.get('/products');
    setProducts(res.data);
  };
  const fetchBanner = async () => {
    const res = await axios.get('/banner');
    if (res.data) setBanner(res.data);
  };
  const fetchContacts = async () => {
    const res = await axios.get('/contacts', {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
    });
    setContacts(res.data);
  };

  useEffect(() => {
    fetchProducts();
    fetchBanner();
    fetchContacts();
  }, []);

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

  // Ürün ekle
  const addProduct = async (e) => {
    e.preventDefault();
    if (!name || !description || !imageFile || !price) return;
    const imageUrl = await uploadImageToCloudinary(imageFile);
    await axios.post('/products', { name, description, imageUrl, price: Number(price) }, {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
    });
    setName('');
    setDescription('');
    setPrice('');
    setImageFile(null);
    fetchProducts();
  };
  // Ürün sil
  const deleteProduct = async (id) => {
    await axios.delete(`/products/${id}`, {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
    });
    fetchProducts();
  };

  // Banner güncelle
  const updateBanner = async (e) => {
    e.preventDefault();
    let imageUrl = banner.imageUrl;
    if (bannerFile) {
      imageUrl = await uploadImageToCloudinary(bannerFile);
    }
    await axios.post('/banner', {
      title: banner.title,
      imageUrl,
      countdown: banner.countdown
    }, {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
    });
    setBannerSuccess(true);
    setTimeout(() => setBannerSuccess(false), 2000);
    fetchBanner();
  };

  return (
    <div style={{ maxWidth: 900, margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1>Admin Paneli</h1>
      {/* Banner Yönetimi */}
      <section style={{ marginBottom: 40, background: '#f9f9f9', borderRadius: 10, padding: 24 }}>
        <h2>Kampanya / Banner Yönetimi</h2>
        <form onSubmit={updateBanner} style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 400 }}>
          <input
            placeholder="Başlık"
            value={banner.title || ''}
            onChange={e => setBanner({ ...banner, title: e.target.value })}
          />
          <input
            type="file"
            accept="image/*"
            onChange={e => setBannerFile(e.target.files[0])}
          />
          <input
            type="datetime-local"
            value={banner.countdown ? banner.countdown.slice(0, 16) : ''}
            onChange={e => setBanner({ ...banner, countdown: e.target.value })}
          />
          <button type="submit">Kaydet</button>
          {bannerSuccess && <span style={{ color: 'green' }}>Başarıyla güncellendi!</span>}
        </form>
        {banner.imageUrl && <img src={banner.imageUrl} alt="Banner" style={{ maxHeight: 100, marginTop: 12, borderRadius: 8 }} />}
      </section>

      {/* Üretim Alanları Yönetimi */}
      <section style={{ marginBottom: 40, background: '#f9f9f9', borderRadius: 10, padding: 24 }}>
        <h2>Üretim Alanı Ekle</h2>
        <form onSubmit={addProduct} style={{ marginBottom: 20, display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 400 }}>
          <input
            placeholder="Üretim alanı adı (örn: Makine Yedek Parça, Plastik Enjeksiyon Kalıbı)"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <textarea
            placeholder="Açıklama (hizmet detayları, özellikler)"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            placeholder="Fiyat (TL)"
            type="number"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            onChange={e => setImageFile(e.target.files[0])}
          />
          <button type="submit" disabled={uploading}>{uploading ? 'Yükleniyor...' : 'Ekle'}</button>
        </form>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: 24 }}>
          {products.map(p => (
            <li key={p._id} style={{ width: 260, border: '1px solid #ccc', borderRadius: 8, padding: 12, background: '#fff' }}>
              <h3>{p.name}</h3>
              <img src={p.imageUrl} alt={p.name} style={{ maxWidth: 200, display: 'block', marginBottom: 8 }} />
              <p>{p.description}</p>
              <div style={{ fontWeight: 'bold', color: '#ffd700', fontSize: 18 }}>{p.price} TL</div>
              <button onClick={() => deleteProduct(p._id)} style={{ marginTop: 8 }}>Sil</button>
            </li>
          ))}
        </ul>
      </section>

      {/* Teklif/İletişim Talepleri */}
      <section style={{ background: '#f9f9f9', borderRadius: 10, padding: 24 }}>
        <h2>Teklif ve İletişim Talepleri</h2>
        {contacts.length === 0 ? (
          <div style={{ color: '#aaa' }}>Henüz teklif talebi yok.</div>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {contacts.map(c => (
              <li key={c._id} style={{ borderBottom: '1px solid #ddd', marginBottom: 12, paddingBottom: 12 }}>
                <div><b>Ad:</b> {c.name}</div>
                <div><b>E-posta:</b> {c.email}</div>
                <div><b>Telefon:</b> {c.phone}</div>
                <div><b>Firma:</b> {c.company || 'Belirtilmemiş'}</div>
                <div><b>Hizmet Türü:</b> {c.service || 'Belirtilmemiş'}</div>
                <div><b>Proje Detayları:</b> {c.message}</div>
                <div style={{ color: '#888', fontSize: 13 }}>{new Date(c.createdAt).toLocaleString()}</div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
} 