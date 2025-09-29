import {  StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Root from './Root';
import './styles/index.css';
import './i18n';




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);