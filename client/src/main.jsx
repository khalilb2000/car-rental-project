import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx';
import Home from './pages/Home';

import LocationPage from './pages/location';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import ProductInfo from './pages/ProductInfo.jsx';


// import About from './pages/About.jsx';
// import Product from './pages/Product.jsx';
// import Payment from './pages/Payment.jsx'
// import Cart from './pages/Cart.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {

        path: '/location',
        element: <LocationPage />
      },
      {
        path: '/product-info',
        element: <ProductInfo />,
      },
      {
        path: '/login',
        element: <Login />
      }, 
      {
        path: '/signup',
        element: <Signup />
      },
      //     path: '/Product',
      //     element: <Product />
      //   }, {
      //     path: '/About',
      //     element: <About />
      //   }, {
      //     path: '/Payment',
      //     element: <Payment />
      //   }, {
      //     path: '/Cart',
      //     element: <Cart />
      // }


    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
