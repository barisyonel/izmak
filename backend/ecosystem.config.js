module.exports = {
  apps: [{
    name: 'izmak-backend',
    script: 'index.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3001,
      MONGODB_URI: 'mongodb+srv://takasan97:gandalf60@cluster0.yypn2p7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
      JWT_SECRET: 'your-super-secret-jwt-key-change-this-in-production',
      CLOUDINARY_CLOUD_NAME: 'ddm7ouuwk',
      CLOUDINARY_API_KEY: '124233114537888',
      CLOUDINARY_API_SECRET: 'rsxS4_70u6-J2Tx4cxUvkGzdxCg'
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true
  }]
};

