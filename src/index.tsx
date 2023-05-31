import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

//router
import { BrowserRouter } from 'react-router-dom'

//store
import { store } from './redux/store'

//reducer
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

//toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { injectStore } from './interceptor/customAxios'
injectStore(store)

let persistor = persistStore(store)


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
          <ToastContainer/>
        </PersistGate>
      </Provider>
  </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
