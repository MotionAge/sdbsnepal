import { createClient } from "@supabase/supabase-js"
import { put, del, list } from "@vercel/blob"

// Database configuration - easily switchable
const DATABASE_CONFIG = {
  type: "supabase", // Can be changed to 'postgresql', 'mysql', etc.
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || "https://your-project.supabase.co",
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "your-anon-key",
  },
}

// Storage configuration - using Vercel Blob
const STORAGE_CONFIG = {
  type: "vercel-blob", // or 'supabase'
  bucket: "sanatan-dherma-bigyan-samaj",
}

// Database client factory
export const createDatabaseClient = () => {
  switch (DATABASE_CONFIG.type) {
    case "supabase":
      return createClient(DATABASE_CONFIG.supabase.url, DATABASE_CONFIG.supabase.anonKey)
    default:
      throw new Error(`Unsupported database type: ${DATABASE_CONFIG.type}`)
  }
}

// Storage client factory
export const createStorageClient = () => {
  switch (STORAGE_CONFIG.type) {
    case "vercel-blob":
      return {
        upload: async (path: string, file: File) => {
          try {
            const blob = await put(path, file, {
              access: "public", // ✅ Valid property
            })
            return { data: { path: blob.url }, error: null }
          } catch (error) {
            return { data: null, error }
          }
        },
        delete: async (path: string) => {
          try {
            await del(path)
            return { data: true, error: null }
          } catch (error) {
            return { data: null, error }
          }
        },
        getPublicUrl: (path: string) => {
          return path // Vercel Blob URLs are already public
        },
        list: async (prefix?: string) => {
          try {
            const { blobs } = await list({ prefix })
            return { data: blobs, error: null }
          } catch (error) {
            return { data: null, error }
          }
        },
      }

    case "supabase":
      const client = createDatabaseClient()
      return {
        upload: async (path: string, file: File) => {
          const { data, error } = await client.storage.from(STORAGE_CONFIG.bucket).upload(path, file)
          return { data, error }
        },
        delete: async (path: string) => {
          const { data, error } = await client.storage.from(STORAGE_CONFIG.bucket).remove([path])
          return { data, error }
        },
        getPublicUrl: (path: string) => {
          const { data } = client.storage.from(STORAGE_CONFIG.bucket).getPublicUrl(path)
          return data.publicUrl
        },
      }

    default:
      throw new Error(`Unsupported storage type: ${STORAGE_CONFIG.type}`)
  }
}

export const supabase = createDatabaseClient()
export const storage = createStorageClient()
export { createClient }
