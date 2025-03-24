# Invoize

_Invoize_ es una aplicación diseñada para freelancers que permite generar y administrar facturas de manera sencilla y profesional. La aplicación permite a los usuarios registrarse, ingresar datos de clientes, direcciones, productos, tarifas por hora y calcular automáticamente subtotales e impuestos (por ejemplo, el 12% de comisión de PayPal). Además, ofrece opciones para descargar las facturas en formato PDF, imagen o generar un enlace para visualizarlas online.

---

## Características principales

-    **Registro y gestión de usuarios**  
     Permite a los usuarios registrarse y gestionar su perfil.

-    **Gestión de clientes y datos de facturación**  
     Registro de clientes, incluyendo información detallada de dirección y otros datos relevantes.

-    **Generación de facturas automatizada**  
     Los usuarios pueden ingresar los servicios prestados (horas trabajadas, precio por hora) y el sistema calcula el total, aplicando impuestos y comisiones (por ejemplo, el 12% de PayPal).

-    **Opciones de descarga y visualización:**

     -    Descarga de facturas en formato PDF o imagen.
     -    Generación de enlaces para visualizar las facturas de forma online.

-    **Personalización:**  
     Posibilidad de subir logotipos y otros elementos visuales para personalizar las facturas.

---

## Tecnologías utilizadas

-    **Gestión de dependencias:** [pnpm](https://pnpm.io/)
-    **Framework de Frontend:** [React](https://reactjs.org/) mediante [Vite](https://vitejs.dev/)
-    **Estilos y diseño:** [Tailwind CSS](https://tailwindcss.com/), [daisyUI](https://daisyui.com/)
-    **Backend:** [Supabase](https://supabase.com/)
-    **Hosting del Frontend:** [Vercel](https://vercel.com/)

---

## Instalación y configuración de DaisyUI con Tailwind CSS

Sigue estos pasos para integrar Tailwind CSS y DaisyUI en tu proyecto:

1.   **Instalar las dependencias:**

     Ejecuta en la terminal:

     ```bash
     npm install tailwindcss@latest @tailwindcss/vite@latest daisyui@latest
     ```

2.   **Configurar Vite con Tailwind CSS:**

     Crea o edita el archivo `vite.config.js` y agrega lo siguiente:

     ```javascript
     import { defineConfig } from "vite";
     import tailwindcss from "@tailwindcss/vite";
     import react from "@vitejs/plugin-react";

     export default defineConfig({
          plugins: [tailwindcss(), react()],
     });
     ```

3.   **Agregar Tailwind CSS y DaisyUI en tu archivo CSS:**

     En el archivo `src/App.css`, incluye lo siguiente:

     ```css
     @import "tailwindcss";
     @plugin "daisyui";
     ```

4.   **Uso de clases de DaisyUI:**

     Una vez configurado, podrás utilizar las clases de DaisyUI en tus componentes React para crear una interfaz atractiva y profesional.

---

## Resumen

_Invoize_ es la herramienta ideal para freelancers que buscan simplificar la creación y gestión de sus facturas, garantizando transparencia en los cobros y una experiencia de usuario moderna y eficiente. Con la integración de tecnologías como React, Tailwind CSS, DaisyUI, Supabase y Vercel, este proyecto está orientado a ofrecer un producto robusto, escalable y visualmente atractivo.

¡Bienvenido a Invoize!

---

_Desarrollado con pasión y compromiso._
