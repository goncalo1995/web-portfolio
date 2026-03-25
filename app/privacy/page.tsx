import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy — Gonçalo Cereja",
  description: "Privacy policy for goncalocereja.com",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        <div className="space-y-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-cloud-blue">
              {"// "}Legal
            </span>
            <h1 className="text-3xl font-bold mt-2">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground mt-2">Last updated: March 2026</p>
          </div>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold">Overview</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              This portfolio website (<strong>goncalocereja.com</strong>) is a personal site operated by Gonçalo
              Cereja. Your privacy matters. This policy explains what information, if any, is collected when you
              visit this site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold">Information Collected</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              This site does <strong>not</strong> collect, store, or process any personally identifiable
              information. There are no sign-up forms, login systems, or databases storing visitor data.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Anonymous analytics may be collected via Vercel Analytics solely for understanding aggregate traffic
              patterns (e.g., page views, general geographic region). No individual user is tracked or profiled.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold">Cookies</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              This site does not use cookies for tracking or advertising purposes. The browser may cache static
              assets for performance reasons — this is standard browser behaviour and not used for tracking.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold">Third-Party Services</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The site is hosted on Cloudflare. Cloudflare may collect server logs (such as IP addresses and request
              timestamps) as part of standard infrastructure operations. Please refer to{" "}
              <a
                href="https://www.cloudflare.com/privacypolicy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cloud-blue underline"
              >
                Cloudflare&apos;s Privacy Policy
              </a>{" "}
              for details.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold">External Links</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              This site may contain links to external websites (GitHub, LinkedIn, etc.). This policy does not
              cover those sites — please review their own privacy policies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold">Contact</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              If you have any questions about this privacy policy, you can reach out at{" "}
              <a href="mailto:cerejagoncalo@gmail.com" className="text-cloud-blue underline">
                cerejagoncalo@gmail.com
              </a>
              .
            </p>
          </section>

          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Gonçalo Lascasas Cereja Ribeiro Pereira.{" "}
              <Link href="/" className="underline hover:text-foreground transition-colors">
                Return to Portfolio
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
