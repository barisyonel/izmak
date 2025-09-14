# 🏭 IZMAK - Makine Yedek Parça & Kalıp İmalatı

<div align="center">

![IZMAK Logo](https://img.shields.io/badge/IZMAK-1960--Present-orange?style=for-the-badge&logo=industry)
![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-18.0+-green?style=for-the-badge&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=for-the-badge&logo=mongodb)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

**1960'tan beri makine yedek parça imalatı, kalıp üretimi ve CNC işleme sektöründe uzmanlaşmış IZMAK'ın modern web platformu**

[🌐 Canlı Site](https://izmirmakinakalip.com) • [📱 Demo](https://izmirmakinakalip.com) • [📧 İletişim](mailto:info@izmak.com)

</div>

---

## 📋 İçindekiler

- [🎯 Proje Hakkında](#-proje-hakkında)
- [✨ Özellikler](#-özellikler)
- [🛠️ Teknoloji Stack'i](#️-teknoloji-stacki)
- [🚀 Kurulum](#-kurulum)
- [📱 Kullanım](#-kullanım)
- [🔒 Güvenlik](#-güvenlik)
- [📊 SEO & Performans](#-seo--performans)
- [🎨 Tasarım](#-tasarım)
- [📈 Deployment](#-deployment)
- [🤝 Katkıda Bulunma](#-katkıda-bulunma)
- [📄 Lisans](#-lisans)

---

## 🎯 Proje Hakkında

IZMAK, 1960 yılından beri makine yedek parça imalatı, plastik enjeksiyon kalıpları, kesme sıvama kalıpları, torna işleri ve CNC işleme merkezi hizmetlerinde uzmanlaşmış köklü bir firmadır. Bu proje, IZMAK'ın dijital varlığını güçlendirmek ve müşteri deneyimini modernize etmek amacıyla geliştirilmiştir.

### 🎯 Hedefler
- **Müşteri Deneyimi**: Modern, hızlı ve kullanıcı dostu arayüz
- **SEO Optimizasyonu**: Arama motorlarında üst sıralarda yer alma
- **Mobil Uyumluluk**: Tüm cihazlarda mükemmel görünüm
- **Güvenlik**: Endüstriyel standartlarda güvenlik önlemleri
- **Performans**: Hızlı yükleme ve optimize edilmiş deneyim

---

## ✨ Özellikler

### 🏠 **Ana Sayfa**
- **Hero Section**: Etkileyici giriş bölümü
- **Hizmet Kartları**: Plastik enjeksiyon, kesme sıvama, CNC işleme
- **Kalıp Görselleri**: Yüksek kaliteli ürün fotoğrafları
- **Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm

### 📝 **Blog Sistemi**
- **Teknik Makaleler**: Sektörel içerikler
- **Kategori Sistemi**: Organize edilmiş içerik
- **SEO Optimizasyonu**: Arama motoru dostu yapı
- **Responsive Kartlar**: Modern blog tasarımı

### 🛍️ **Ürün Yönetimi**
- **Ürün Galerisi**: Dinamik ürün listesi
- **Detay Sayfaları**: Kapsamlı ürün bilgileri
- **Arama Sistemi**: Gelişmiş filtreleme
- **Admin Paneli**: Kolay yönetim arayüzü

### 🖼️ **Galeri & Çizimler**
- **Proje Galerisi**: Tamamlanan işler
- **Teknik Çizimler**: CAD/CAM dosyaları
- **Kategorize Edilmiş**: Düzenli görsel arşiv
- **Lightbox Görüntüleme**: Büyük görsel deneyimi

### 📞 **İletişim**
- **Harita Entegrasyonu**: Google Maps ile konum
- **İletişim Formu**: Güvenli mesaj sistemi
- **Sosyal Medya**: Instagram entegrasyonu
- **WhatsApp**: Direkt iletişim butonu

### 🔐 **Admin Paneli**
- **Dashboard**: İstatistik ve genel bakış
- **Ürün Yönetimi**: CRUD operasyonları
- **Galeri Yönetimi**: Görsel yükleme/düzenleme
- **Çizim Yönetimi**: Teknik dosya yönetimi
- **Güvenlik**: JWT tabanlı kimlik doğrulama

---

## 🛠️ Teknoloji Stack'i

### **Frontend**
- **React 18.2.0** - Modern UI kütüphanesi
- **React Router DOM** - Sayfa yönlendirme
- **Axios** - HTTP istekleri
- **React Helmet Async** - SEO meta tag yönetimi
- **Webpack** - Module bundler
- **Babel** - JavaScript transpiler

### **Backend**
- **Node.js 18+** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL veritabanı
- **Mongoose** - MongoDB ODM
- **JWT** - Token tabanlı kimlik doğrulama
- **bcryptjs** - Şifre hashleme
- **CORS** - Cross-origin resource sharing

### **Güvenlik**
- **SSL/HTTPS** - Şifreli iletişim
- **Rate Limiting** - İstek sınırlama
- **Input Validation** - Veri doğrulama
- **XSS Protection** - Cross-site scripting koruması
- **CSRF Protection** - Cross-site request forgery koruması

### **Deployment**
- **Netlify** - Frontend hosting
- **Railway** - Backend hosting
- **MongoDB Atlas** - Cloud veritabanı
- **Cloudinary** - Görsel yönetimi

---

## 🚀 Kurulum

### **Gereksinimler**
- Node.js 18.0 veya üzeri
- npm 8.0 veya üzeri
- MongoDB Atlas hesabı (ücretsiz)
- Git

### **1. Projeyi Klonlayın**
```bash
git clone https://github.com/barisyonel/izmak.git
cd izmak
```

### **2. Backend Kurulumu**
```bash
cd backend
npm install
```

**Environment Variables (.env)**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/izmak
JWT_SECRET=your-super-secret-jwt-key
NODE_ENV=production
PORT=3001
```

```bash
npm start
```

### **3. Frontend Kurulumu**
```bash
cd frontend
npm install
npm start
```

### **4. Production Build**
```bash
# Frontend build
npm run build

# Backend için PM2
npm install -g pm2
pm2 start ecosystem.config.js
```

---

## 📱 Kullanım

### **Geliştirme Ortamı**
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:3001
- **Admin Panel**: http://localhost:3000/admin

### **Production Ortamı**
- **Ana Site**: https://izmirmakinakalip.com
- **Admin Panel**: https://izmirmakinakalip.com/admin

### **API Endpoints**

#### **Public Endpoints**
```bash
GET    /api/products          # Ürünleri listele
GET    /api/products/:id      # Tekil ürün getir
GET    /api/gallery           # Galeri görselleri
GET    /api/drawings          # Teknik çizimler
POST   /api/contacts          # İletişim formu
```

#### **Admin Endpoints** (JWT Required)
```bash
POST   /api/login             # Admin girişi
POST   /api/products          # Ürün ekle
PUT    /api/products/:id      # Ürün güncelle
DELETE /api/products/:id      # Ürün sil
POST   /api/gallery           # Galeri ekle
POST   /api/drawings          # Çizim ekle
```

---

## 🔒 Güvenlik

### **Güvenlik Önlemleri**
- ✅ **HTTPS/SSL**: Tüm iletişim şifreli
- ✅ **JWT Authentication**: Token tabanlı kimlik doğrulama
- ✅ **Password Hashing**: bcrypt ile şifreleme (12 rounds)
- ✅ **Rate Limiting**: 100 istek/15 dakika sınırı
- ✅ **Brute Force Protection**: 5 başarısız deneme sonrası 15 dakika blok
- ✅ **Input Validation**: Tüm input'lar validate ediliyor
- ✅ **CORS**: Sadece güvenilir domain'ler
- ✅ **XSS Protection**: React ile otomatik korunma
- ✅ **CSRF Protection**: SameSite cookie ayarları

### **Security Headers**
```http
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'
```

---

## 📊 SEO & Performans

### **SEO Optimizasyonu**
- ✅ **Meta Tags**: Title, description, keywords
- ✅ **Open Graph**: Sosyal medya paylaşımları
- ✅ **Twitter Cards**: Twitter optimizasyonu
- ✅ **Structured Data**: Organization, LocalBusiness, BreadcrumbList
- ✅ **Sitemap**: XML sitemap (sitemap.xml)
- ✅ **Robots.txt**: Arama motoru yönlendirmesi
- ✅ **Canonical URLs**: Duplicate content koruması
- ✅ **Hreflang**: Çok dilli destek hazır

### **Performans Metrikleri**
- **Lighthouse Score**: 95/100
- **Core Web Vitals**: İyi
- **Bundle Size**: 752KB (optimize edilmiş)
- **Load Time**: < 2 saniye
- **Mobile Score**: 90/100

### **Optimizasyonlar**
- **Code Splitting**: Vendor ve main bundle ayrımı
- **Tree Shaking**: Kullanılmayan kod temizleme
- **Image Optimization**: WebP desteği
- **Caching**: Browser ve CDN cache stratejisi
- **Minification**: Production build'de minify

---

## 🎨 Tasarım

### **Tasarım Sistemi**
- **Renk Paleti**: Endüstriyel tema (steel, chrome, orange)
- **Typography**: Modern, okunabilir fontlar
- **Spacing**: 8px grid sistemi
- **Breakpoints**: 360px, 480px, 768px, 1200px, 1920px

### **Responsive Tasarım**
- **Mobile First**: Mobil öncelikli tasarım
- **Flexbox/Grid**: Modern layout sistemleri
- **Clamp()**: Responsive font boyutları
- **Viewport Units**: vw, vh kullanımı

### **UI Bileşenleri**
- **Navbar**: Responsive navigation
- **Cards**: Modern kart tasarımı
- **Buttons**: Hover efektleri
- **Forms**: Validation ile form tasarımı
- **Modals**: Overlay bileşenleri

---

## 📈 Deployment

### **Frontend (Netlify)**
```bash
# Build oluştur
npm run build

# Netlify'e deploy et
netlify deploy --prod --dir=dist
```

### **Backend (Railway)**
```bash
# Railway CLI ile deploy
railway login
railway link
railway up
```

### **MongoDB Atlas**
1. MongoDB Atlas hesabı oluştur
2. Cluster oluştur
3. Database user oluştur
4. Connection string'i al
5. Environment variable olarak ekle

### **Domain & SSL**
- **Domain**: izmirmakinakalip.com
- **SSL**: Let's Encrypt (otomatik)
- **CDN**: Netlify CDN
- **DNS**: Cloudflare (opsiyonel)

---

## 🤝 Katkıda Bulunma

### **Geliştirme Süreci**
1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

### **Kod Standartları**
- **ESLint**: JavaScript linting
- **Prettier**: Code formatting
- **Conventional Commits**: Commit message formatı
- **TypeScript**: Gelecekte TypeScript'e geçiş planlanıyor

---

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

---

## 📞 İletişim

**IZMAK Makine Yedek Parça & Kalıp İmalatı**

- **Website**: [izmirmakinakalip.com](https://izmirmakinakalip.com)
- **Email**: info@izmak.com
- **Telefon**: +90-532-134-78-19
- **Adres**: 722/5 Sk No:2, Buca, İzmir, Türkiye
- **Instagram**: [@izmirmakinakalip](https://www.instagram.com/izmirmakinakalip)

**Web Tasarım**: [Barış Can Yönel](https://bariscanyonel.com)

---

<div align="center">

**⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!**

Made with ❤️ by [Barış Can Yönel](https://bariscanyonel.com)

</div>