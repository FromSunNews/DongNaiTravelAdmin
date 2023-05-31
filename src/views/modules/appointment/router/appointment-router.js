import React from 'react'

//Appointment layout
import Appointment from '../layouts/appointment'

// pages
import Dashboard from '../pages/appointment'
import Bookappointment from '../pages/book-appointment'
import Doctorvisit from '../pages/doctor-visit'


export const AppointmentRouter = [
    {
        path: 'appointment',
        element: <Appointment />,
        children: [
            {
                path: 'dashboard',
                element: <Dashboard />
            },
            {
                path: 'book-appointment',
                element: <Bookappointment />
            },
            {
                path: 'doctor-visit',
                element: <Doctorvisit />
            }
        ]
    }
]
