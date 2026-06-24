# ISET SpA — Guía de Uso y Despliegue
**Para: Erick Rubilar Henríquez**  
**Versión:** 1.0 · Junio 2024

---

## Contenido de esta carpeta

```
iset/
├── index.html          ← Página web principal (NO edites este archivo)
├── .htaccess           ← Configuración del servidor (NO edites)
├── assets/
│   ├── style.css       ← Estilos visuales (NO edites a menos que sepas CSS)
│   └── img/            ← Aquí van TUS FOTOS de obras
│       ├── proyecto-01.jpg
│       ├── proyecto-02.jpg
│       └── ... (agrega los que quieras)
└── lib/
    ├── manifest.js     ← ✅ ARCHIVO PRINCIPAL DE EDICIÓN — textos, datos, galería
    └── main.js         ← Lógica del sitio (NO edites)
```

---

## 1. Subir a Hostinger

1. Entra a **hPanel** (panel.hostinger.com) con tu cuenta.
2. Ve a **Administrador de Archivos** → entra a la carpeta `public_html`.
3. Si hay un archivo `index.html` genérico de Hostinger, **bórralo primero**.
4. Haz clic en **Subir archivos** y arrastra **toda la carpeta `iset`** (o sube cada archivo/carpeta individualmente).
5. Asegúrate de que el `index.html` quede directamente en `public_html/`, no dentro de una subcarpeta.
6. Abre tu navegador y escribe tu dominio. La web ya debería verse.

> **Consejo:** Si instalaste WordPress u otro CMS antes, bórralo primero desde el panel de Hostinger para evitar conflictos.

---

## 2. Cambiar el número de WhatsApp

Abre `lib/manifest.js` con el Bloc de notas. Busca la línea:

```js
whatsapp: '56982641655',
```

Cambia el número manteniendo el formato sin espacios ni el símbolo `+`.  
Ejemplo para +56 9 1234 5678: `whatsapp: '56912345678',`

Guarda el archivo y vuélvelo a subir a Hostinger (reemplaza el anterior).

---

## 3. Cambiar el correo electrónico

En el mismo archivo `lib/manifest.js`, busca:

```js
email: 'erubilar@iset.cl',
```

Reemplaza por tu nuevo correo. Guarda y vuelve a subir.

---

## 4. Cambiar textos de la empresa

En `lib/manifest.js`, dentro del bloque `empresa: { ... }`, edita:

- `nombre` → nombre legal de la empresa
- `eslogan` → frase que aparece en el footer
- `descripcion` → texto del párrafo en la sección "La Empresa"

**Reglas importantes:**
- Siempre mantén las comillas `'...'` alrededor de cada texto.
- Si tu texto incluye una comilla simple (ej: `it's`), usa `\'` o reemplaza por `"`.
- No borres las comas al final de cada línea.

---

## 5. Agregar tus fotos de obras a la galería

### Paso 1 — Preparar las fotos
- Formato: JPG o WebP (recomendado JPG para mayor compatibilidad).
- Tamaño ideal: entre 800px y 1200px de ancho, peso bajo 300 KB.
- Nómbralas sin espacios ni tildes: `rack-data-center.jpg`, `tablero-electrico-01.jpg`.

### Paso 2 — Subir las fotos
- Copia tus fotos a la carpeta `assets/img/` antes de subir a Hostinger.
- En Hostinger: ve a `public_html/assets/img/` y sube las imágenes allí.

### Paso 3 — Registrar las fotos en el manifest
En `lib/manifest.js`, encuentra el bloque `galeria: [...]` y actualiza cada entrada:

```js
galeria: [
  { src: 'assets/img/rack-data-center.jpg',    alt: 'Rack de datos certificado',    categoria: 'Cableado'     },
  { src: 'assets/img/tablero-electrico-01.jpg', alt: 'Tablero eléctrico industrial', categoria: 'Electricidad' },
  { src: 'assets/img/camara-cctv-oficina.jpg',  alt: 'Cámaras IP en oficina',        categoria: 'CCTV'         },
  // Agrega tantas líneas como fotos tengas, con el mismo formato
]
```

- `src`: ruta de la foto (siempre empieza con `assets/img/`)
- `alt`: descripción corta de lo que se ve en la foto
- `categoria`: etiqueta visible (Electricidad, Cableado, CCTV, SEC, Montajes, AACC)

---

## 6. Editar los servicios

Cada tarjeta de servicio tiene su entrada en `lib/manifest.js` dentro de `servicios: [...]`.  
Puedes editar el `titulo`, `desc` y los `tags` de cada uno. No cambies el campo `id` ni `icono`.

---

## 7. Limpiar la caché del navegador

Si haces cambios pero no los ves reflejados en el navegador:

- **Windows:** `Ctrl + F5`
- **Mac:** `Cmd + Shift + R`
- **Chrome/Edge/Firefox:** también puedes ir a Configuración → Privacidad → Borrar datos de navegación → Imágenes y archivos en caché.

---

## 8. Activar HTTPS en Hostinger

1. En hPanel → **SSL** → activa el **SSL Gratuito (Let's Encrypt)** para tu dominio.
2. Espera 10–15 minutos mientras se procesa.
3. Abre el archivo `.htaccess` y descomenta las líneas de redireccionamiento HTTPS (quita el `#` del inicio de esas 3 líneas).
4. Vuelve a subir el `.htaccess`.

---

## 9. Contacto técnico

Si necesitas hacer cambios más complejos (nueva sección, nueva paleta de colores, integración con formulario por email), contacta al desarrollador que te entregó este sitio.

---

**ISET SpA · Precisión y seguridad en cada proyecto. · EST. 2018**
