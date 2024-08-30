import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router.tsx'
import { GoogleOAuthProvider } from "@react-oauth/google"

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
if (!googleClientId) {
  throw new Error('VITE_GOOGLE_CLIENT_ID is required')
}

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <GoogleOAuthProvider clientId={googleClientId}>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </StrictMode>,
)
