# 🎯 Goalify - Gestor de Objetivos Personales

## 📋 Tabla de Contenidos
- [Descripción General](#-descripción-general)
- [✨ Características Principales](#-características-principales)
- [🛠️ Tecnologías Utilizadas](#️-tecnologías-utilizadas)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🚀 Instalación y Configuración](#-instalación-y-configuración)
- [⚡ Scripts Disponibles](#-scripts-disponibles)
- [🧩 Componentes Principales](#-componentes-principales)
- [🌐 Rutas](#-rutas)
- [🔄 Estado Global](#-estado-global)
- [🤝 Contribución](#-contribución)
- [📄 Licencia](#-licencia)

## 🌟 Descripción General

Goalify es una aplicación de seguimiento de objetivos personales construida con React, Redux Toolkit y React Router. Permite a los usuarios crear, gestionar y hacer seguimiento de sus objetivos personales con una interfaz intuitiva y moderna.

## ✨ Características Principales

- **Autenticación de usuarios**: Registro e inicio de sesión seguro con auto-login y persistencia de sesión
- **Gestión de objetivos**: Crear, editar, eliminar y hacer seguimiento de objetivos con fechas límite y categorías
- **Filtrado y búsqueda**: Filtrar objetivos por estado, categoría y fechas, buscar por título
- **Sistema de evaluación**: Calificar objetivos con slider interactivo y actualización automática de estado
- **Indicadores visuales**: Barras de progreso coloridas, emojis de estado y alertas de fechas límite
- **Dashboard de métricas**: Resumen visual de progreso con tarjetas y estadísticas
- **Vista de estadísticas**: Análisis detallado por categorías y estado de los objetivos
- **Exportación de reportes**: Exportar datos a CSV y JSON para análisis externo
- **Perfil de usuario**: Gestión de información personal con actualización de datos
- **Diseño responsivo**: Interfaz que se adapta a diferentes dispositivos
- **Pruebas unitarias**: Cobertura de pruebas para funcionalidades críticas

## 🛠️ Tecnologías Utilizadas

- **Frontend**:
  - React 18
  - Redux Toolkit
  - React Router v7
  - Material-UI
  - Vite
  - Chart.js
  - React Icons

- **Herramientas de Desarrollo**:
  - ESLint + Prettier
  - npm
  - Git
  - GitHub/GitLab/Bitbucket (control de versiones)

## 📁 Estructura del Proyecto

```
src/
├── assets/           # Recursos estáticos (imágenes, fuentes, etc.)
├── components/       # Componentes reutilizables
│   ├── auth/        # Componentes de autenticación
│   ├── dashboard/   # Componentes del dashboard
│   ├── goals/       # Componentes de gestión de objetivos
│   ├── evaluations/ # Componentes del sistema de evaluación
│   ├── metrics/     # Componentes de métricas y estadísticas
│   ├── reports/     # Componentes de exportación de reportes
│   └── shared/      # Componentes compartidos
├── hooks/           # Custom hooks
├── pages/           # Páginas/Contenedores
├── services/        # Llamadas a la API
├── slices/          # Redux slices
├── styles/          # Estilos globales y temas
├── utils/           # Utilidades y helpers
├── __tests__/       # Archivos de pruebas unitarias
├── App.jsx          # Componente raíz
├── main.jsx         # Punto de entrada
├── store.js         # Configuración de Redux store
└── routes.js        # Configuración de rutas
```

## 🚀 Instalación y Configuración

### Requisitos Previos
- Node.js (v16 o superior)
- npm (v8 o superior)

### Pasos de Instalación
1. Clonar el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd goalify
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Configurar variables de entorno:
   ```env
   VITE_API_URL=tu_url_de_api
   VITE_APP_NAME=Goalify
   ```

## ⚡ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la construcción de producción
- `npm run lint` - Ejecuta ESLint para análisis de código
- `npm run test` - Ejecuta las pruebas unitarias
- `npm run format` - Formatea el código automáticamente

## 🧩 Componentes Principales

### Autenticación
- `Login` - Formulario de inicio de sesión
- `Register` - Formulario de registro de usuarios

### Dashboard
- `DashboardPage` - Vista principal después del inicio de sesión
- `SummaryCards` - Tarjetas de resumen de objetivos
- `RecentGoals` - Lista de objetivos recientes

### Objetivos
- `GoalsList` - Lista y gestión de objetivos
- `GoalForm` - Formulario para crear/editar objetivos
- `GoalItem` - Componente individual de objetivo
- `GoalFilters` - Filtros y búsqueda de objetivos

### Evaluaciones
- `EvaluationSlider` - Control deslizante para evaluar objetivos
- `ProgressIndicator` - Indicador visual de progreso

### Métricas
- `MetricsDashboard` - Panel de métricas y estadísticas
- `CategoryBreakdown` - Desglose de objetivos por categoría
- `GoalTimeline` - Línea de tiempo de objetivos

### Reportes
- `ReportGenerator` - Generador de reportes
- `ExportOptions` - Opciones de exportación (CSV/JSON)

### Perfil
- `ProfilePage` - Gestión de información personal
- `AccountSettings` - Configuración de cuenta

## 🌐 Rutas

- `/` - Página de inicio (redirige a /dashboard si autenticado)
- `/login` - Inicio de sesión
- `/register` - Registro de usuario
- `/dashboard` - Panel principal
- `/goals` - Lista de objetivos
- `/goals/new` - Crear nuevo objetivo
- `/goals/:id` - Detalles/Edición de objetivo
- `/metrics` - Métricas y estadísticas
- `/reports` - Generación de reportes
- `/profile` - Perfil de usuario

## 🔄 Estado Global

El estado de la aplicación se gestiona mediante Redux Toolkit con los siguientes slices:

### `authSlice`
- Maneja el estado de autenticación
- Almacena información del usuario
- Gesta el token de autenticación

### `goalsSlice`
- Almacena la lista de objetivos
- Maneja operaciones CRUD de objetivos
- Gesta filtros y búsquedas
- Administra el estado de carga y errores

### `uiSlice`
- Controla el estado de la interfaz
- Gesta notificaciones y alertas
- Administra el tema (claro/oscuro)

## 🤝 Contribución

1. Haz un fork del proyecto
2. Crea una rama para tu función: 
   ```bash
   git checkout -b feature/nueva-funcion
   ```
3. Realiza tus cambios y haz commit:
   ```bash
   git commit -m 'feat: agrega nueva función'
   ```
4. Haz push a la rama:
   ```bash
   git push origin feature/nueva-funcion
   ```
5. Abre un Pull Request

### Convenciones de Código
- Usa nombres descriptivos para variables y funciones
- Comenta el código cuando sea necesario
- Sigue las reglas de ESLint y Prettier
- Escribe pruebas para nuevas funcionalidades

## 📄 Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).

---

📅 **Última actualización**: Julio 2024  
👥 **Equipo de Desarrollo**: [Tu Equipo]

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)