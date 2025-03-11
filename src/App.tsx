import { useEffect } from 'react'
import { useAppDispatch } from '../redux/store'
import { getImages } from '../redux/slices/imagesSlice/thunks'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getImages())
  }, [dispatch])

  return <></>
}

export default App
