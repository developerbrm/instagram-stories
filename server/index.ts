import axios, { AxiosResponse } from 'axios'
import express from 'express'
import { ImagesAPIResponse, PexelsApiResponse } from '../models'
import { getErrorMessage, SERVER_API_ROUTES } from '../utilities'
import cors from 'cors'

const app = express()
const API_KEY = import.meta.env.VITE_API_KEY
const baseUrl = 'https://api.pexels.com/v1/search'
const port = 3000

const corsOptions = {
  origin: import.meta.env.VITE_CORS_ALLOW_ORIGIN,
}

app
  .use(cors(corsOptions))
  .get(
    SERVER_API_ROUTES['images'],
    async (req: express.Request, res: express.Response) => {
      const defaultQueryObj = {
        query: 'people',
        orientation: 'portrait',
      }

      const queryString = new URLSearchParams({
        ...defaultQueryObj,
        ...req.query,
      }).toString()

      const config = {
        method: 'GET',
        maxBodyLength: Infinity,
        headers: {
          Authorization: API_KEY,
        },
      }

      const finalURL = `${baseUrl}/?${queryString}`

      axios
        .get(finalURL, config)
        .then((response: AxiosResponse<PexelsApiResponse>) => {
          const data = response.data
          const images: ImagesAPIResponse[] = data.photos.map((image) => ({
            srcArr: image.src,
            alt: image.alt,
          }))

          res.status(200).send({ images })
        })
        .catch((error) => {
          console.log(error)

          res.status(500).send({
            message: getErrorMessage(error),
            images: [],
          })
        })
    }
  )

app.listen(port, () => {
  console.log(`Started server on ${port}`)
})
