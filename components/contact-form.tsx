"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `Consulta de ${form.get("name") || "un nuevo contacto"}`;
    const body = [`Nombre: ${form.get("name")}`, `Email: ${form.get("email")}`, `Tema: ${form.get("topic")}`, "", String(form.get("message"))].join("\n");
    window.location.href = `mailto:scvillada@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>Nombre<input required name="name" autoComplete="name" placeholder="Tu nombre" /></label>
        <label>Email<input required type="email" name="email" autoComplete="email" placeholder="tu@email.com" /></label>
      </div>
      <label>¿En qué puedo ayudarte?<input required name="topic" placeholder="Una web, una app, una automatización..." /></label>
      <label>Mensaje<textarea required name="message" rows={5} placeholder="Contame brevemente qué tenés en mente" /></label>
      <div className="form-action">
        <button className="button button-primary" type="submit">Enviar consulta <span>↗</span></button>
        <span className="form-hint">Se abrirá tu cliente de email</span>
      </div>
      {sent && <p className="form-success" role="status">Tu consulta está lista para enviar.</p>}
    </form>
  );
}
