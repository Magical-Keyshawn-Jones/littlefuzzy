import Apps from './App.fake';
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('I love Testing of all Kinds!', () => {
    expect(true).toBe(true)
})

test ('Renders Application', () => {
    render(<Apps/>)
})