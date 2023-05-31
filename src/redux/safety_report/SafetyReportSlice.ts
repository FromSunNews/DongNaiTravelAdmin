import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import authorizedAxiosInstance from 'utilities/customAxios'
// import { API_ROOT } from 'utilities/constants'

const edit = `<svg width="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.4" d="M19.9927 18.9534H14.2984C13.7429 18.9534 13.291 19.4124 13.291 19.9767C13.291 20.5422 13.7429 21.0001 14.2984 21.0001H19.9927C20.5483 21.0001 21.0001 20.5422 21.0001 19.9767C21.0001 19.4124 20.5483 18.9534 19.9927 18.9534Z" fill="currentColor"></path>
    <path d="M10.309 6.90385L15.7049 11.2639C15.835 11.3682 15.8573 11.5596 15.7557 11.6929L9.35874 20.0282C8.95662 20.5431 8.36402 20.8344 7.72908 20.8452L4.23696 20.8882C4.05071 20.8903 3.88775 20.7613 3.84542 20.5764L3.05175 17.1258C2.91419 16.4915 3.05175 15.8358 3.45388 15.3306L9.88256 6.95545C9.98627 6.82108 10.1778 6.79743 10.309 6.90385Z" fill="currentColor"></path>
    <path opacity="0.4" d="M18.1208 8.66544L17.0806 9.96401C16.9758 10.0962 16.7874 10.1177 16.6573 10.0124C15.3927 8.98901 12.1545 6.36285 11.2561 5.63509C11.1249 5.52759 11.1069 5.33625 11.2127 5.20295L12.2159 3.95706C13.126 2.78534 14.7133 2.67784 15.9938 3.69906L17.4647 4.87078C18.0679 5.34377 18.47 5.96726 18.6076 6.62299C18.7663 7.3443 18.597 8.0527 18.1208 8.66544Z" fill="currentColor"></path>
  </svg>`

  const remove = `
  <svg width="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.4" d="M19.643 9.48851C19.643 9.5565 19.11 16.2973 18.8056 19.1342C18.615 20.8751 17.4927 21.9311 15.8092 21.9611C14.5157 21.9901 13.2494 22.0001 12.0036 22.0001C10.6809 22.0001 9.38741 21.9901 8.13185 21.9611C6.50477 21.9221 5.38147 20.8451 5.20057 19.1342C4.88741 16.2873 4.36418 9.5565 4.35445 9.48851C4.34473 9.28351 4.41086 9.08852 4.54507 8.93053C4.67734 8.78453 4.86796 8.69653 5.06831 8.69653H18.9388C19.1382 8.69653 19.3191 8.78453 19.4621 8.93053C19.5953 9.08852 19.6624 9.28351 19.643 9.48851Z" fill="currentColor"></path>
      <path d="M21 5.97686C21 5.56588 20.6761 5.24389 20.2871 5.24389H17.3714C16.7781 5.24389 16.2627 4.8219 16.1304 4.22692L15.967 3.49795C15.7385 2.61698 14.9498 2 14.0647 2H9.93624C9.0415 2 8.26054 2.61698 8.02323 3.54595L7.87054 4.22792C7.7373 4.8219 7.22185 5.24389 6.62957 5.24389H3.71385C3.32386 5.24389 3 5.56588 3 5.97686V6.35685C3 6.75783 3.32386 7.08982 3.71385 7.08982H20.2871C20.6761 7.08982 21 6.75783 21 6.35685V5.97686Z" fill="currentColor"></path>
  </svg>`

const fakeData = [
  {
    id: 1,
    client_id: 'khach_hang1',
    name_category: "Danh mục số 1",
    desc: "Mô tả của danh mục số 1",
    date_create: "14/5/2023",
    name_people_create: "Từ Nhật Phương",
    action: {
      actionedit: edit,
      actionremove: remove,
    }
  },
  {
    id: 2,
    client_id: 'khach_hang1',
    name_category: "Danh mục số 2",
    desc: "Mô tả của danh mục số 2",
    date_create: "14/5/2023",
    name_people_create: "Ngô Quý Đăng",
    action: {
      actionedit: edit,
      actionremove: remove,
    }
  },
  {
    id: 3,
    client_id: 'khach_hang2',
    name_category: "Danh mục số 3",
    desc: "Mô tả của danh mục số 3",
    date_create: "14/5/2023",
    name_people_create: "Từ Nhật Phương",
    action: {
      actionedit: edit,
      actionremove: remove,
    }
  },
  {
    id: 4,
    client_id: 'khach_hang2',
    name_category: "Danh mục số 4",
    desc: "Mô tả của danh mục số 4",
    date_create: "14/5/2023",
    name_people_create: "Từ Nhật Phương",
    action: {
      actionedit: edit,
      actionremove: remove,
    }
  },
  {
    id: 5,
    client_id: 'khach_hang1',
    name_category: "Danh mục số 5",
    desc: "Mô tả của danh mục số 5",
    date_create: "14/5/2023",
    name_people_create: "Từ Nhật Phương",
    action: {
      actionedit: edit,
      actionremove: remove,
    }
  },
  {
    id: 6,
    client_id: 'khach_hang1',
    name_category: "Danh mục số 6",
    desc: "Mô tả của danh mục số 6",
    date_create: "14/5/2023",
    name_people_create: "Từ Nhật Phương",
    action: {
      actionedit: edit,
      actionremove: remove,
    }
  },
  {
    id: 7,
    client_id: 'khach_hang2',
    name_category: "Danh mục số 7",
    desc: "Mô tả của danh mục số 7",
    date_create: "14/5/2023",
    name_people_create: "Từ Nhật Phương",
    action: {
      actionedit: edit,
      actionremove: remove,
    }
  },
  {
    id: 8,
    client_id: 'khach_hang2',
    name_category: "Danh mục số 8",
    desc: "Mô tả của danh mục số 8",
    date_create: "14/5/2023",
    name_people_create: "Từ Nhật Phương",
    action: {
      actionedit: edit,
      actionremove: remove,
    }
  },
  {
    id: 9,
    client_id: 'khach_hang2',
    name_category: "Danh mục số 9",
    desc: "Mô tả của danh mục số 9",
    date_create: "14/5/2023",
    name_people_create: "Từ Nhật Phương",
    action: {
      actionedit: edit,
      actionremove: remove,
    }
  },
  {
    id: 10,
    client_id: 'khach_hang1',
    name_category: "Danh mục số 10",
    desc: "Mô tả của danh mục số 10",
    date_create: "14/5/2023",
    name_people_create: "Từ Nhật Phương",
    action: {
      actionedit: edit,
      actionremove: remove,
    }
  },
  {
    id: 11,
    client_id: 'khach_hang3',
    name_category: "Danh mục số 11",
    desc: "Mô tả của danh mục số 11",
    date_create: "14/5/2023",
    name_people_create: "Từ Nhật Phương",
    action: {
      actionedit: edit,
      actionremove: remove,
    }
  },
  {
    id: 12,
    client_id: 'khach_hang1',
    name_category: "Danh mục số 12",
    desc: "Mô tả của danh mục số 12",
    date_create: "14/5/2023",
    name_people_create: "Từ Nhật Phương",
    action: {
      actionedit: edit,
      actionremove: remove,
    }
  },
  {
    id: 13,
    client_id: 'khach_hang2',
    name_category: "Danh mục số 13",
    desc: "Mô tả của danh mục số 13",
    date_create: "14/5/2023",
    name_people_create: "Từ Nhật Phương",
    action: {
      actionedit: edit,
      actionremove: remove,
    }
  },
  {
    id: 14,
    client_id: 'khach_hang3',
    name_category: "Danh mục số 14",
    desc: "Mô tả của danh mục số 14",
    date_create: "14/5/2023",
    name_people_create: "Từ Nhật Phương",
    action: {
      actionedit: edit,
      actionremove: remove,
    }
  },
  {
    id: 15,
    client_id: 'khach_hang2',
    name_category: "Danh mục số 15",
    desc: "Mô tả của danh mục số 15",
    date_create: "14/5/2023",
    name_people_create: "Từ Nhật Phương",
    action: {
      actionedit: edit,
      actionremove: remove,
    }
  },
  {
    id: 16,
    client_id: 'khach_hang3',
    name_category: "Danh mục số 16",
    desc: "Mô tả của danh mục số 16",
    date_create: "14/5/2023",
    name_people_create: "Từ Nhật Phương",
    action: {
      actionedit: edit,
      actionremove: remove,
    }
  },
  {
    id: 17,
    client_id: 'khach_hang3',
    name_category: "Danh mục số 17",
    desc: "Mô tả của danh mục số 17",
    date_create: "14/5/2023",
    name_people_create: "Từ Nhật Phương",
    action: {
      actionedit: edit,
      actionremove: remove,
    }
  },
  {
    id: 18,
    client_id: 'khach_hang2',
    name_category: "Danh mục số 18",
    desc: "Mô tả của danh mục số 18",
    date_create: "14/5/2023",
    name_people_create: "Từ Nhật Phương",
    action: {
      actionedit: edit,
      actionremove: remove,
    }
  },
  {
    id: 19,
    client_id: 'khach_hang3',
    name_category: "Danh mục số 19",
    desc: "Mô tả của danh mục số 19",
    date_create: "14/5/2023",
    name_people_create: "Từ Nhật Phương",
    action: {
      actionedit: edit,
      actionremove: remove,
    }
  },
  {
    id: 20,
    client_id: 'khach_hang2',
    name_category: "Danh mục số 20",
    desc: "Mô tả của danh mục số 20",
    date_create: "14/5/2023",
    name_people_create: "Từ Nhật Phương",
    action: {
      actionedit: edit,
      actionremove: remove,
    }
  }
]

const initialState = {
  categoryData: fakeData
}

// export const fetchInvitationsAPI = createAsyncThunk('safetyReport/fetchInvitationsAPI', async () => {
//   const request = await authorizedAxiosInstance.get(`${API_ROOT}/v2/invitations`)
//   return request.data
// })

// export const updateBoardInvitationAPI = createAsyncThunk(
//   'safetyReport/updateBoardInvitationAPI',
//   async ({ action, notificationId }) => {
//     const request = await authorizedAxiosInstance.put(`${API_ROOT}/v2/invitations/board/${notificationId}`, { action })
//     return request.data
//   }
// )

export const safetyReportSlice = createSlice({
  name: 'safetyReport',
  initialState,
  reducers: {
    updateCategoryData: (state: any, action: any) => {
      state.categoryData = action.payload
    },
    addCategoryData: (state: any, action: any) => {
      state.categoryData.push(action.payload)
    },
    deleteCategoryData: (state: any, action: any) => {
      const newCategoryData = state.categoryData.filter((c: any) => c.id !== action.payload.id)
      state.categoryData = newCategoryData
    }
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchInvitationsAPI.fulfilled, (state, action) => {
  //       let incomingInvitations = action.payload
  //       state.categoryData = Array.isArray(incomingInvitations) ? incomingInvitations.reverse() : []
  //     })
  //     .addCase(updateBoardInvitationAPI.fulfilled, (state, action) => {
  //       const incomingInvitation = action.payload
  //       const getInvitation = state.categoryData.find(i => i._id === incomingInvitation._id)
  //       getInvitation.boardInvitation = incomingInvitation.boardInvitation
  //     })
  // }
})

export const {
  updateCategoryData,
  addCategoryData,
  deleteCategoryData
} = safetyReportSlice.actions

// Selectors
export const selectCurrentSafetyReport = (state: any) => {
  return state.safetyReport
}

// Export default reducer
const safetyReportReducer = safetyReportSlice.reducer
export default safetyReportReducer


