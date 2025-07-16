import React, { useState } from 'react';
import axios from 'axios';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    try {
      await axios.post('/api/contacts', form);
      setSuccess(true);
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch {
      setError('Gönderilemedi. Lütfen tekrar deneyin.');
    }
  };

  return (
    <div id="contact" style={{ maxWidth: 500, margin: '40px auto', fontFamily: 'sans-serif', background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px #0001', padding: 32 }}>
      <h2>İletişim / Ön Kayıt</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <input name="name" placeholder="Ad Soyad" value={form.name} onChange={handleChange} required />
        <input name="email" placeholder="E-posta" value={form.email} onChange={handleChange} required type="email" />
        <input name="phone" placeholder="Telefon" value={form.phone} onChange={handleChange} required />
        <textarea name="message" placeholder="Mesajınız" value={form.message} onChange={handleChange} rows={3} />
        <button type="submit" style={{ background: '#ffd700', color: '#222', border: 'none', borderRadius: 4, padding: '10px 0', fontWeight: 'bold', fontSize: 16 }}>Gönder</button>
        {success && <div style={{ color: 'green', marginTop: 8 }}>Başvurunuz alındı, teşekkürler!</div>}
        {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
      </form>
    </div>
  );
} 