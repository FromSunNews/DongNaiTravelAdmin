import { configureStore } from '@reduxjs/toolkit'
import notificationsReducer from './notifications/notificationsSlice'
import userReducer from './user/userSlice'
import settingsReducer from './settings/settingsSlice'
import safetyReportReducer from './safety_report/SafetyReportSlice'

// https://www.npmjs.com/package/redux-persist
// https://edvins.io/how-to-use-redux-persist-with-redux-toolkit
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // default là localstorage

const persistConfig = {
  key: 'root',
  // luu tru o local storage
  storage: storage,
  whitelist: ['user'] // định nghĩa các slice được phép duy trì qua mỗi lần f5 trình duyệt
  // blacklist: ['user'] // // định nghĩa các slice không được phép duy trì qua mỗi lần f5 trình duyệt
}

const reducers = combineReducers({
  user: userReducer,
  notifications: notificationsReducer,
  settings: settingsReducer,
  safetyReport: safetyReportReducer
})

const persistedReducers = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducers,
  // Fix warning error when implement redux-persist
  // https://stackoverflow.com/a/63244831/8324172
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})