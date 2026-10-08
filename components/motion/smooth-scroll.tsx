"use client"

import { type ReactNode, useRef } from "react"
import dynamic from "next/dynamic"

// O GSAP fica em um chunk separado: o HTML do servidor já é a página completa,
// e a coreografia entra depois, sem bloquear a hidratação.
const Choreography = dynamic(() => import("@/components/motion/choreography"), { ssr: false })

/** Estrutura wrapper/content exigida pelo ScrollSmoother. */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const wrapper = useRef<HTMLDivElement>(null)

  return (
    <div id="smooth-wrapper" ref={wrapper}>
      <div id="smooth-content">{children}</div>
      <Choreography scope={wrapper} />
    </div>
  )
}
