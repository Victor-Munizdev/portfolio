import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { SmoothScroll } from "@/components/motion/smooth-scroll"
import { Cases } from "@/components/sections/cases"
import { Contact } from "@/components/sections/contact"
import { Credentials } from "@/components/sections/credentials"
import { Experience } from "@/components/sections/experience"
import { Hero } from "@/components/sections/hero"
import { Process } from "@/components/sections/process"
import { Proof } from "@/components/sections/proof"
import { Services } from "@/components/sections/services"
import { Stack } from "@/components/sections/stack"
import { dictionary } from "@/data/dictionary"
import type { Locale } from "@/lib/i18n"
import { buildJsonLd } from "@/lib/seo"

export function HomePage({ locale }: { locale: Locale }) {
  // "<" escapado para o JSON nunca fechar a tag <script>.
  const jsonLd = JSON.stringify(buildJsonLd(locale)).replace(/</g, "\\u003c")

  return (
    <>
      <a
        href="#top"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-[60] focus-visible:rounded-control focus-visible:bg-bone focus-visible:px-4 focus-visible:py-3 focus-visible:text-sm focus-visible:font-medium focus-visible:text-canvas"
      >
        {dictionary[locale].skip}
      </a>
      <Header locale={locale} />
      <SmoothScroll>
        <main>
          <Hero locale={locale} />
          <Proof locale={locale} />
          <Cases locale={locale} />
          <Experience locale={locale} />
          <Process locale={locale} />
          <Stack locale={locale} />
          <Services locale={locale} />
          <Credentials locale={locale} />
          <Contact locale={locale} />
        </main>
        <Footer locale={locale} />
      </SmoothScroll>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
    </>
  )
}
