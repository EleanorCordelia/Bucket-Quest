import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="449645292599-9jn75ng4t448mpm2i9b1mk8c51eflube.apps.googleusercontent.com">
        <App />
    </GoogleOAuthProvider>
  </StrictMode>,
)
