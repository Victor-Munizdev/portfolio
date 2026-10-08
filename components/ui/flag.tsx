import type { Locale } from "@/lib/i18n"

/** Bandeiras desenhadas em SVG (Brasil para português, Estados Unidos para inglês). Decorativas: o nome do idioma vem em texto. */
export function Flag({ locale }: { locale: Locale }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 28 20"
      className="h-3.5 w-5 shrink-0 rounded-[2px] ring-1 ring-line-strong"
    >
      {locale === "pt" ? (
        <>
          <rect width="28" height="20" fill="#009c3b" />
          <path d="M14 2.6 25 10 14 17.4 3 10Z" fill="#ffdf00" />
          <circle cx="14" cy="10" r="4.3" fill="#002776" />
          <path d="M9.9 9.2c2.9-.7 5.9-.1 8.3 1.7" fill="none" stroke="#fff" strokeWidth="0.9" />
        </>
      ) : (
        <>
          <rect width="28" height="20" fill="#fff" />
          <path
            d="M0 1.54h28M0 4.62h28M0 7.7h28M0 10.78h28M0 13.86h28M0 16.94h28M0 20h28"
            stroke="#b22234"
            strokeWidth="1.54"
            transform="translate(0 -0.77)"
          />
          <rect width="12" height="10.77" fill="#3c3b6e" />
          <path
            d="M2 2.2h.01M5 2.2h.01M8 2.2h.01M10.4 2.2h.01M3.5 4.3h.01M6.5 4.3h.01M9.3 4.3h.01M2 6.4h.01M5 6.4h.01M8 6.4h.01M10.4 6.4h.01M3.5 8.5h.01M6.5 8.5h.01M9.3 8.5h.01"
            stroke="#fff"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  )
}
