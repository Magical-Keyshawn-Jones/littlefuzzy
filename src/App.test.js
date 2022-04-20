import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

test ('renders learn react link', async () => {
    render(
        <Router>
            <App/>
        </Router>
    )
    const title = screen.queryByText(/Welcome to my Home/i)
     expect(title).toBeInTheDocument()
})