import React from 'react'

//E-commerce layout
import EcommerceLayout from '../layouts/e-commerce'

// pages
import Admindashboard from '../pages/admin/admin-dashboard'
import Userlist from '../pages/app/user-list'
import Userprofile from '../pages/app/user-profile'
import Vendordashboard from '../pages/user/vendor-dashbord'
import Productdetailsthreed from '../pages/product-details-3d'
import Rotateproductdetails from '../pages/product-details-360'
import Orderprocess from '../pages/order-process'
import Categorieslist from '../pages/categories-list'
import Productdetails from '../pages/product-details'
import Productfullgrid from '../pages/product-full-grid'
import Shopleftfilter from '../pages/shop-left-filter'
import Shoprightfilter from '../pages/shop-right-filter'
import Productlist from '../pages/product-list'
import Shopmain from '../pages/shop-main'
import Wishlist from '../pages/wishlist'
import Invoice from '../pages/invoice'

export const EcommerceRouter = [{
  path: 'e-commerce',
  element: <EcommerceLayout />,
  children: [

    {
      path: 'admin/admin-dashboard',
      element: <Admindashboard />,
    },

    {
      path: 'user/vendor-dashbord',
      element: <Vendordashboard />
    },
    {
      path: 'shop-main',
      element: <Shopmain />
    },
    {
      path: 'shop-left-filter',
      element: <Shopleftfilter />
    },
    {
      path: 'shop-right-filter',
      element: <Shoprightfilter />
    },
    {
      path: 'product-full-grid',
      element: <Productfullgrid />
    },
    {
      path: 'product-list',
      element: <Productlist />
    },
    {
      path: 'categories-list',
      element: <Categorieslist />
    },
    {
      path: 'product-details',
      element: <Productdetails />
    },
    {
      path: 'product-details-3d',
      element: <Productdetailsthreed />
    },
    {
      path: 'product-details-360',
      element: <Rotateproductdetails />
    },
    {
      path: 'order-process',
      element: <Orderprocess />
    },
    {
      path: 'invoice',
      element: <Invoice />
    },
    {
      path: 'wishlist',
      element: <Wishlist />
    },
    {
      path: 'app/user-profile',
      element: <Userprofile />
    },
    {
      path: 'app/user-list',
      element: <Userlist />
    },

  ],
}
]