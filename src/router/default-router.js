import React from 'react'

// default layout
import Default from '../layouts/dashboard/default'

import Dashboard from '../views/modules/social/pages/dashboard'
import PlacesCreate from '../pages/places/PlacesCreate'
import PlacesContent from '../pages/places/PlacesContent'
import PlacesReport from '../pages/places/PlacesReport'
import PlacesStatistic from '../pages/places/PlacesStatistic'
import Error404 from '../views/dashboard/errors/error404'
import SignIn from '../pages/auth/SignIn'

export const DefaultRouter = [
    {
        path: "/signin",
        element: <SignIn />
    },
    {
        path: "/",
        element: <Default />,
        children: [
            // Phuong: Dashboard
            {
                path: "/",
                element: <Dashboard />
            },
            // Phuong: Địa điểm
            {
                path: "/places/create",
                element: <PlacesCreate />
            },
            {
                path: "/places/content",
                element: <PlacesContent />
            },
            {
                path: "/places/report",
                element: <PlacesReport />
            },
            {
                path: "/places/statistic",
                element: <PlacesStatistic />
            }
            // Phuong: Địa điểm
        ]
    },
    {
        path: "*",
        element: <Error404 />
    },
]
