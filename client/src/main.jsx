import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx';
import Home from './pages/Home';
// import LocationPage from './pages/location.jsx'
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';

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
      // {

      //   path: '/location',
      //   element: <LocationPage />
      // },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
