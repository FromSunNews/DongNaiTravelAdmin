import React from 'react'

//Auth pro
import Accountdeactivate from "../pages/account-deactivate"
import Authemail from "../pages/email"
import Lockscreen from "../pages/lock-screen"
import Resetpassword from "../pages/reset-password"
import Signin from "../pages/sign-in"
import Signup from "../pages/sign-up"
import Twofactor from "../pages/two-factor"
import SignIn from "../pages/simple/sign-in"
import SignUp from "../pages/simple/sign-up"

export const SimpleAuthRouter = [
    // Animated
    {
        path: 'auth/sign-in',
        element: <Signin />
    },
    {
        path: 'auth/sign-up',
        element: <Signup />
    },
    {
        path: 'auth/sign-up',
        element: <SignUp />
    },
    {
        path: 'auth/email',
        element: <Authemail />
    },
    {
        path: 'auth/lock-screen',
        element: <Lockscreen />
    },
    {
        path: 'auth/reset-password',
        element: <Resetpassword />
    },
    {
        path: 'auth/two-factor',
        element: <Twofactor />
    },
    {
        path: 'auth/account-deactivate',
        element: <Accountdeactivate />
    },
    {
        path: 'auth/simple/sign-in',
        element: <SignIn />
    },
    {
        path: 'auth/simple/sign-up',
        element: <SignUp />
    }

]