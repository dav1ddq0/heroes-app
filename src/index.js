import React from 'react';
import ReactDOM from 'react-dom/client';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { HeroesApp } from './HeroesApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HeroesApp />
);


