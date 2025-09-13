import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

// CORS configuration
const corsOptions = {
  origin: [
    'https://izmak.netlify.app',
    'http://localhost:3001',
    'http://localhost:3000'
  ],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));

// Production için static files serve et
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')));
}

// Input Validation Middleware
const validateProduct = (req, res, next) => {
  const { name, description, imageUrl, price } = req.body;
  
  if (!name || name.trim().length < 3) {
    return res.status(400).json({ message: 'Ürün adı en az 3 karakter olmalıdır' });
  }
  
  if (!description || description.trim().length < 10) {
    return res.status(400).json({ message: 'Açıklama en az 10 karakter olmalıdır' });
  }
  
  if (!imageUrl || !imageUrl.startsWith('http')) {
    return res.status(400).json({ message: 'Geçerli bir resim URL\'i gerekli' });
  }
  
  if (!price || isNaN(price) || price <= 0) {
    return res.status(400).json({ message: 'Geçerli bir fiyat gerekli' });
  }
  
  next();
};

const validateContact = (req, res, next) => {
  const { name, email, phone, message } = req.body;
  
  if (!name || name.trim().length < 2) {
    return res.status(400).json({ message: 'Ad en az 2 karakter olmalıdır' });
  }
  
  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Geçerli bir email adresi gerekli' });
  }
  
  if (!phone || phone.trim().length < 10) {
    return res.status(400).json({ message: 'Geçerli bir telefon numarası gerekli' });
  }
  
  if (!message || message.trim().length < 10) {
    return res.status(400).json({ message: 'Mesaj en az 10 karakter olmalıdır' });
  }
  
  next();
};

// Gallery ve Drawing validation
const validateGalleryDrawing = (req, res, next) => {
  const { name, imageUrl } = req.body;
  
  if (!name || name.trim().length < 2) {
    return res.status(400).json({ message: 'İsim en az 2 karakter olmalıdır' });
  }
  
  if (!imageUrl || !imageUrl.startsWith('http')) {
    return res.status(400).json({ message: 'Geçerli bir resim URL\'i gerekli' });
  }
  
  next();
};

// Rate Limiting Middleware
const rateLimit = {};
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 100;

const rateLimiter = (req, res, next) => {
  const ip = req.ip;
  const now = Date.now();
  
  if (!rateLimit[ip]) {
    rateLimit[ip] = { count: 1, resetTime: now + RATE_LIMIT_WINDOW };
  } else if (now > rateLimit[ip].resetTime) {
    rateLimit[ip] = { count: 1, resetTime: now + RATE_LIMIT_WINDOW };
  } else {
    rateLimit[ip].count++;
  }
  
  if (rateLimit[ip].count > MAX_REQUESTS) {
    return res.status(429).json({ message: 'Çok fazla istek gönderildi. Lütfen daha sonra tekrar deneyin.' });
  }
  
  next();
};

// Rate limiting'i development ortamında devre dışı bırak
if (process.env.NODE_ENV !== 'development') {
  app.use(rateLimiter);
}

// Brute-force koruması için giriş deneme limiti
const loginAttempts = {};
const MAX_LOGIN_ATTEMPTS = 5;
const LOGIN_BLOCK_TIME = 15 * 60 * 1000; // 15 dakika

function checkLoginAttempts(req, res, next) {
  const { username } = req.body;
  const ip = req.ip;
  const key = `${ip}_${username}`;
  const now = Date.now();
  if (loginAttempts[key] && loginAttempts[key].blockedUntil && now < loginAttempts[key].blockedUntil) {
    return res.status(429).json({ message: 'Çok fazla başarısız giriş denemesi. Lütfen 15 dakika sonra tekrar deneyin.' });
  }
  next();
}

// Admin Schema
const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'superadmin'], default: 'admin' }
});
const Admin = mongoose.model('Admin', adminSchema);

// Product Schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  price: { type: Number, required: true }
});
const Product = mongoose.model('Product', productSchema);

// Banner Schema
const bannerSchema = new mongoose.Schema({
  title: { type: String, required: true },
  imageUrl: { type: String, required: true },
  countdown: { type: String }
});
const Banner = mongoose.model('Banner', bannerSchema);

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true }
}, { timestamps: true });
const Contact = mongoose.model('Contact', contactSchema);

// Gallery Schema
const gallerySchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true }
});
const Gallery = mongoose.model('Gallery', gallerySchema);

// Drawing Schema
const drawingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true }
});
const Drawing = mongoose.model('Drawing', drawingSchema);

// JWT Middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token gerekli' });
  }

  jwt.verify(token, process.env.JWT_SECRET || 'gizli-anahtar', (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Geçersiz token' });
    }
    req.user = user;
    next();
  });
};

// Superadmin kontrolü için middleware
function requireSuperAdmin(req, res, next) {
  if (!req.user) {
    return res.status(401).json({ message: 'Yetkisiz.' });
  }
  Admin.findOne({ username: req.user.username }).then(admin => {
    if (!admin || admin.role !== 'superadmin') {
      return res.status(403).json({ message: 'Bu işlem için superadmin yetkisi gereklidir.' });
    }
    next();
  }).catch(() => res.status(500).json({ message: 'Sunucu hatası' }));
}

// API Router
const apiRouter = express.Router();

// Admin giriş
apiRouter.post('/login', checkLoginAttempts, async (req, res) => {
  try {
    const { username, password } = req.body;
    const ip = req.ip;
    const key = `${ip}_${username}`;
    const admin = await Admin.findOne({ username });
    if (!admin) {
      // Hatalı giriş kaydı
      loginAttempts[key] = loginAttempts[key] || { count: 0 };
      loginAttempts[key].count++;
      if (loginAttempts[key].count >= MAX_LOGIN_ATTEMPTS) {
        loginAttempts[key].blockedUntil = Date.now() + LOGIN_BLOCK_TIME;
      }
      return res.status(401).json({ message: 'Kullanıcı adı veya şifre hatalı.' });
    }
    const validPassword = await bcrypt.compare(password, admin.password);
    if (!validPassword) {
      loginAttempts[key] = loginAttempts[key] || { count: 0 };
      loginAttempts[key].count++;
      if (loginAttempts[key].count >= MAX_LOGIN_ATTEMPTS) {
        loginAttempts[key].blockedUntil = Date.now() + LOGIN_BLOCK_TIME;
      }
      return res.status(401).json({ message: 'Kullanıcı adı veya şifre hatalı.' });
    }
    // Başarılı girişte deneme sayısını sıfırla
    if (loginAttempts[key]) delete loginAttempts[key];
    const token = jwt.sign({ username: admin.username }, process.env.JWT_SECRET || 'gizli-anahtar', { expiresIn: '24h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Sunucu hatası' });
  }
});

// Şifre değiştirme endpoint'i (sadece adminler)
apiRouter.patch('/admin/password', authenticateToken, async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    if (!oldPassword || !newPassword || newPassword.length < 6) {
      return res.status(400).json({ message: 'Geçerli eski ve yeni şifre gereklidir (yeni şifre en az 6 karakter).' });
    }
    const admin = await Admin.findOne({ username: req.user.username });
    if (!admin) {
      return res.status(404).json({ message: 'Admin bulunamadı.' });
    }
    const valid = await bcrypt.compare(oldPassword, admin.password);
    if (!valid) {
      return res.status(401).json({ message: 'Eski şifre yanlış.' });
    }
    const hashed = await bcrypt.hash(newPassword, 12); // bcrypt rounds artırıldı
    admin.password = hashed;
    await admin.save();
    res.json({ message: 'Şifre başarıyla değiştirildi.' });
  } catch (error) {
    res.status(500).json({ message: 'Sunucu hatası' });
  }
});

// Kullanıcı adı değiştirme endpoint'i (sadece kendi hesabı için)
apiRouter.patch('/admin/username', authenticateToken, async (req, res) => {
  try {
    const { newUsername, password } = req.body;
    if (!newUsername || newUsername.length < 3) {
      return res.status(400).json({ message: 'Yeni kullanıcı adı en az 3 karakter olmalı.' });
    }
    if (!password) {
      return res.status(400).json({ message: 'Mevcut şifrenizi girmeniz gereklidir.' });
    }
    const admin = await Admin.findOne({ username: req.user.username });
    if (!admin) {
      return res.status(404).json({ message: 'Admin bulunamadı.' });
    }
    const valid = await bcrypt.compare(password, admin.password);
    if (!valid) {
      return res.status(401).json({ message: 'Şifre yanlış.' });
    }
    // Yeni kullanıcı adı başka bir admin tarafından kullanılıyor mu?
    const exists = await Admin.findOne({ username: newUsername });
    if (exists) {
      return res.status(409).json({ message: 'Bu kullanıcı adı zaten alınmış.' });
    }
    admin.username = newUsername;
    await admin.save();
    res.json({ message: 'Kullanıcı adı başarıyla değiştirildi. Lütfen tekrar giriş yapın.', newUsername });
  } catch (error) {
    res.status(500).json({ message: 'Sunucu hatası' });
  }
});

// Ürünleri listele (herkese açık)
apiRouter.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Sunucu hatası' });
  }
});

// Tekil ürün getir (herkese açık)
apiRouter.get('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Geçersiz ürün ID\'si' });
    }
    
    const product = await Product.findById(id);
    
    if (!product) {
      return res.status(404).json({ message: 'Ürün bulunamadı' });
    }
    
    res.json(product);
  } catch (error) {
    console.error('Ürün getirme hatası:', error);
    res.status(500).json({ message: 'Sunucu hatası' });
  }
});

// Ürün ekle (sadece admin)
apiRouter.post('/products', authenticateToken, validateProduct, async (req, res) => {
  try {
    const { name, description, imageUrl, price } = req.body;
    console.log('Product creation request:', { name, description, imageUrl, price });
    
    const product = new Product({ name, description, imageUrl, price });
    await product.save();
    
    console.log('Product created successfully:', product);
    res.status(201).json(product);
  } catch (error) {
    console.error('Product creation error:', error);
    res.status(500).json({ message: 'Sunucu hatası: ' + error.message });
  }
});

// Ürün güncelle (sadece admin)
apiRouter.put('/products/:id', authenticateToken, validateProduct, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, imageUrl, price } = req.body;
    
    console.log('Product update request:', { id, name, description, imageUrl, price });
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.log('Invalid product ID:', id);
      return res.status(400).json({ message: 'Geçersiz ürün ID\'si' });
    }
    
    const updated = await Product.findByIdAndUpdate(
      id,
      { name, description, imageUrl, price },
      { new: true, runValidators: true }
    );
    
    if (!updated) {
      console.log('Product not found:', id);
      return res.status(404).json({ message: 'Ürün bulunamadı' });
    }
    
    console.log('Product updated successfully:', updated);
    res.json(updated);
  } catch (error) {
    console.error('Ürün güncelleme hatası:', error);
    res.status(500).json({ message: 'Sunucu hatası: ' + error.message });
  }
});

// Ürün sil (sadece admin)
apiRouter.delete('/products/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    console.log('Product deletion request:', id);
    
    const deleted = await Product.findByIdAndDelete(id);
    if (!deleted) {
      console.log('Product not found for deletion:', id);
      return res.status(404).json({ message: 'Ürün bulunamadı' });
    }
    
    console.log('Product deleted successfully:', id);
    res.status(204).end();
  } catch (error) {
    console.error('Product deletion error:', error);
    res.status(500).json({ message: 'Sunucu hatası: ' + error.message });
  }
});

// Banner endpoint'leri
apiRouter.get('/banner', async (req, res) => {
  try {
    const banner = await Banner.findOne();
    res.json(banner);
  } catch (error) {
    res.status(500).json({ message: 'Sunucu hatası' });
  }
});

apiRouter.post('/banner', authenticateToken, async (req, res) => {
  try {
    const { title, imageUrl, countdown } = req.body;
    let banner = await Banner.findOne();
    if (banner) {
      banner.title = title;
      banner.imageUrl = imageUrl;
      banner.countdown = countdown;
    } else {
      banner = new Banner({ title, imageUrl, countdown });
    }
    await banner.save();
    res.json(banner);
  } catch (error) {
    res.status(500).json({ message: 'Sunucu hatası' });
  }
});

// Contact endpoint'leri
apiRouter.post('/contacts', validateContact, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const contact = new Contact({ name, email, phone, message });
    await contact.save();
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ message: 'Sunucu hatası' });
  }
});

apiRouter.get('/contacts', authenticateToken, async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Sunucu hatası' });
  }
});

// Gallery endpoints
apiRouter.get('/gallery', async (req, res) => {
  try {
    const items = await Gallery.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Sunucu hatası' });
  }
});
apiRouter.post('/gallery', authenticateToken, validateGalleryDrawing, async (req, res) => {
  try {
    const { name, imageUrl } = req.body;
    const item = new Gallery({ name, imageUrl });
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: 'Sunucu hatası' });
  }
});
apiRouter.put('/gallery/:id', authenticateToken, validateGalleryDrawing, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, imageUrl } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Geçersiz galeri ID\'si' });
    }
    
    const updated = await Gallery.findByIdAndUpdate(id, { name, imageUrl }, { new: true, runValidators: true });
    if (!updated) return res.status(404).json({ message: 'Görsel bulunamadı.' });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Sunucu hatası' });
  }
});
apiRouter.delete('/gallery/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Geçersiz galeri ID\'si' });
    }
    
    const deleted = await Gallery.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: 'Görsel bulunamadı' });
    }
    
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: 'Sunucu hatası' });
  }
});

// Drawing endpoints
apiRouter.get('/drawings', async (req, res) => {
  try {
    const items = await Drawing.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Sunucu hatası' });
  }
});
apiRouter.post('/drawings', authenticateToken, validateGalleryDrawing, async (req, res) => {
  try {
    const { name, imageUrl } = req.body;
    const item = new Drawing({ name, imageUrl });
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: 'Sunucu hatası' });
  }
});
apiRouter.put('/drawings/:id', authenticateToken, validateGalleryDrawing, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, imageUrl } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Geçersiz çizim ID\'si' });
    }
    
    const updated = await Drawing.findByIdAndUpdate(id, { name, imageUrl }, { new: true, runValidators: true });
    if (!updated) return res.status(404).json({ message: 'Çizim bulunamadı.' });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Sunucu hatası' });
  }
});
apiRouter.delete('/drawings/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Geçersiz çizim ID\'si' });
    }
    
    const deleted = await Drawing.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: 'Çizim bulunamadı' });
    }
    
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: 'Sunucu hatası' });
  }
});

// Analytics endpoints
apiRouter.get('/analytics/dashboard', authenticateToken, async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments();
    const totalContacts = await Contact.countDocuments();
    
    // Son 30 günlük istatistikler
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    const recentContacts = await Contact.countDocuments({
      createdAt: { $gte: thirtyDaysAgo }
    });
    
    // Fiyat ortalaması
    const avgPrice = await Product.aggregate([
      { $group: { _id: null, avgPrice: { $avg: '$price' } } }
    ]);
    
    // En yüksek fiyatlı ürün
    const mostExpensive = await Product.findOne().sort({ price: -1 });
    
    // En düşük fiyatlı ürün
    const leastExpensive = await Product.findOne().sort({ price: 1 });
    
    res.json({
      totalProducts,
      totalContacts,
      recentContacts,
      avgPrice: avgPrice[0]?.avgPrice || 0,
      mostExpensive: mostExpensive?.price || 0,
      leastExpensive: leastExpensive?.price || 0
    });
  } catch (error) {
    console.error('Analytics error:', error);
    res.status(500).json({ message: 'Sunucu hatası' });
  }
});

// Search endpoint
apiRouter.get('/products/search', async (req, res) => {
  try {
    const { q, sortBy = 'name', sortOrder = 'asc' } = req.query;
    
    let query = {};
    if (q) {
      query = {
        $or: [
          { name: { $regex: q, $options: 'i' } },
          { description: { $regex: q, $options: 'i' } }
        ]
      };
    }
    
    const sortOptions = {};
    sortOptions[sortBy] = sortOrder === 'asc' ? 1 : -1;
    
    const products = await Product.find(query).sort(sortOptions);
    res.json(products);
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ message: 'Sunucu hatası' });
  }
});

// Bulk operations
apiRouter.delete('/products/bulk', authenticateToken, async (req, res) => {
  try {
    const { ids } = req.body;
    
    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ message: 'Geçerli ürün ID\'leri gerekli' });
    }
    
    const result = await Product.deleteMany({ _id: { $in: ids } });
    res.json({ message: `${result.deletedCount} ürün silindi` });
  } catch (error) {
    console.error('Bulk delete error:', error);
    res.status(500).json({ message: 'Sunucu hatası' });
  }
});

// Admin silme (sadece superadmin)
apiRouter.delete('/admin/:username', authenticateToken, requireSuperAdmin, async (req, res) => {
  try {
    const { username } = req.params;
    if (username === req.user.username) {
      return res.status(400).json({ message: 'Kendi hesabınızı silemezsiniz.' });
    }
    const deleted = await Admin.findOneAndDelete({ username });
    if (!deleted) {
      return res.status(404).json({ message: 'Admin bulunamadı.' });
    }
    res.json({ message: 'Admin başarıyla silindi.' });
  } catch (error) {
    res.status(500).json({ message: 'Sunucu hatası' });
  }
});

// Admin rolünü değiştirme (sadece superadmin)
apiRouter.patch('/admin/:username/role', authenticateToken, requireSuperAdmin, async (req, res) => {
  try {
    const { username } = req.params;
    const { role } = req.body;
    if (!['admin', 'superadmin'].includes(role)) {
      return res.status(400).json({ message: 'Geçersiz rol.' });
    }
    if (username === req.user.username) {
      return res.status(400).json({ message: 'Kendi rolünüzü değiştiremezsiniz.' });
    }
    const updated = await Admin.findOneAndUpdate(
      { username },
      { role },
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ message: 'Admin bulunamadı.' });
    }
    res.json({ message: 'Admin rolü güncellendi.', admin: updated });
  } catch (error) {
    res.status(500).json({ message: 'Sunucu hatası' });
  }
});

// Mount API router
app.use('/api', apiRouter);

// Production için catch-all route
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
  });
}

const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://takasan97:gandalf60@cluster0.yypn2p7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    console.log('MongoDB connected successfully');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
    console.log('Server starting without database connection...');
    app.listen(PORT, () => console.log(`Server running on port ${PORT} (without DB)`));
  }); 