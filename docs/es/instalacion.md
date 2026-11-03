# Instalación

Estos pasos son generales. Los requisitos y el orden concreto de instalación dependen de la guía del recurso que instales.

## Preparar el servidor

- Haz una copia de seguridad de los archivos y de la base de datos.
- Prueba los cambios en un servidor de desarrollo.
- Comprueba el framework y las dependencias indicadas en la ficha.
- Descarga el recurso desde el canal que corresponda a tu compra.

## Copiar el recurso

Extrae la carpeta dentro de `resources`. Evita una carpeta duplicada dentro de otra y conserva el nombre indicado por el desarrollador.

```text
resources/
└── nombre_del_recurso/
    ├── fxmanifest.lua
    └── ...
```

`nombre_del_recurso` es un ejemplo. Utiliza el nombre real de tu descarga.

## Configurar y arrancar

1. Instala primero las dependencias.
2. Edita únicamente los archivos identificados como configurables.
3. Ejecuta el SQL solo si la guía del producto lo requiere, después del respaldo.
4. Añade el recurso a `server.cfg` después de sus dependencias.

```ini
ensure nombre_del_recurso
```

Reinicia el servidor según las instrucciones del producto, revisa la consola y prueba el funcionamiento con una cuenta de prueba.

## Archivos protegidos

Los archivos protegidos mediante Asset Escrow pueden no ser editables. No intentes eliminar su protección. Consulta la [documentación oficial de Cfx.re](https://docs.fivem.net/docs/server-manual/asset-escrow/) para conocer su funcionamiento.
