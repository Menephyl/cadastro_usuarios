
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from '../src/styles/globalStyles.js'

import { RouterProvider } from 'react-router-dom' // no lugar de home e list users, router provider para controlar as paginas e seu acesso automatizado
import router from './routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
 <RouterProvider router={router}/>
  </StrictMode>
)
