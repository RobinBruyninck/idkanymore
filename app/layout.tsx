import { AppToaster } from "../components/ui/toast"

import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import GoogleAnalyticsTracker from "../components/GoogleAnalyticsTracker"

import "./globals.css"

export const metadata = {
  title: "Studio Excentriek",
  description: "Portfolio website for Studio Excentriek",
  icons: {
    icon: "/favicon.ico?v=2",
  },
}

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {gaMeasurementId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}');
              `}
            </Script>
          </>
        ) : null}
      </head>

      <body>
        {/* Google Analytics page view tracker */}
        <GoogleAnalyticsTracker />

        <div>
          {children}
        </div>

        <AppToaster />

        <Analytics />
      </body>
    </html>
  )
}
