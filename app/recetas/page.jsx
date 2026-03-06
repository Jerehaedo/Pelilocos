import Image from "next/image";
import estilos from "@/estilos/recetas.module.css";

export default function RecetasPagina() {
  return (
    <main className={estilos.page}>
      <section className={estilos.card}>
        <h1 className={estilos.title}>Recetas de la comunidad</h1>

        <p className={estilos.text}>
          En esta sección reunimos las recetas compartidas por nuestra comunidad
          mes a mes. Cada preparación forma parte de este espacio colectivo
          donde la cocina se vive, se crea y se comparte entre todos.
        </p>
      </section>

      <section className={estilos.monthSection}>
        <h2 className={estilos.monthTitle}>Febrero</h2>

        <div className={estilos.grid}>
          <article className={estilos.recipeCard}>
            <Image
              src="/tarta_verduras.jpg"
              alt="Tarta de verduras"
              width={300}
              height={200}
              className={estilos.recipeImage}
            />
            <h3 className={estilos.recipeTitle}>Tarta de verduras</h3>
            <p className={estilos.recipeAuthor}>Por Elizabeth González</p>
            <p className={estilos.recipeText}>
              Una receta casera, práctica y perfecta para compartir en familia.
            </p>
          </article>

          <article className={estilos.recipeCard}>
            <Image
              src="/pizza_casera.webp"
              alt="Pizza casera"
              width={300}
              height={200}
              className={estilos.recipeImage}
            />
            <h3 className={estilos.recipeTitle}>Pizza casera</h3>
            <p className={estilos.recipeAuthor}>Por Jorge Martínez</p>
            <p className={estilos.recipeText}>
              Masa esponjosa, salsa suave y mucho sabor en una receta clásica.
            </p>
          </article>

          <article className={estilos.recipeCard}>
            <Image
              src="/empanadas_criollas.jpg"
              alt="Empanadas"
              width={300}
              height={200}
              className={estilos.recipeImage}
            />
            <h3 className={estilos.recipeTitle}>Empanadas criollas</h3>
            <p className={estilos.recipeAuthor}>Por Esperanza Díaz</p>
            <p className={estilos.recipeText}>
              Una opción tradicional con relleno sabroso y bien casero.
            </p>
          </article>
        </div>
      </section>

      <section className={estilos.monthSection}>
        <h2 className={estilos.monthTitle}>Enero</h2>

        <div className={estilos.grid}>
          <article className={estilos.recipeCard}>
            <Image
              src="/Pastel_Papa.webp"
              alt="Pastel de papas"
              width={300}
              height={200}
              className={estilos.recipeImage}
            />
            <h3 className={estilos.recipeTitle}>Pastel de papas</h3>
            <p className={estilos.recipeAuthor}>Por Mirtha Jiménez</p>
            <p className={estilos.recipeText}>
              Un plato abundante, ideal para almuerzos o cenas en casa.
            </p>
          </article>

          <article className={estilos.recipeCard}>
            <Image
              src="/noquis.webp"
              alt="Ñoquis"
              width={300}
              height={200}
              className={estilos.recipeImage}
            />
            <h3 className={estilos.recipeTitle}>Ñoquis de papa</h3>
            <p className={estilos.recipeAuthor}>Por Maria López</p>
            <p className={estilos.recipeText}>
              Suaves, caseros y perfectos para acompañar con tu salsa favorita.
            </p>
          </article>

          <article className={estilos.recipeCard}>
            <Image
              src="/budin_limon.jpg"
              alt="Budín de limón"
              width={300}
              height={200}
              className={estilos.recipeImage}
            />
            <h3 className={estilos.recipeTitle}>Budín de limón</h3>
            <p className={estilos.recipeAuthor}>Por Fabian Burgos</p>
            <p className={estilos.recipeText}>
              Una receta dulce, húmeda y simple para acompañar la merienda.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}


export const metadata = {
  title: 'Servicios - Cocina Comunitaria',
}