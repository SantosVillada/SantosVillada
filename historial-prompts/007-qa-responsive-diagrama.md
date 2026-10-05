# Corrección responsive del diagrama

- **Fecha:** 2026-10-05
- **Agente responsable:** QA Agent / CEO Agent
- **Objetivo:** Corregir el overflow horizontal observado en mobile alrededor del diagrama ilustrativo de equilibrio.
- **Prompt utilizado:** Solicitud del usuario para revisar el diagrama en mobile, probarlo bien y corregirlo.
- **Resultado esperado:** Diagrama contenido en el viewport en 360px y 390px, sin romper la composición desktop ni generar overflow horizontal.
- **Resultado obtenido:** Se limitaron los elementos del hero al viewport, se habilitó wrapping seguro para títulos largos, se centró el diagrama dentro de la sección mobile y se reposicionaron sus etiquetas laterales dentro del círculo.
- **Observaciones importantes:** `npm run lint` y `npm run build` pasan correctamente. La validación se realizó sobre la instancia de desarrollo reiniciada y con una captura headless de 360px.
