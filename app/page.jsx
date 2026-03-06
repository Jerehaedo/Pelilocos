import Image from "next/image";
import estilos from "@/estilos/inicio.module.css";

export default function InicioPagina() {
  return (
    <main className={estilos.page}>
      <section className={estilos.hero}>
        <div className={estilos.heroText}>
          <h1 className={estilos.title}>Bienvenidos a Cocina Comunitaria</h1>
          <p className={estilos.description}>
            Un espacio donde la cocina se comparte, las recetas se disfrutan y
            cada mes una preparación especial se convierte en la favorita de la
            comunidad.
          </p>
        </div>
      </section>

      <section className={estilos.card}>
        <h2 className={estilos.subtitle}>Receta destacada del mes</h2>

        <div className={estilos.featuredRecipe}>
          <div className={estilos.imageBox}>
            <Image
              src="/tarta_verduras.jpg"
              alt="Receta destacada del mes"
              width={420}
              height={280}
              className={estilos.recipeImage}
            />
          </div>

          <div className={estilos.recipeInfo}>
            <h3 className={estilos.recipeTitle}>Tarta de verduras casera</h3>
            <p className={estilos.author}>Por Elizabeth González</p>

            <p className={estilos.text}>
              Esta receta fue elegida como la favorita del mes por su sabor,
              su simpleza y porque representa muy bien el espíritu de Cocina
              Comunitaria: platos caseros, ricos y hechos para compartir.
            </p>

            <div className={estilos.ingredientsBox}>
              <h4>Ingredientes principales</h4>
              <ul className={estilos.ingredientsList}>
                <li>Cebolla</li>
                <li>Morrón</li>
                <li>Acelga</li>
                <li>Huevos</li>
                <li>Queso rallado</li>
                <li>Masa para tarta</li>
              </ul>
            </div>

            <button className={estilos.button}>Ver receta completa</button>
          </div>
        </div>
      </section>

      <section className={estilos.card}>
        <h2 className={estilos.subtitle}>¿Querés participar?</h2>
        <p className={estilos.text}>
          En nuestra comunidad cualquiera puede compartir su receta. Podés
          enviarnos tus preparaciones por mail con una breve descripción, los
          ingredientes y, si querés, una foto del plato terminado.
        </p>
        <p className={estilos.text}>
          Cada mes seleccionamos una receta destacada para mostrarla en la
          página principal y sumar nuevas ideas a nuestra cocina compartida.
        </p>
        <p className={estilos.mail}>contacto@cocinacomunitaria.com</p>
      </section>
    </main>
  );
}