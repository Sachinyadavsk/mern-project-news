import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { Provider } from 'react-redux';
import Store from './redux/Store.js';
import { Toaster } from './components/ui/sonner';
import ThemeProvider from './components/ThemeProvider';
import { HashRouter } from 'react-router-dom'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
      <ThemeProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
      <Toaster />
    </Provider>
  </StrictMode>,
)
