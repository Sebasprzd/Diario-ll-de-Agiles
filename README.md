# Proyecto para Metodologias Agiles - Diario ll

Este proyecto es una aplicación web desarrollada con React, TypeScript y Vite. Utiliza TailwindCSS para los estilos y está configurado para un flujo de desarrollo moderno y rápido.

## Estructura del proyecto

```
project/
├── src/
│   ├── App.tsx         # Componente principal de la aplicación
│   ├── main.tsx        # Punto de entrada de React
│   ├── index.css       # Estilos globales (Tailwind)
│   └── vite-env.d.ts   # Tipos de Vite
├── index.html          # HTML principal
├── package.json        # Dependencias y scripts
├── vite.config.ts      # Configuración de Vite
├── tailwind.config.js  # Configuración de TailwindCSS
├── postcss.config.js   # Configuración de PostCSS
├── tsconfig*.json      # Configuración de TypeScript
```

## Instalación y ejecución

1. **Instalar dependencias**

   ```pwsh
   npm install
   ```

2. **Ejecutar en modo desarrollo**

   ```pwsh
   npm run dev
   ```

   Esto abrirá la aplicación en `http://localhost:5173` (por defecto).

3. **Construir para producción**

   ```pwsh
   npm run build
   ```

4. **Previsualizar el build**

   ```pwsh
   npm run preview
   ```

## Requisitos
- Node.js >= 18
- npm >= 9

---
