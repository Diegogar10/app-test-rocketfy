# Aplicación de recetas, desarrollado con ReactJS - VITE

Este proyecto es una prueba de conocimiento sobre Frontend con React y Next, a continuación, verás el temario:

- Descripción de funcionamiento y experiencia de usuario
- Descarga e instalación de proyecto entorno local
- Características técnicas, uso de conceptos y utilidades
- - Variables de entorno
- - Manejo de Rutas 
- - Rutas protegidas
- - Parámetros, Navegación y Url
- - Consulta API's
- - Contexto Global
- - Plantillas Generales
- - Contenedores y componentes reutilizables
- - Renderizado Dinámico
- - Hooks y Local Storage
- - Diseño responsivo

## Descripción de funcionamiento y experiencia de usuario

Esta aplicación reúne las mejores recetas, que podrás ver a detalle y si te registras e ingresas como usuario podrás guardar en favoritos para posteriormente lo utilices para inspirarte, seguir los pasos y alimentarte de manera sana, diversa y deliciosa.

Iniciamos en el home con una lista de categorías donde encontraremos preparaciones con pollo, carne, desayunos, postres entre otros.

[Imagen home](./src/assets/images/home-categorias.JPG)

Una vez seleccionamos una categoría, la aplicación nos trae un número de recetas de esa categoría donde podremos ver el nombre, llevarnos una visual del platillo

[Imagen recipes](./src/assets/images/list-recipes.JPG)

Si queremos a través de un botón lograr ver el detalle de la receta con la explicación, inclusive tenemos acceso a un video de la receta. 

[Imagen button detail](./src/assets/images/detail-card.JPG)

Sí tenemos una sesión de usuario abierta, previo al registro, tendremos acceso a un botón de favoritos en la lista de recetas donde se agregan a una sección especial de favoritos para todo aquello que nos encantó.

` Recordemos que si no estamos registrados no podremos acceder a la página de perfil ni favoritos`

Cuando tenemos recetas con like, podemos ir a nuestra sección de favoritos donde aparecerán un filtro de las recetas que más nos gustan y allí estarán guardadas hasta que las quitemos. Por último, encontraremos en nuestro perfil de datos, allí verás un registro total de datos importantes, sobre cuantas recetas en total tenemos guardadas, que recetas por categorías nos gustan más, entre otros.

[Imagen favorites](./src/assets/images/favorites.JPG)

###No olvides registrarte e ingresar a la APP

Para tener acceso para todas las funciones recuerda ir a la página de login en el menú, donde encontraremos un formulario de registro e ingreso.

- [Mira la aplicación funcionando](https://apptestrocketfy.netlify.app/)

## Descarga e instalación de proyecto entorno local

1. Copia la siguiente ruta en la linea de comandos y clona el repositorio.

` git clone https://github.com/Diegogar10/app-test-rocketfy.git `

2. Instala las librerias y dependencias del proyecto

` npm install `

3. En crea un archivo .env y agrega las variables de entorno para conectar a las API's

[Imagen del archivo](./src/assets/images/file-.env.JPG)

no olvides poner los nombres de las variables tal y como aparecen en el archivo .env.example

4. Corre el proyecto en modo desarrollo

` npm run dev `

## Características técnicas, uso de conceptos y utilidades

- [Variables de entorno](./.env.example)
- [Manejo de Rutas](./src/App.jsx)
- [Rutas protegidas](./src/pages/Favorites.jsx)
- [Parámetros, Navegación y Url](./src/pages/Detail.jsx)
- [Consulta API 1](./src/hooks/useGetCategories.jsx)
- [Consulta API 2](./src/services/userService.js)
- [Contexto Global](./src/context/index.jsx)
- [Plantillas Generales](./src/templates/BlueTheme.jsx)
- [Contenedores reutilizables](./src/container/ListCategories.jsx)
- [Componentes reutilizables](./src/components/RecipeCard.jsx)
- [Renderizado Dinámico](./src/components/Nav.jsx)
- [Hooks y Local Storage](./src/hooks/useLocalStorage.jsx)
- [Diseño responsivo](./src/components/Nav.scss)