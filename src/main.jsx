
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import { ContextProvider } from './contexts/ContextProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextProvider>

)
