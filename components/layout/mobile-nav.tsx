"use client"

import { useEffect, useId, useRef, useState } from "react"
import { Menu, X } from "lucide-react"

interface NavLink {
  href: string
  label: string
}

interface MobileNavProps {
  items: NavLink[]
  labels: { open: string; close: string; nav: string }
}

export function MobileNav({ items, labels }: MobileNavProps) {
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const toggleRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const desktop = window.matchMedia("(min-width: 1024px)")
    const onResize = () => desktop.matches && setOpen(false)

    document.documentElement.style.overflow = "hidden"
    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus()
    document.addEventListener("keydown", onKeyDown)
    desktop.addEventListener("change", onResize)

    return () => {
      document.documentElement.style.overflow = ""
      document.removeEventListener("keydown", onKeyDown)
      desktop.removeEventListener("change", onResize)
    }
  }, [open])

  return (
    <div className="lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? labels.close : labels.open}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex size-11 items-center justify-center rounded-control border border-line-strong text-bone transition-colors duration-200 hover:border-bone hover:bg-surface-2"
      >
        {open ? (
          <X aria-hidden="true" strokeWidth={1.5} className="size-5" />
        ) : (
          <Menu aria-hidden="true" strokeWidth={1.5} className="size-5" />
        )}
      </button>

      {/* absolute + top-full: o backdrop-filter do header é o bloco de contenção, então `fixed` colapsaria aqui. */}
      <div
        id={panelId}
        ref={panelRef}
        hidden={!open}
        className="absolute inset-x-0 top-full h-[calc(100dvh-var(--header-h))] overflow-y-auto border-t border-line bg-canvas px-5 pb-10 md:px-10"
      >
        <nav aria-label={labels.nav}>
          <ul>
            {items.map((item) => (
              <li key={item.href} className="border-b border-line">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-16 items-center text-heading text-bone transition-colors duration-200 hover:bg-surface"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
