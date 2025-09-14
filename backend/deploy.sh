#!/bin/bash

# IZMAK Backend Deployment Script for Linux Hosting
echo "🚀 Starting IZMAK Backend Deployment..."

# Create logs directory
mkdir -p logs

# Install dependencies
echo "📦 Installing dependencies..."
npm install --production

# Create PM2 logs directory
mkdir -p logs

# Start with PM2
echo "🔄 Starting application with PM2..."
pm2 start ecosystem.config.js

# Save PM2 configuration
pm2 save

# Setup PM2 startup
pm2 startup

echo "✅ Backend deployment completed!"
echo "📊 Check status: pm2 status"
echo "📝 View logs: pm2 logs izmak-backend"
echo "🔄 Restart: pm2 restart izmak-backend"

