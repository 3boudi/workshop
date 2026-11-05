import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Remove injected Netlify badge if present
const cleanNetlifyBadge = () => {
  const elements = document.querySelectorAll(
    'netlify-badge, #netlify-badge, .netlify-badge, iframe[src*="netlify"], [data-netlify-badge]'
  );
  elements.forEach((el) => el.remove());

  document.querySelectorAll('*').forEach((el) => {
    if (el.tagName.toLowerCase().includes('netlify')) {
      el.remove();
    }
  });
};

if (typeof window !== 'undefined') {
  cleanNetlifyBadge();
  const badgeObserver = new MutationObserver(cleanNetlifyBadge);
  badgeObserver.observe(document.documentElement, { childList: true, subtree: true });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


