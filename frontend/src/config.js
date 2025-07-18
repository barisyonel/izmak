// API Configuration
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://izmak-production.up.railway.app' 
  : '';

export const API_ENDPOINTS = {
  PRODUCTS: `${API_BASE_URL}/api/products`,
  LOGIN: `${API_BASE_URL}/api/login`,
  CONTACTS: `${API_BASE_URL}/api/contacts`,
  GALLERY: `${API_BASE_URL}/api/gallery`,
  DRAWINGS: `${API_BASE_URL}/api/drawings`,
  ANALYTICS: `${API_BASE_URL}/api/analytics/dashboard`,
  BANNER: `${API_BASE_URL}/api/banner`,
};

export default API_BASE_URL; 