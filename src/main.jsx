import ReactDOM from 'react-dom/client';
import { ProviderApp } from './context/index.jsx';
import App from './App.jsx';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProviderApp>
    <App />
  </ProviderApp>,
)
