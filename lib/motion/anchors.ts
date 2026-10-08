import gsap from "gsap"
import type { ScrollSmoother } from "gsap/ScrollSmoother"
import { ScrollTrigger } from "gsap/ScrollTrigger"

/** Tempo (s) para o conteúdo suavizado alcançar o destino antes de mover o foco. */
const SMOOTH_SETTLE = 1.2

function headerOffset(): number {
  const header = document.querySelector("header")
  return header ? header.getBoundingClientRect().height : 0
}

function scrollToTarget(target: HTMLElement, smoother: ScrollSmoother | null, animate: boolean) {
  if (smoother) {
    // Seção fixada: o destino é o início do pin, não a posição do elemento preso.
    const pin = ScrollTrigger.getAll().find((trigger) => trigger.pin === target)
    if (pin) smoother.scrollTo(pin.start, animate)
    else smoother.scrollTo(target, animate, `top ${headerOffset()}px`)
  } else {
    // scroll-margin-top das seções já desconta o header fixo.
    target.scrollIntoView({ behavior: animate ? "smooth" : "auto", block: "start" })
  }
}

/**
 * Navegação por âncoras: mantém hash, histórico e foco de teclado.
 * Com ScrollSmoother o salto nativo não considera o conteúdo transformado,
 * então a rolagem é delegada a ele; sem JS as âncoras continuam nativas.
 */
export function bindAnchors(smoother: ScrollSmoother | null, reduce: boolean): () => void {
  const onClick = (event: MouseEvent) => {
    if (event.defaultPrevented || event.button !== 0) return
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

    const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]')
    const id = link?.getAttribute("href")?.slice(1)
    const target = id ? document.getElementById(id) : null
    if (!id || !target) return

    event.preventDefault()
    // O Next intercepta history.pushState e rola sozinho até o hash, o que derruba
    // a rolagem suave e o foco. O método do prototype grava o hash sem acionar o router.
    History.prototype.pushState.call(history, null, "", `#${id}`)
    // Um frame de espera: o menu mobile libera o scroll do documento ao fechar.
    requestAnimationFrame(() => {
      scrollToTarget(target, smoother, !reduce)
      // O ScrollSmoother reposiciona a página quando o foco cai em algo fora da tela;
      // com smoothing o foco só é movido depois que o conteúdo chegou.
      if (smoother) gsap.delayedCall(SMOOTH_SETTLE, () => target.focus({ preventScroll: true }))
      else target.focus({ preventScroll: true })
    })
  }

  const onHistory = () => {
    const target = document.getElementById(location.hash.slice(1) || "top")
    if (target) scrollToTarget(target, smoother, false)
  }

  document.addEventListener("click", onClick)
  window.addEventListener("popstate", onHistory)

  // Chegada direta com hash (ex.: /#contact): reposiciona depois do layout final.
  if (location.hash.length > 1) requestAnimationFrame(onHistory)

  return () => {
    document.removeEventListener("click", onClick)
    window.removeEventListener("popstate", onHistory)
  }
}
