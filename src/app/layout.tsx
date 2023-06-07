import { Analytics } from '@vercel/analytics/react';
export const metadata = {
  title: 'Text to SQL Tool',
  description: 'Side Project by Ahmed Saad',
  ogImage: {
    url: 'public/OG_image.png', // Replace with the URL of your OG image
    alt: 'Open Graph Image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}
      <Analytics />
      </body>
    </html>
  )
}
