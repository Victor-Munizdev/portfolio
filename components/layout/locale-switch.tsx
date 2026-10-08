"use client"

import { useEffect, useRef } from "react"
import { Check, ChevronDown } from "lucide-react"
import { Flag } from "@/components/ui/flag"
import { htmlLang, type Locale, localeLabel, localePath, locales } from "@/lib/i18n"

/**
 * Seletor de idioma: dropdown com bandeiras. Cada opção é um link para a URL
 * do idioma (/ e /en), então funciona sem JavaScript e os dois idiomas são
 * indexáveis; o efeito só acrescenta Escape e clique fora ao <details>.
 */
export function LocaleSwitch({ locale, label }: { locale: Locale; label: string }) {
  const details = useRef<HTMLDetailsElement>(null)

  useEffect(() => {
    const close = (restoreFocus: boolean) => {
      const element = details.current
      if (!element?.open) return
      element.open = false
      if (restoreFocus) element.querySelector("summary")?.focus()
    }
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && close(true)
    const onPointerDown = (event: PointerEvent) => {
      if (!details.current?.contains(event.target as Node)) close(false)
    }

    document.addEventListener("keydown", onKeyDown)
    document.addEventListener("pointerdown", onPointerDown)
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.removeEventListener("pointerdown", onPointerDown)
    }
  }, [])

  return (
    <details ref={details} className="group relative">
      <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-control border border-line-strong px-3 text-sm font-medium text-bone transition-colors duration-200 hover:border-bone hover:bg-surface-2 [&::-webkit-details-marker]:hidden">
        <Flag locale={locale} />
        <span aria-hidden="true" className="uppercase">
          {locale}
        </span>
        <span className="sr-only">
          {label}: {localeLabel[locale]}
        </span>
        <ChevronDown
          aria-hidden="true"
          strokeWidth={1.5}
          className="size-4 text-fog transition-transform duration-200 ease-out group-open:rotate-180"
        />
      </summary>

      <ul className="absolute right-0 top-full z-10 mt-2 w-48 rounded-frame border border-line-strong bg-surface p-1">
        {locales.map((option) => {
          const active = option === locale
          return (
            <li key={option}>
              <a
                href={localePath[option]}
                hrefLang={htmlLang[option]}
                lang={htmlLang[option]}
                aria-current={active ? "page" : undefined}
                className={`flex min-h-11 items-center gap-3 rounded-control px-3 text-sm transition-colors duration-200 hover:bg-surface-2 ${
                  active ? "text-bone" : "text-text-2 hover:text-bone"
                }`}
              >
                <Flag locale={option} />
                <span className="flex-1">{localeLabel[option]}</span>
                {active ? <Check aria-hidden="true" strokeWidth={1.5} className="size-4 text-bone" /> : null}
              </a>
            </li>
          )
        })}
      </ul>
    </details>
  )
}
