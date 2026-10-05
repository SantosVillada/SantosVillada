# SEO con dominio de producción

- **Fecha:** 2026-10-05
- **Agente responsable:** SEO Agent / CEO Agent
- **Objetivo:** Completar el SEO técnico usando el dominio confirmado de la landing.
- **Prompt utilizado:** Solicitud del usuario para revisar Vercel, confirmar `santosvillada.com` y terminar el SEO pendiente.
- **Resultado esperado:** Canonical y URLs absolutas correctas, metadata social, schema, robots, sitemap y recursos SEO de producción.
- **Resultado obtenido:** Se configuró `https://santosvillada.com` como dominio canónico, se añadieron Open Graph y Twitter con imagen social dinámica, JSON-LD con identidad y contacto, `robots.txt`, `sitemap.xml`, manifest y favicon.
- **Observaciones importantes:** GitHub expone el deployment de Vercel en `https://santos-villada.vercel.app`, pero el custom domain aún devuelve un error TLS desde esta sesión. El código queda preparado para el dominio confirmado; hay que verificar la propagación/SSL en Vercel antes de validar rastreo público.
