
export const metadata = {
  title: 'AI-SQL.tech',
  description: 'Side Project by Ahmed Saad',
  image: 'https://ai-sql.tech/FinalSQL.png',
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
