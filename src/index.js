import React from "react";
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App'; // Ensure the path is correct

// Get the DOM element where you want to render the React app
const rootElement = document.getElementById('root');

// Create a root and render the App component
const root = createRoot(rootElement);
root.render(<App />);
