import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

// Admin Schema
const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'superadmin'], default: 'admin' }
});
const Admin = mongoose.model('Admin', adminSchema);

async function createAdmin() {
  try {
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/izmak';
    
    await mongoose.connect(MONGODB_URI, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    });
    
    console.log('MongoDB bağlantısı başarılı');
    
    // Admin bilgileri
    const adminData = {
      username: 'admin',
      password: 'admin123', // Bu şifreyi değiştirin!
      role: 'superadmin'
    };
    
    // Mevcut admin kontrolü
    const existingAdmin = await Admin.findOne({ username: adminData.username });
    if (existingAdmin) {
      console.log('Admin kullanıcısı zaten mevcut');
      process.exit(0);
    }
    
    // Şifreyi hash'le
    const hashedPassword = await bcrypt.hash(adminData.password, 12);
    
    // Admin oluştur
    const admin = new Admin({
      username: adminData.username,
      password: hashedPassword,
      role: adminData.role
    });
    
    await admin.save();
    console.log('Admin kullanıcısı başarıyla oluşturuldu!');
    console.log('Kullanıcı adı:', adminData.username);
    console.log('Şifre:', adminData.password);
    console.log('⚠️  Lütfen şifreyi değiştirin!');
    
  } catch (error) {
    console.error('Hata:', error.message);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

createAdmin(); 