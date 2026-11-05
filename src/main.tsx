import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Remove injected Netlify badge if present
const cleanNetlifyBadge = () => {
  const elements = document.querySelectorAll(
    'iframe, fi-badge, netlify-badge, #netlify-badge, .netlify-badge, [data-netlify-badge]'
  );
  elements.forEach((el) => {
    (el as HTMLElement).style?.setProperty('display', 'none', 'important');
    (el as HTMLElement).style?.setProperty('visibility', 'hidden', 'important');
    try {
      el.remove();
    } catch (_) {}
  });

  document.querySelectorAll('*').forEach((el) => {
    const tag = el.tagName.toLowerCase();
    if (tag.includes('netlify') || tag === 'fi-badge') {
      try {
        el.remove();
      } catch (_) {}
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


