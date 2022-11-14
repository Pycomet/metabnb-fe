import './App.css';
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import IndexPage from './pages';
import PlaceToStayPage from './pages/placetostay';
import ErrorPage from './pages/error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/placetostay",
    element: <PlaceToStayPage />,
    errorElement: <ErrorPage />
  }
])

function App() {
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
