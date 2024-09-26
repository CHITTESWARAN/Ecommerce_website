import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/home/Home.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import SingleProduct from './pages/home/SingleProduct.jsx'
const router =createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>,
      },
      {
        path:"/shop/:id",
        element:<SingleProduct/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>,
)
