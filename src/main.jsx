import { createRoot } from 'react-dom/client'
import './i18n/i18n.js'; // Import i18n configuration
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'
import i18n from './i18n/i18n.js';
import { I18nextProvider } from 'react-i18next';

createRoot(document.getElementById('root')).render(
    <I18nextProvider i18n={i18n}>
        <App />
    </I18nextProvider>
)
