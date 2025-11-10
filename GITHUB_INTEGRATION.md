# 🚀 Integración de GitHub Repositories

## ✨ Funcionalidad Implementada

Tu portafolio ahora obtiene **dinámicamente** los repositorios desde tu cuenta de GitHub y los muestra junto con tus proyectos destacados.

## 🔧 Cómo Funciona

### 1. **Obtención de Datos**
- Al cargar la página de proyectos, se llama automáticamente a la API de GitHub
- Endpoint: `https://api.github.com/users/Sebastianfandi24/repos`
- Los datos se cachean por 1 hora (`revalidate: 3600`)

### 2. **Filtrado Inteligente**
Los repositorios se filtran automáticamente para excluir:
- ❌ Forks de otros proyectos
- ❌ Repositorios archivados
- ✅ Solo tus proyectos originales activos

### 3. **Categorización Automática**
Los proyectos de GitHub se categorizan inteligentemente basándose en:
- **Lenguaje principal** del repositorio
- **Topics/etiquetas** de GitHub
- **Palabras clave** en la descripción

Categorías disponibles:
- 🎨 **Full Stack** - React, Next.js, Vue
- ⚙️ **API & Backend** - Python, Java, APIs
- 📊 **Data Engineering** - Analytics, Data Science
- 🔒 **Cybersecurity** - Security, Cyber
- 💾 **Backend & Database** - SQL, Databases

### 4. **Combinación de Proyectos**
- **Proyectos Destacados**: Los 6 proyectos en `src/data/projectsData.ts` aparecen primero
- **Proyectos GitHub**: Se agregan automáticamente los repositorios adicionales
- **Sin Duplicados**: Si un proyecto destacado ya tiene la URL de GitHub, no se duplica

## 📊 Información Mostrada

Cada repositorio de GitHub incluye:
- 📝 **Título**: Nombre del repositorio
- 📄 **Descripción**: Del repositorio (o texto por defecto)
- 🏷️ **Tecnologías**: Topics de GitHub + lenguaje principal
- 🔗 **GitHub URL**: Link al repositorio
- 🌐 **Live URL**: Homepage del proyecto (si existe)
- 🖼️ **Imagen**: Placeholder personalizado morado

## 🎨 Características UX

### Loading State
```
⟳ Animación de carga
"Cargando proyectos desde GitHub..."
```

### Filtros Dinámicos
- Los filtros se actualizan automáticamente
- Muestran el **conteo** de proyectos por categoría
- Diseño con tema **morado** consistente

### Estadísticas
```
"Mostrando X de Y proyectos totales"
```

## 🔄 Flujo Completo

```
1. Usuario visita /projects
2. ⟳ Loading spinner visible
3. 📡 Fetch desde GitHub API
4. 🔄 Mapeo de datos al formato interno
5. 🏷️ Categorización automática
6. 🧹 Eliminación de duplicados
7. ✅ Renderizado de tarjetas
8. 🎯 Filtros interactivos listos
```

## ⚙️ Archivos Modificados

### `/src/utils/api.ts`
- ✅ Función `getGitHubRepos()` mejorada
- ✅ Mapeo a formato interno
- ✅ Filtrado de forks y archivados
- ✅ Caché de 1 hora

### `/src/sections/ProjectsSection.tsx`
- ✅ Estado `isLoading`
- ✅ useEffect para fetch
- ✅ Función `categorizarProyecto()`
- ✅ Combinación inteligente de proyectos
- ✅ UI con loading state

### `/tsconfig.json`
- ✅ Paths actualizados para `@/` imports

### `/next.config.ts`
- ✅ Dominios de GitHub whitelisteados para imágenes

## 🎯 Próximos Pasos Recomendados

### Mejoras Opcionales

1. **Agregar Topics a tus repos**
   ```bash
   # En GitHub, agregar topics como:
   python, react, api, backend, etc.
   ```

2. **Configurar Homepages**
   - Agrega URLs de demos en vivo en la configuración de cada repo
   - Aparecerán automáticamente como "Ver Demo"

3. **Imágenes Personalizadas**
   - Agrega un `README` con imagen banner
   - O crea un `/public/images/` personalizado por proyecto

4. **Rate Limiting**
   - La API de GitHub permite 60 requests/hora sin autenticación
   - Para más: agregar token de GitHub en `.env.local`

## 🐛 Troubleshooting

### ¿No aparecen proyectos?
✅ Verifica la consola del navegador
✅ Asegúrate de tener conexión a internet
✅ Revisa que el username sea correcto en `config.ts`

### ¿Categorías incorrectas?
✅ Agrega topics relevantes en GitHub
✅ Modifica la función `categorizarProyecto()` si necesitas lógica custom

### ¿Imágenes no cargan?
✅ Verifica `next.config.ts` tiene los dominios correctos
✅ Reinicia el servidor de desarrollo después de cambios en config

## 📝 Notas Importantes

- 🔄 **Actualización**: Los proyectos se refrescan cada hora automáticamente
- 🎨 **Consistencia**: Todo mantiene el tema morado monochromático
- 📱 **Responsive**: Funciona perfecto en mobile, tablet y desktop
- ⚡ **Performance**: Caché + Next.js optimizations = súper rápido
- 🔒 **Seguridad**: No expone tokens ni información sensible

---

## 🎉 ¡Listo!

Tu portafolio ahora muestra automáticamente todos tus proyectos de GitHub. 

Solo necesitas:
1. ✅ Subir nuevos proyectos a GitHub
2. ✅ Agregar topics relevantes
3. ✅ ¡Aparecerán automáticamente! 🚀
