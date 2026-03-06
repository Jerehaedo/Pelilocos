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

  // cargar lo guardado al abrir
  useEffect(() => {
    const guardados = JSON.parse(localStorage.getItem("contactos") || "[]");
    setContactos(guardados);
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
 
    const nuevo = {
      id: Date.now(),
      ...form,
    };

    setContactos((prev) => {
      const next = [...prev, nuevo];
      // guardar como JSON en localStorage
      localStorage.setItem("contactos", JSON.stringify(next, null, 2));
      return next;
    });
    console.log(contactos);
    alert("¡Enviado!");
    setForm({ nombre: "", email: "", telefono: "", comentario: "" });
  }

  return (
    <main className={estilos.page}>
      <section className={estilos.card}>
        <h1 className={estilos.title}>Contacte con nosotros :D</h1>

        <form className={estilos.form} onSubmit={handleSubmit}>
          <div className={estilos.grid}>
            <label className={estilos.label} htmlFor="nombre">Nombre</label>
            <input
              className={estilos.input}
              id="nombre"
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
            />

            <label className={estilos.label} htmlFor="email">Email</label>
            <input
              className={estilos.input}
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <label className={estilos.label} htmlFor="telefono">Teléfono</label>
            <input
              className={estilos.input}
              id="telefono"
              type="tel"
              name="telefono"
              value={form.telefono}
              onChange={handleChange}
              required
            />

            <label className={estilos.label} htmlFor="comentario">Comentario</label>
            <textarea
              className={estilos.textarea}
              id="comentario"
              name="comentario"
              rows={6}
              value={form.comentario}
              onChange={handleChange}
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
