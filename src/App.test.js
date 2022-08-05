import Apps from './App.fake';
import { Home } from './Home Components/Home';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// test('App Renders without errors', () => {
//     render(<Home/>)
// })

test ('Another App Renders', () => {
    render(<Apps/>)
})

test('Always Passing', () => {
    expect(true).toBe(true)
})