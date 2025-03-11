export const SERVER_API_ROUTES = {
  images: '/images',
}

export const CLIENT_API_ROUTES = {
  getImages: `http://localhost:3000/images`,
}

export type UiState = {
  data: unknown
  loading: boolean
  error: Error | null
  loaded: boolean
}

export const createInitialState = (): UiState => ({
  data: [],
  loading: false,
  loaded: false,
  error: null,
})

export const getErrorMessage = (err: {
  message?: string
  data?: { message: string }
  response?: { data?: { message: string } }
}) => {
  return (
    err?.response?.data?.message ??
    err?.message ??
    err.data?.message ??
    'Something went wrong'
  )
}
