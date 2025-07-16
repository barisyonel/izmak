# IZMAK Backend API

Bu proje IZMAK şirketinin web sitesi için backend API'sidir.

## 🚀 Canlıya Alma (Deployment)

### Railway ile Deployment

1. **Railway Hesabı Oluşturma:**
   - [Railway.app](https://railway.app) adresine gidin
   - GitHub hesabınızla giriş yapın

2. **Proje Yükleme:**
   - "New Project" → "Deploy from GitHub repo"
   - GitHub reponuzu seçin
   - Backend klasörünü seçin

3. **MongoDB Veritabanı Ekleme:**
   - Railway dashboard'da "New" → "Database" → "MongoDB"
   - Veritabanı oluşturulduktan sonra "Connect" butonuna tıklayın
   - "MongoDB URI" değerini kopyalayın

4. **Environment Variables Ayarlama:**
   Railway dashboard'da "Variables" sekmesine gidin ve şunları ekleyin:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/izmak
   JWT_SECRET=your-super-secret-jwt-key-here
   CORS_ORIGIN=https://your-frontend-domain.com
   ```

5. **Admin Kullanıcısı Oluşturma:**
   Backend canlıya çıktıktan sonra, Railway dashboard'da "Deployments" sekmesinde "View Logs" butonuna tıklayın ve şu komutu çalıştırın:
   ```bash
   node createAdmin.js
   ```

### Render ile Deployment (Alternatif)

1. **Render Hesabı Oluşturma:**
   - [Render.com](https://render.com) adresine gidin
   - GitHub hesabınızla giriş yapın

2. **Web Service Oluşturma:**
   - "New" → "Web Service"
   - GitHub reponuzu seçin
   - Build Command: `npm install`
   - Start Command: `npm start`

3. **MongoDB Veritabanı:**
   - "New" → "MongoDB"
   - Veritabanı oluşturun ve bağlayın

## 🔧 Yerel Geliştirme

```bash
# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev

# Production sunucusunu başlatın
npm start
```

## 📝 API Endpoints

### Admin İşlemleri
- `POST /api/login` - Admin girişi
- `POST /api/admin/change-password` - Şifre değiştirme

### Ürün İşlemleri
- `GET /api/products` - Tüm ürünleri listele
- `POST /api/products` - Yeni ürün ekle
- `PUT /api/products/:id` - Ürün güncelle
- `DELETE /api/products/:id` - Ürün sil

### İletişim İşlemleri
- `GET /api/contacts` - Tüm iletişim mesajları
- `POST /api/contacts` - Yeni iletişim mesajı

### Galeri İşlemleri
- `GET /api/gallery` - Galeri resimleri
- `POST /api/gallery` - Yeni galeri resmi ekle

### Çizim İşlemleri
- `GET /api/drawings` - Proje çizimleri
- `POST /api/drawings` - Yeni çizim ekle

## 🔐 Güvenlik

- JWT token tabanlı kimlik doğrulama
- Rate limiting (15 dakikada 100 istek)
- Brute force koruması
- Input validation
- CORS koruması

## 📊 Veritabanı Şemaları

### Admin
```javascript
{
  username: String (unique),
  password: String (hashed),
  role: String (admin/superadmin)
}
```

### Product
```javascript
{
  name: String,
  description: String,
  imageUrl: String,
  price: Number
}
```

### Contact
```javascript
{
  name: String,
  email: String,
  phone: String,
  message: String,
  createdAt: Date
}
``` 