# 🐧 Güzelnet Linux Hosting'e IZMAK Projesi Yükleme Rehberi

## 📋 Gerekli Dosyalar
- ✅ `frontend-build.zip` - Frontend build dosyaları
- ✅ `backend-build.zip` - Backend kaynak kodları
- ✅ Domain: `izmirmakinakalip.com`

## 🚀 Adım Adım Kurulum

### 1. Frontend Yükleme (Web Sitesi)

#### A) cPanel'e Giriş
1. Güzelnet cPanel'e giriş yapın
2. **File Manager** açın
3. `public_html` klasörüne gidin

#### B) Frontend Dosyalarını Yükleyin
1. `frontend-build.zip` dosyasını yükleyin
2. Zip dosyasını çıkarın
3. Tüm dosyaları `public_html` içine taşıyın

#### C) Domain Ayarları
1. cPanel → **Subdomains** veya **Addon Domains**
2. `izmirmakinakalip.com` domain'ini ekleyin
3. Document root: `public_html`

### 2. Backend Yükleme (API Sunucusu)

#### A) Backend Klasörü Oluşturun
```bash
# SSH ile sunucuya bağlanın
mkdir /home/username/izmak-backend
cd /home/username/izmak-backend
```

#### B) Backend Dosyalarını Yükleyin
1. `backend-build.zip` dosyasını yükleyin
2. Zip dosyasını çıkarın

#### C) Node.js Kurulumu
```bash
# Node.js 18+ kurulumu (eğer yoksa)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Versiyon kontrolü
node --version
npm --version
```

#### D) PM2 Kurulumu
```bash
# PM2 global kurulumu
sudo npm install -g pm2

# PM2 versiyon kontrolü
pm2 --version
```

#### E) Backend Bağımlılıklarını Yükleyin
```bash
cd /home/username/izmak-backend
npm install --production
```

#### F) Environment Variables Ayarlayın
```bash
# .env dosyası oluşturun
nano .env
```

`.env` dosyası içeriği:
```env
NODE_ENV=production
PORT=3001
MONGODB_URI=mongodb+srv://takasan97:gandalf60@cluster0.yypn2p7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
CLOUDINARY_CLOUD_NAME=ddm7ouuwk
CLOUDINARY_API_KEY=124233114537888
CLOUDINARY_API_SECRET=rsxS4_70u6-J2Tx4cxUvkGzdxCg
```

#### G) Backend'i Başlatın
```bash
# Deploy script'ini çalıştırın
chmod +x deploy.sh
./deploy.sh

# Veya manuel olarak:
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### 3. Nginx Yapılandırması (Opsiyonel)

#### A) Nginx Config Oluşturun
```bash
sudo nano /etc/nginx/sites-available/izmirmakinakalip.com
```

#### B) Nginx Config İçeriği
```nginx
server {
    listen 80;
    server_name izmirmakinakalip.com www.izmirmakinakalip.com;
    
    # Frontend (React)
    location / {
        root /home/username/public_html;
        try_files $uri $uri/ /index.html;
    }
    
    # Backend API
    location /api {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

#### C) Nginx'i Aktifleştirin
```bash
sudo ln -s /etc/nginx/sites-available/izmirmakinakalip.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 4. SSL Sertifikası (Let's Encrypt)

#### A) Certbot Kurulumu
```bash
sudo apt update
sudo apt install certbot python3-certbot-nginx
```

#### B) SSL Sertifikası Alın
```bash
sudo certbot --nginx -d izmirmakinakalip.com -d www.izmirmakinakalip.com
```

### 5. Test ve Kontrol

#### A) Backend Test
```bash
# PM2 durumu
pm2 status

# Logları kontrol edin
pm2 logs izmak-backend

# Backend test
curl http://localhost:3001/api/products
```

#### B) Frontend Test
- Tarayıcıda `https://izmirmakinakalip.com` açın
- Admin paneline giriş yapın: `/login`
- API bağlantısını test edin

### 6. Güvenlik Ayarları

#### A) Firewall Ayarları
```bash
sudo ufw allow 22    # SSH
sudo ufw allow 80    # HTTP
sudo ufw allow 443   # HTTPS
sudo ufw enable
```

#### B) PM2 Güvenlik
```bash
# PM2 logları temizleme
pm2 flush

# PM2 monitoring
pm2 monit
```

## 🔧 Sorun Giderme

### Backend Çalışmıyorsa:
```bash
pm2 logs izmak-backend
pm2 restart izmak-backend
```

### Frontend Yüklenmiyorsa:
- cPanel File Manager'da dosya izinlerini kontrol edin
- `.htaccess` dosyası oluşturun (gerekirse)

### SSL Çalışmıyorsa:
```bash
sudo certbot renew --dry-run
```

## 📞 Destek
- PM2 Dokümantasyonu: https://pm2.keymetrics.io/
- Nginx Dokümantasyonu: https://nginx.org/en/docs/
- Let's Encrypt: https://letsencrypt.org/

## ✅ Başarı Kontrol Listesi
- [ ] Frontend `https://izmirmakinakalip.com` açılıyor
- [ ] Backend API `https://izmirmakinakalip.com/api/products` çalışıyor
- [ ] Admin paneli `/login` sayfası açılıyor
- [ ] SSL sertifikası aktif
- [ ] PM2 backend'i yönetiyor
- [ ] MongoDB bağlantısı çalışıyor

