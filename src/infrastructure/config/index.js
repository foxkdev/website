const getApiBaseUrl = () => import.meta.env.VITE_API_URL || 'http://localhost:3000'
const getCookiesDomain = () => import.meta.env.VITE_COOKIES_DOMAIN || 'localhost'
export { getApiBaseUrl, getCookiesDomain }

