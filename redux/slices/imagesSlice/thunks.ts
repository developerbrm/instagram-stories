import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'
import { CLIENT_API_ROUTES, getErrorMessage } from '../../../utilities'

export const getImages = createAsyncThunk('images/fetchImages', async () =>
  axios
    .get(CLIENT_API_ROUTES.getImages)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err)

      toast.error(getErrorMessage(err))
      return Promise.reject(Error(err))
    })
)
