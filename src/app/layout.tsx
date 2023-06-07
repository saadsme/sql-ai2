
export const metadata = {
  title: 'Text to SQL Tool',
  description: 'Side Project by Ahmed Saad',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
