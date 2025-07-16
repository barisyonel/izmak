# Full Stack Ürün Yönetimi Projesi

Bu proje, React (frontend), Node.js/Express (backend) ve MongoDB (veritabanı) kullanarak ürün ekleyip çıkarabileceğiniz basit bir full stack uygulamadır.

## Özellikler
- Ürün ekleme
- Ürün silme
- Ürünleri listeleme

## Kurulum

### 1. Backend Kurulumu
```bash
cd backend
npm install
npm start
```

### 2. Frontend Kurulumu
```bash
cd frontend
npm install
npm start
```

### 3. MongoDB
- Localde MongoDB çalıştırın veya bir MongoDB Atlas bağlantı adresi kullanın.
- Bağlantı adresini `backend/.env` dosyasına yazın:
  ```env
  MONGODB_URI=mongodb+srv://takasan97:gandalf60@deneme.b7t9xjp.mongodb.net/?retryWrites=true&w=majority&appName=deneme
  PORT=5001
  ```

## Kullanım
- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:5000](http://localhost:5000) 