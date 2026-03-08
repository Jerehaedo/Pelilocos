"use client";

import { useEffect, useState } from "react";
import estilos from "@/estilos/contacto.module.css";

export default function ContactoPagina() {
  const [contactos, setContactos] = useState([]);

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    comentario: "",
  });


  useEffect(() => {
    const guardados = JSON.parse(localStorage.getItem("contactos") || "[]");
    setContactos(guardados);
  }, []);

  function guardarEnObj(e) {
    setForm((formprev) => ({ ...formprev, [e.target.name]: e.target.value }));
  }

  function enviarForm(e) {
    e.preventDefault();

    setContactos((arrayprev) => {
      const nuevoobj = { id: arrayprev.length + 1, ...form };
      const proximo = [...arrayprev, nuevoobj];
      localStorage.setItem("contactos", JSON.stringify(proximo, null, 2));
      return proximo;
    });
    alert("¡Enviado!");
    setForm({ nombre: "", email: "", telefono: "", comentario: "" });
  }

  return (
    <main className={estilos.page}>
      <section className={estilos.card}>
        <h1 className={estilos.title}>Contacte con nosotros :D</h1>

        <form className={estilos.form} onSubmit={enviarForm}>
          <div className={estilos.grid}>
            <label className={estilos.label} htmlFor="nombre">Nombre</label>
            <input
              className={estilos.input}
              id="nombre"
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={guardarEnObj}
              required
            />

            <label className={estilos.label} htmlFor="email">Email</label>
            <input
              className={estilos.input}
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={guardarEnObj}
              required
            />

            <label className={estilos.label} htmlFor="telefono">Teléfono</label>
            <input
              className={estilos.input}
              id="telefono"
              type="tel"
              name="telefono"
              value={form.telefono}
              onChange={guardarEnObj}
              required
            />

            <label className={estilos.label} htmlFor="comentario">Comentario</label>
            <textarea
              className={estilos.textarea}
              id="comentario"
              name="comentario"
              rows={6}
              value={form.comentario}
              onChange={guardarEnObj}
              required
            />
          </div>

          <div className={estilos.actions}>
            <button className={estilos.button} type="submit">Enviar</button>
          </div>
        </form>
      </section>
    </main>
  );
}
