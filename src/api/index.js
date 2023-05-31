
import { toast } from 'react-toastify'
import authorizedAxiosInstance from '../interceptor/customAxios'
import { API_ROOT } from '../utilities/constants'
import axios from 'axios'

export const verifyUserAPI = async (data) => {
  const request = await axios.put(`${API_ROOT}/v2/users/verify`, data)
  toast.success('Tài khoản đã xác thực thành công! Hãy đặt lại nhập khẩu của bạn!')
  return request.data
}

export const sendEmailAPI = async (data) => {
  const request = await axios.post(`${API_ROOT}/v2/users/send_email`, data)
  return request.data
}

export const refreshTokenAPI = async () => {
  const request = await authorizedAxiosInstance.get(`${API_ROOT}/v2/users/refresh_token`)
  return request.data
}
                         