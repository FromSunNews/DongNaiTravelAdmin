import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import authorizedAxiosInstance from 'utilities/customAxios'
// import { API_ROOT } from 'utilities/constants'

const initialState = {
  currentNotifications: null
}

// export const fetchInvitationsAPI = createAsyncThunk('notifications/fetchInvitationsAPI', async () => {
//   const request = await authorizedAxiosInstance.get(`${API_ROOT}/v2/invitations`)
//   return request.data
// })

// export const updateBoardInvitationAPI = createAsyncThunk(
//   'notifications/updateBoardInvitationAPI',
//   async ({ action, notificationId }) => {
//     const request = await authorizedAxiosInstance.put(`${API_ROOT}/v2/invitations/board/${notificationId}`, { action })
//     return request.data
//   }
// )

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    clearCurrentNotifications: (state: any) => {
      state.currentNotifications = null
    },
    updateCurrentNotifications: (state: any, action: any) => {
      state.currentNotifications = action.payload
    },
    addNotification: (state: any, action: any) => {
      // unshift là thêm phần từ vào đầu mảng, ngược lại với push
      (state?.currentNotifications).unshift(action.payload)
    }
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchInvitationsAPI.fulfilled, (state, action) => {
  //       let incomingInvitations = action.payload
  //       state.currentNotifications = Array.isArray(incomingInvitations) ? incomingInvitations.reverse() : []
  //     })
  //     .addCase(updateBoardInvitationAPI.fulfilled, (state, action) => {
  //       const incomingInvitation = action.payload
  //       const getInvitation = state.currentNotifications.find(i => i._id === incomingInvitation._id)
  //       getInvitation.boardInvitation = incomingInvitation.boardInvitation
  //     })
  // }
})

export const {
  clearCurrentNotifications,
  updateCurrentNotifications,
  addNotification
} = notificationsSlice.actions

// Selectors
export const selectCurrentNotifications = (state: any) => {
  return state.notifications.currentNotifications
}

// Export default reducer
const notificationsReducer = notificationsSlice.reducer
export default notificationsReducer


