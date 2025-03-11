/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_KEY: string
  readonly VITE_CORS_ALLOW_ORIGIN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
