import estilos from "@/estilos/contacto.module.css"

export default function ContactoPagina(){
  return (
     <main className={estilos.page}>
      <section className={estilos.card}>
        <h1 className={estilos.title}>Contacte con nosotros :D</h1>

        <form className={estilos.form}>
          <div className={estilos.grid}>
            <label className={estilos.label} htmlFor="nombre">
              Nombre
            </label>
            <input className={estilos.input} id="nombre" type="text" name="nombre" />

            <label className={estilos.label} htmlFor="email">
              Email
            </label>
            <input className={estilos.input} id="email" type="email" name="email" />

            <label className={estilos.label} htmlFor="telefono">
              Teléfono
            </label>
            <input className={estilos.input} id="telefono" type="tel" name="telefono" />

            <label className={estilos.label} htmlFor="comentario">
              Comentario
            </label>
            <textarea
              className={estilos.textarea}
              id="comentario"
              name="comentario"
              rows={6}
            />
          </div>

          <div className={estilos.actions}>
            <button className={estilos.button} type="submit">
              Enviar
            </button>
          </div>
        </form>
      </section>
    </main>
  ) 
}


export const metadata = {
  title: 'Contacto - Cocina Comunitaria',
}

export const viewport = {
  colorScheme: '',
  themeColor: 'red',
}