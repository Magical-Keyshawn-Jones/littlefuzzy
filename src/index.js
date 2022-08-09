import './index.css';
import Apps from './App.fake';
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root')
export const root = createRoot(container)
root.render(<Apps/>)

// import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";
// import { storage } from "./App.fake";

// import App from "./App";
// import "./App.css";

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//     <Provider store={storage}>
//     <BrowserRouter>
//         <App/>
//     </BrowserRouter>
// </Provider>, rootElement);