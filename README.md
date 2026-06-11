# API Copa Mundial FIFA — Lab 14

## Requisitos
- Node.js 22+
- pnpm

## Instalación
pnpm install

## Crear y poblar la base de datos
node data/createdb.js

## Ejecutar el servidor
pnpm dev

## Rutas disponibles
| Ruta               | Descripción                          |
|--------------------|--------------------------------------|
| /                  | Info de la API                       |
| /mundiales         | Lista de slugs (o ?include=full)     |
| /mundial/:slug     | Detalle de una edición               |
| /campeon/:pais     | Slugs de mundiales ganados por país  |
| /random            | Edición aleatoria                    |
| /search/:text      | Búsqueda por texto (mín. 3 chars)    |
| /imagenes/*        | Imágenes estáticas                   |

## Imagenes

A continuación se muestran las ejecuciones de las rutas y capturas correspondientes:

1. `xh GET :4321/mundiales`

	![mundiales 1](imagenes/Windows%20PowerShell%206_11_2026%203_10_14%20PM.png)

2. `xh GET :4321/mundiales include==full`

	![mundiales full](imagenes/Windows%20PowerShell%206_11_2026%203_10_42%20PM.png)

3. `xh GET :4321/mundial/qatar-2022`

	![qatar 2022](imagenes/Windows%20PowerShell%206_11_2026%203_10_59%20PM.png)

4. `xh GET :4321/mundial/inexistente`  # -> 404 JSON

	![inexistente 404](imagenes/Windows%20PowerShell%206_11_2026%203_11_24%20PM.png)

5. `xh GET :4321/campeon/Argentina`

	![campeon Argentina](imagenes/Windows%20PowerShell%206_11_2026%203_11_36%20PM.png)

6. `xh GET :4321/random`

	![random](imagenes/Windows%20PowerShell%206_11_2026%203_12_04%20PM.png)

7. `xh GET :4321/search/final`

	![search final](imagenes/Windows%20PowerShell%206_11_2026%203_12_22%20PM.png)

8. `xh GET :4321/search/ab`

	![search ab](imagenes/Windows%20PowerShell%206_11_2026%203_12_50%20PM.png)

9. Captura adicional

	![extra](imagenes/Windows%20PowerShell%206_11_2026%203_13_14%20PM.png)

