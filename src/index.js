import './index.css';
import Apps from './App.fake';
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<Apps/>)