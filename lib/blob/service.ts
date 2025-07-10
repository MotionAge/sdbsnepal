import { put, del, list } from "@vercel/blob"

export interface UploadFileParams {
  file: File
  folder?: string
  filename?: string
}

export interface UploadResult {
  url: string
  pathname: string
  size: number
}

export async function uploadFile({ file, folder = "uploads", filename }: UploadFileParams): Promise<UploadResult> {
  try {
    const finalFilename = filename || `${Date.now()}-${file.name}`
    const pathname = `${folder}/${finalFilename}`

    const blob = await put(pathname, file, {
      access: "public",
    })

    return {
      url: blob.url,
      pathname: blob.pathname,
      size: file.size,
    }
  } catch (error) {
    console.error("Failed to upload file:", error)
    throw new Error("Failed to upload file")
  }
}

export async function deleteFile(pathname: string): Promise<void> {
  try {
    await del(pathname)
  } catch (error) {
    console.error("Failed to delete file:", error)
    throw new Error("Failed to delete file")
  }
}

export async function listFiles(folder?: string) {
  try {
    const { blobs } = await list({
      prefix: folder,
    })
    return blobs
  } catch (error) {
    console.error("Failed to list files:", error)
    throw new Error("Failed to list files")
  }
}

export function getFileExtension(filename: string): string {
  return filename.split(".").pop()?.toLowerCase() || ""
}

export function isValidImageFile(file: File): boolean {
  const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"]
  return validTypes.includes(file.type)
}

export function isValidDocumentFile(file: File): boolean {
  const validTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ]
  return validTypes.includes(file.type)
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes"

  const k = 1024
  const sizes = ["Bytes", "KB", "MB", "GB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
}
