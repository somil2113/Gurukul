const isLocalHost =
    typeof window !== 'undefined' &&
    (window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost');

const CONFIG = {
    // Use local API for local development, Vercel API for deployed usage.
    API_BASE_URL: isLocalHost
        ? 'http://localhost:5001/api'
        : 'https://gurukul-8uzq.vercel.app/api'
};
