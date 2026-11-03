# Actualizaciones

## Antes de actualizar

Revisa las notas de la versión y comprueba si hay cambios de dependencias, configuración o base de datos. No des por hecho que todas las versiones se instalan sustituyendo la carpeta completa.

## Respaldo

Guarda la versión instalada, su configuración y una copia de la base de datos. Conserva los archivos necesarios para volver a la versión anterior si la prueba falla.

## Aplicar la versión

1. Prueba el paquete nuevo fuera de producción.
2. Compara los archivos de configuración con la versión que utilizas.
3. Sigue las migraciones indicadas por el recurso, si existen.
4. Arranca sus dependencias y el recurso en el orden documentado.
5. Comprueba la consola y sus funciones principales.

## Si aparece un problema

Detén la prueba y conserva el error completo. Si necesitas volver atrás, restaura tanto los archivos como los datos que hayan cambiado siguiendo tu respaldo. No mezcles versiones sin comprobar su compatibilidad.

El alcance de las actualizaciones incluidas se informa en la ficha de cada recurso.
