import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../Home/Home';
import Main from '../layouts/Main';

const Router = () => {
    const router=createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                }
            ]
        },
        {
            path:'/*',
            element:<div>This page is not available</div>
        }
    ])
    return (
        <RouterProvider router={router}>
          
        </RouterProvider>
    );
};

export default Router;
