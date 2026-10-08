import { dictionary } from "@/data/dictionary"
import { ogSize, renderOgImage } from "@/lib/og"

export const alt = dictionary.pt.meta.ogTitle
export const size = ogSize
export const contentType = "image/png"

export default function Image() {
  return renderOgImage("pt")
}
