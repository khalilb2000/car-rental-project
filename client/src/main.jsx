import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx';
import Home from './pages/Home';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login';
import About from './pages/About.jsx';
import Product from './pages/Product.jsx';
import Payment from './pages/Payment.jsx'
import Cart from './pages/Cart.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/Product',
        element: <Product />
      }, {
        path: '/About',
        element: <About />
      }, {
        path: '/Payment',
        element: <Payment />
      }, {
        path: '/Cart',
        element: <Cart />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
