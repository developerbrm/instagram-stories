export interface PhotoSrc {
  original: string
  large2x: string
  large: string
  medium: string
  small: string
  portrait: string
  landscape: string
  tiny: string
}

export interface Photo {
  id: number
  width: number
  height: number
  url: string
  photographer: string
  photographer_url: string
  photographer_id: number
  avg_color: string
  src: PhotoSrc
  liked: boolean
  alt: string
}

export interface PexelsApiResponse {
  page: number
  per_page: number
  photos: Photo[]
  total_results: number
  next_page: string
}

export interface ImagesAPIResponse {
  alt: string
  srcArr: PhotoSrc
}

export interface ImagesState {
  data: ImagesAPIResponse[]
  loading: boolean
  loaded: boolean
  error: Error | null
}
