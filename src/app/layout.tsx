import '../styles/page.module.css'
export const metadata = {
  title: 'CODESWAP',
  description: 'Sistema Integrado de Gerenciamento de Links de projetos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{margin: 0}}>{children}</body>
    </html>
  )
}
