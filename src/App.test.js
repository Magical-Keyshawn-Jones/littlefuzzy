import App from './App';
import Apps from './App.fake';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { Home } from './Home Components/Home';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import { storage } from './index.js'

test('App Renders without errors', () => {
    render(<Home something={'I wuv you'} />)
})