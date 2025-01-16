import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Page from './Page.jsx';
const root = createRoot(document.getElementById('content'));
root.render( /*#__PURE__*/React.createElement(Router, null, /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(Page, null))));