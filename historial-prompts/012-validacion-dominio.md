# Validación del dominio de producción

- **Fecha:** 2026-10-05
- **Agente responsable:** QA Agent / SEO Agent
- **Objetivo:** Verificar el custom domain después de que el usuario lo vinculó en Vercel y alinear el SEO con la URL final.
- **Prompt utilizado:** Confirmación del usuario de que ya vinculó el dominio en Vercel.
- **Resultado esperado:** HTTPS activo, raíz redirigida correctamente, `www` sirviendo la landing y recursos SEO disponibles.
- **Resultado obtenido:** `https://santosvillada.com` responde con `308` hacia `https://www.santosvillada.com/`; el destino responde `200` con HTTPS válido. Se ajustó canonical, JSON-LD, robots y sitemap para usar `https://www.santosvillada.com`.
- **Observaciones importantes:** La URL final canónica es la variante `www`, mientras que Search Console puede seguir usando la propiedad de dominio `santosvillada.com`.
