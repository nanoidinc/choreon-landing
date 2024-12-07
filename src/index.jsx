import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Layout } from './layout';
import { Home, About, Docs } from './components/pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/docs",
        element: <Docs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
