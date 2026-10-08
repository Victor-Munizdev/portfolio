import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"
import { dictionary } from "@/data/dictionary"
import { site } from "@/data/site"
import type { Locale } from "@/lib/i18n"

export const ogSize = { width: 1200, height: 630 }

/** Imagem de compartilhamento gerada no build, no mesmo sistema visual do site. */
export async function renderOgImage(locale: Locale) {
  const { ogTitle, ogTagline } = dictionary[locale].meta
  const font = await readFile(join(process.cwd(), "node_modules/geist/dist/fonts/geist-sans/Geist-Regular.ttf"))

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#101010",
          color: "#fffdf9",
          fontFamily: "Geist",
        }}
      >
        <div style={{ display: "flex", fontSize: 30 }}>{site.name}</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 76, lineHeight: 1.06, letterSpacing: -2.5, maxWidth: 980 }}>
            {ogTitle}
          </div>
          <div
            style={{
              display: "flex",
              height: 2,
              marginTop: 48,
              background: "linear-gradient(90deg, #19c8ff, #8f5bff 55%, #ff2bd6)",
            }}
          />
          <div style={{ display: "flex", marginTop: 28, fontSize: 28, color: "#8fa3b5" }}>{ogTagline}</div>
        </div>
      </div>
    ),
    { ...ogSize, fonts: [{ name: "Geist", data: font, weight: 400, style: "normal" }] },
  )
}
