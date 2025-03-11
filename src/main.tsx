import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './../redux/store.ts'
import { Flip, ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />

      <ToastContainer autoClose={1500} transition={Flip} />
    </Provider>
  </StrictMode>
)
