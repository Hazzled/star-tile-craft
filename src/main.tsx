import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'

const root = document.getElementById("root")!;
const app = (
  <BrowserRouter>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </BrowserRouter>
);

// Standard SPA setup
createRoot(root).render(app);

