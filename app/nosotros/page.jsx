import estilos from "@/estilos/nosotros.module.css";
import Image from "next/image"
export default function NosotrosPagina(){
  return (
    <main className={estilos.page}>
      <section className={estilos.card}>
        <h1 className={estilos.title}>Nosotros</h1>
        <p className={estilos.text}>
          En <strong>Cocina Comunitaria</strong> creemos que la comida es mucho más que una receta: es una forma de compartir historias, tradiciones y momentos.
        </p>
        <p className={estilos.text}>
          Creamos este espacio porque nos apasiona cocinar y porque sabemos que las mejores recetas muchas veces vienen de casa, de la familia o de la experiencia de cada persona.
        </p>

        <p className={estilos.text}>
          Nuestra idea es simple: construir una comunidad donde cualquiera pueda compartir sus recetas, descubrir nuevos platos y encontrar inspiración en la cocina de otros. Cada receta que se publica forma parte de una cocina colectiva, hecha entre todos.
        </p>

      <p className={estilos.text}>
        Detrás de este proyecto hay personas que aman la gastronomía, la creatividad y el espíritu de comunidad. Juntos trabajamos para que <strong>Cocina Comunitaria</strong> sea un lugar donde la comida una a las personas y las buenas recetas siempre encuentren su lugar.
      </p>
    </section>
    <section className={estilos.teamSection}>

        <h2 className={estilos.teamTitle}>Nuestro equipo</h2>

        <div className={estilos.teamGrid}>

          <div className={estilos.member}>
            <Image src="/lana.jpg" alt="lana del rey" width={180} height={180} />
            <p>Elizabeth González</p>
            <span className={estilos.role}>Chef y creadora de recetas</span>
          </div>

          <div className={estilos.member}>
            <Image src="/joji.jpg" alt="Integrante 2" width={180} height={180} />
            <p>Jorge Martínez</p>
            <span className={estilos.role}>Editor de contenido culinario</span>
          </div>

          <div className={estilos.member}>
            <Image src="/miley.jpg" alt="Integrante 3" width={180} height={180} />
            <p>Esperanza Díaz</p>
            <span className={estilos.role}>Gestión de comunidad y recetas</span>
          </div>

          <div className={estilos.member}>
            <Image src="/tyler.jpg" alt="Integrante 4" width={180} height={180} />
            <p>Tadeo Romero</p>
            <span className={estilos.role}>Especialista en cocina casera</span>
          </div>

        </div>
      </section>
    </main>
  )
}


export const metadata = {
  title: 'Nosotros - Cocina Comunitaria',
}