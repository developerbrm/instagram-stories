import { createSlice } from '@reduxjs/toolkit'
import { ImagesState } from '../../../models'
import { createInitialState } from '../../../utilities'
import { getImages } from './thunks'

const initialState: ImagesState = createInitialState() as ImagesState

initialState.data = []

export const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetch all images
    builder.addCase(getImages.pending, (state) => {
      state.loading = true
      state.loaded = false
    })
    builder.addCase(getImages.fulfilled, (state, action) => {
      state.loading = false
      state.data = action?.payload || []
    })
    builder.addCase(getImages.rejected, (state, action) => {
      state.data = []
      state.loading = false
      state.loaded = true
      state.error = action.error as Error
    })
  },
})

// export const {  } = imagesSlice.actions

export default imagesSlice.reducer
