import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authorizedAxiosInstance from '../../interceptor/customAxios'
import { API_ROOT } from '../../utilities/constants'
import { toast } from 'react-toastify'


// Khởi tạo giá trị một giá trị của Slice trong Redux
const initialState = {
  currentUser: null,
  isAuthenticated: false
}

// Các hành động gọi api (bất đồng bộ) và cập nhật dữ liệu vào Redux, dùng createAsyncThunk đi kèm với extraReducers
// https://redux-toolkit.js.org/api/createAsyncThunk
export const signInUserAPI = createAsyncThunk(
  'user/signInUserAPI',
  async (data) => {
    const request = await authorizedAxiosInstance.post(`${API_ROOT}/v2/users/sign_in`, data)
    if (request.data.role !== 'admin') {
      toast.error('Xin lỗi bạn không có quyền truy cập vào website này')
      return {
        user: null,
        isAuthenticated: false
      }
    } else 
    return {
      user: request.data,
      isAuthenticated: true
    }
  }
)

export const signOutUserAPI = createAsyncThunk(
  'user/signOutUserAPI',
  async (showSuccessMessage: boolean = true) => {
    const request = await authorizedAxiosInstance.delete(`${API_ROOT}/v2/users/sign_out`)
    if (showSuccessMessage) {
      toast.success('User signed out successfully!')
    }
    return request.data
  }
)

export const updateUserAPI = createAsyncThunk(
  'user/updateUserAPI',
  async ( data ) => {
    const request = await authorizedAxiosInstance.put(`${API_ROOT}/v2/users/update`, data)
    if (request.data) {
      toast.success('Updated successfully!')
    }
    return request.data
  }
)

export const resetPasswordUserAPI = createAsyncThunk(
  'user/resetPasswordUserAPI',
  async ( data ) => {
    const request = await authorizedAxiosInstance.put(`${API_ROOT}/v2/users/reset_password`, data)
    if (request.data) {
      toast.success('Reset password successfully!')
    }
    return request.data
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    //
  },
  extraReducers: (builder) => {
    builder.addCase(signInUserAPI.fulfilled, (state, action) => {
      state.currentUser = action.payload.user
      state.isAuthenticated = action.payload.isAuthenticated
    })

    builder.addCase(signOutUserAPI.fulfilled, (state) => {
      state.currentUser = null
      state.isAuthenticated = false
    })

    builder.addCase(updateUserAPI.fulfilled, (state, action) => {
      const updatedUser = action.payload
      state.currentUser = updatedUser
    })

    builder.addCase(resetPasswordUserAPI.fulfilled, (state, action) => {
      const updatedUser = action.payload
      state.currentUser = updatedUser
      state.isAuthenticated = true
    })
  }
})

// Action creators are generated for each case reducer function
// Actions: dành cho các components bên dưới gọi bằng dispatch() tới nó để cập nhật lại dữ liệu thông qua reducer (chạy đồng bộ)
// Để ý ở trên thì không thấy properties actions đâu cả, bởi vì những cái actions này đơn giản là được thằng redux tạo tự động theo tên của reducer nhé.

// export const {  } = activeBoardSlice.actions

// Selectors: mục đích là dành cho các components bên dưới gọi bằng useSelector() tới nó
// để lấy dữ liệu từ trong redux store ra sử dụng
export const selectCurrentUser = (state: any) => {
  return state.user.currentUser
}

export const selectIsAuthenticated = (state: any) => {
  return state.user.isAuthenticated
}
//Export default
export default userSlice.reducer