import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx';
import Home from './pages/Home';
import ProductInfo from './pages/ProductInfo.jsx';
// import Signup from './pages/Payment.jsx';
// import Login from './pages/Login';
// import SingleThought from './pages/About.jsx';
// import Profile from './pages/ProductInfo.jsx';
// import ErrorPage from './pages/location.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/product-info',
        element: <ProductInfo />,
      }
      //
      //   path: '/login',
      //   element: <Login />
      // }, {
      //   path: '/signup',
      //   element: <Signup />
      // }, {
      //   path: '/profiles/:username',
      //   element: <Profile />
      // }, {
      //   path: '/me',
      //   element: <Profile />
      // }, {
      //   path: '/thoughts/:thoughtId',
      //   element: <SingleThought />
      // }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
