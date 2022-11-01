import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import Home from "../components/Home";
import Update from "../components/Update";
import Main from "../layout/Main";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children:[
         {
            path:'/',
            loader:()=>fetch('http://localhost:5000/product'),
            element: <Home />
         },
         {
            path:'/update/:id',
            loader:({params})=>fetch(`http://localhost:5000/product/${params.id}`),
            element:<Update />
         },
         {
            path:'/addproduct',
            element: <AddProduct />
         }
        ]
    }
])