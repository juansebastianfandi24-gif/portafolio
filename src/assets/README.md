# Archivos de Assets

Esta carpeta contiene todos los recursos estáticos del proyecto organizados en subcarpetas:

## 📁 Estructura

- `/images/` - Imágenes utilizadas en componentes (no públicas directamente)
- `/fonts/` - Fuentes personalizadas (si no usas Google Fonts)
- `/icons/` - Iconos SVG personalizados

## 💡 Uso

Para imágenes que necesitan ser procesadas por Next.js (optimización, lazy loading):

```tsx
import Image from 'next/image';
import myImage from '@/src/assets/images/mi-imagen.jpg';

<Image src={myImage} alt="Descripción" />
```

Para archivos estáticos directos, usa la carpeta `/public/`.
