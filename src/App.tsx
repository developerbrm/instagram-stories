import { useEffect } from 'react'
import { useAppDispatch } from '../redux/store'
import { getImages } from '../redux/slices/imagesSlice/thunks'
import RenderPeoples from './components/RenderPeoples'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getImages())
  }, [dispatch])

  return (
    <>
      <RenderPeoples />
    </>
  )
}

export default App
