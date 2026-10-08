import { ExternalLink } from "@/components/ui/external-link"
import { Section } from "@/components/ui/section"
import { credentials } from "@/data/credentials"
import { dictionary } from "@/data/dictionary"
import type { Locale } from "@/lib/i18n"

export function Credentials({ locale }: { locale: Locale }) {
  const t = dictionary[locale]

  return (
    <Section id="credentials" title={t.credentials.title} lead={t.credentials.lead} quiet>
      <ul data-reveal className="mt-10 border-b border-line text-sm">
        {credentials.map((credential) => (
          <li
            key={credential.file}
            className="grid gap-x-10 gap-y-1 border-t border-line py-4 lg:grid-cols-12 lg:items-baseline"
          >
            <p className="text-fog tabular-nums lg:col-span-1">{credential.year}</p>
            <p className="text-bone lg:col-span-5">{credential.title[locale]}</p>
            <p className="text-text-2 lg:col-span-4">
              {credential.issuer[locale]}
              {credential.detail ? (
                <>
                  <span aria-hidden="true"> · </span>
                  {credential.detail[locale]}
                </>
              ) : null}
            </p>
            <p className="lg:col-span-2 lg:text-right">
              <ExternalLink href={credential.file} newTabLabel={t.external}>
                {t.credentials.view}
                <span className="sr-only">: {credential.title[locale]}</span>
              </ExternalLink>
            </p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
