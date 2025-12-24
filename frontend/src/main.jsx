import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { Provider } from 'react-redux';
import Store from './redux/Store.js';
import { Toaster } from './components/ui/sonner';
import ThemeProvider from './components/ThemeProvider';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
      <Toaster />
    </Provider>
  </StrictMode>,
)
