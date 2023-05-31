import React, { useEffect } from 'react'
//scss
import "shepherd.js/dist/css/shepherd.css";
import "flatpickr/dist/flatpickr.css";
import 'choices.js/public/assets/styles/choices.min.css'
import "./assets/scss/hope-ui.scss"
import "./assets/scss/pro.scss"
import "./assets/scss/custom.scss"
import "./assets/scss/dark.scss"
import "./assets/scss/rtl.scss"
import "./assets/scss/customizer.scss"
import "./assets/custom/scss/custom.scss"

// Redux Selector / Action
import { useDispatch, useSelector } from 'react-redux';
import { setSetting } from './redux/settings/actions';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { selectIsAuthenticated } from './redux/user/userSlice';


import Default from './layouts/dashboard/default'

import Dashboard from './views/modules/social/pages/dashboard'
import PlacesCreate from './pages/places/PlacesCreate'
import PlacesContent from './pages/places/PlacesContent'
import PlacesReport from './pages/places/PlacesReport'
import PlacesStatistic from './pages/places/PlacesStatistic'
import Error404 from './views/dashboard/errors/error404'
import SignIn from './pages/auth/SignIn'
import SendEmail from './pages/auth/SendEmail';
import SentEmail from './pages/auth/SentEmail';
import ResetPassword from './pages/auth/ResetPassword';
import Verify from './pages/auth/Verify';

// import state selectors

function App(props: any) {
  const dispatch = useDispatch()

  const isAuthenticated = useSelector(selectIsAuthenticated)
  console.log("🚀 ~ file: App.tsx:42 ~ App ~ isAuthenticated:", isAuthenticated)

  const publicRoutes = ['/signin', '/404', '/send-email', '/sent-email', '/verify', '/reset-password'] // Phuong: only have 2 pages for public routes
  const location = useLocation()

  useEffect(() => {
    dispatch(setSetting())
  }, [])

  if (!publicRoutes.includes(location.pathname) && !isAuthenticated) {
    return <Navigate to='/signin' />
  } 

    return (
      <div className="App">
        <Routes>
          <Route 
            path='/' 
            element={<Default />}
          >
            <Route index element={<Dashboard />} />
            <Route path="/places/create" element={<PlacesCreate />} />
            <Route path="/places/content" element={<PlacesContent />} />
            <Route path="/places/report" element={<PlacesReport />} />
            <Route path="/places/statistic" element={<PlacesStatistic />} />
          </Route>
  
          <Route path='/signin' element={<SignIn />} />

          <Route path='/send-email' element={<SendEmail />} />
          <Route path='/sent-email' element={<SentEmail />} />

          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/verify' element={<Verify />} />
  
          {/* 404 offen set last */}
          <Route path='*' element={
            <Error404 />
          }/>
        </Routes>
      </div>
    )
}

export default App;