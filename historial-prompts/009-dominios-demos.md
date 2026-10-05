# Dominios personalizados de demos

- **Fecha:** 2026-10-05
- **Agente responsable:** CEO Agent / GitHub Agent
- **Objetivo:** Revisar los repositorios y demos para enlazar dominios personalizados en lugar de aliases de Vercel cuando existan.
- **Prompt utilizado:** Solicitud del usuario para revisar Vercel y GitHub y redirigir desde la landing a los custom domains de los proyectos.
- **Resultado esperado:** Usar el dominio propio de cada demo verificable y conservar Vercel solo donde no haya dominio confirmado.
- **Resultado obtenido:** `SiempreBela` ahora apunta a `https://siemprebela.com` y `Pistacol` a `https://pistacol.com`. `Victoria Importaciones` conserva `https://victoria-importaciones.vercel.app` y `MORADA` conserva `https://web-chi-seven-11.vercel.app` porque no se encontró custom domain verificable.
- **Observaciones importantes:** Vercel CLI no está autenticado/disponible en el entorno. Los dos dominios personalizados se confirmaron mediante sus configuraciones públicas de Next.js y respuesta HTTP 200. GitHub continúa mostrando las URLs de Vercel como `homepage` del repositorio, pero los enlaces de la landing ya usan los dominios propios.
