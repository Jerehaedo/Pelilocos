import NavBar from "@/componentes/navbar"
import Footer from "@/componentes/footer"
import Header from "@/componentes/header"
import "@/estilos/globals.css"
import estilos from "@/estilos/layout.module.css"

export const metadata = {
  title: 'Inicio - Cocina Comunitaria',
  description: 'Sitio de peliculas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es-ar">
      <body>
        <header className={estilos.cabenav}>
          <div className={estilos.contenedor}>
            <Header />
          </div>
        </header>

        <div className={estilos.barranav}>
          <div className={estilos.contenedor}>
            <NavBar />
          </div>
        </div>

        <div className={estilos.cuerpo}>
          {children}
        </div>

        <Footer />
      </body>
    </html>
  )
}

export const viewport = {
  colorScheme: 'dark',
  themeColor: 'black',
}