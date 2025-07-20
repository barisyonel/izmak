import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Admin Schema
const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'superadmin'], default: 'admin' }
});
const Admin = mongoose.model('Admin', adminSchema);

async function deleteAdmin() {
  try {
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/izmak';
    
    await mongoose.connect(MONGODB_URI, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    });
    
    console.log('MongoDB bağlantısı başarılı');
    
    // Admin kullanıcısını sil
    const result = await Admin.deleteOne({ username: 'admin' });
    
    if (result.deletedCount > 0) {
      console.log('Admin kullanıcısı başarıyla silindi!');
    } else {
      console.log('Admin kullanıcısı bulunamadı.');
    }
    
  } catch (error) {
    console.error('Hata:', error.message);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

deleteAdmin(); 