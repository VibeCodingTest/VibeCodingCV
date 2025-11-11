# VibeCodingCV – Portafolio de Lanfor Mena

Single Page Application (SPA) construida con React y Vite para presentar el perfil profesional de Lanfor Mena. El proyecto incluye animaciones suaves, soporte multilenguaje (español/inglés), modo claro/oscuro automático y está listo para ejecutarse en contenedores Docker.

## Requisitos previos

- Node.js 18+ (se utiliza Node 20 en Docker)
- npm 9+

## Scripts disponibles

```bash
npm install        # instala dependencias
npm run dev        # inicia el entorno de desarrollo en http://localhost:5173
npm run build      # genera la versión optimizada en la carpeta dist
npm run preview    # sirve la build usando Vite preview (útil para pruebas locales)
npm start          # sirve la carpeta dist con serve en el puerto 4173
```

> Nota: En este entorno no se pudieron descargar dependencias desde npm por restricciones de red. Los scripts anteriores están listos para ejecutarse en un entorno con acceso a internet.

## Estructura del proyecto

```
src/
  assets/           # Recursos estáticos
  components/       # Componentes reutilizables (Hero, Timeline, etc.)
  hooks/            # Hooks personalizados (p.ej. modo claro/oscuro)
  pages/            # Páginas de React (Home)
  styles/           # Temas y estilos globales con styled-components
  translations/     # Archivos i18n para español e inglés
  utils/            # Utilidades auxiliares
```

## Docker

### Construir la imagen

```bash
docker build -t lanfor-portfolio .
```

### Ejecutar el contenedor

```bash
docker run -p 4173:4173 lanfor-portfolio
```

La aplicación quedará disponible en `http://localhost:4173`.

### Usar docker-compose

```bash
docker compose up --build
```

## Accesibilidad y SEO

- Etiquetas meta dinámicas para título y descripción basadas en el idioma activo.
- Navegación con anclas y comportamiento de scroll suave.
- Contraste alto con paleta sobria y modo automático claro/oscuro.

## Créditos

Contenido adaptado del perfil profesional de Lanfor Mena.
