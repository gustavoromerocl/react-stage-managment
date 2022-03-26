# react-stage-managment

## Redux

### Instalando y configurando Redux y Redux toolkit

[https://redux-toolkit.js.org/introduction/getting-started]
[https://redux-toolkit.js.org/tutorials/quick-start]

# NPM
npm install @reduxjs/toolkit react-redux

### Redux actions

Las actions se disparan hacia los reducers y los reducers se encargan de actualizar el state en la store

#### Cuerpo de una acción

store.disptatch({
  type: "ADD_TODO",
  payload: {} || [] || undefined,
});

A través del disptach se ejecutan la acción la que recibe como parametro, donde type seria la key y payload la información enviada

### Redux reducers

Son funciones puras que se encargan de ejecutar el trabajo que se pidió previamente con un action, actualizar la información del store con el payload por ejemplo

[https://es.redux.js.org/docs/basico/reducers.html]

### Creando primer action

#### Pasos para conectar un componente

- Definir y crear actions
- Definir y crear reducers
- Conectar reducer a la store
- Usar el dispatch dentro del componente

[https://redux-toolkit.js.org/usage/usage-guide#writing-action-creators]

### Creando primer reducer

[https://redux-toolkit.js.org/usage/usage-guide#simplifying-reducers-with-createreducer]

### Utilizando useDispatch desde la UI

El uso es simple, se debe importar el hook useDisptach que recibe el action que vamos a usar, en ese caso el qe creamos con redux toolkit

### Redux middleware

Redux posee la posibilidad de usar software intermedio entre las actions y reducers para poder trabajar con funciones asincronas. Si bien hay más de una opción, el estándar y que además viene preconfigurado es redux thunk.

- toolkit
[https://redux-toolkit.js.org/api/createAsyncThunk]

### Creando método thunk y actualizando reducers

Sirve para realizar operaciones asincronas sobre el state

### Implementando useSelector y obteniendo valores de la store

Mediante el uso de useSelector es posible obtener los valores guardados en nuestra store de redux

### Aprendiendo a usar selectores

[https://redux-toolkit.js.org/api/createSelector]
Siguiendo las buenas practicas se recomienda unificar en un archivo los selectores, de esta forma se evita que al escalar el proyecto se generen problemas de rendimiento ya que la información de obtendra de las constantes declaradas en dicho archivo. Además con el uso de shallowEqual le indicamos a redux que actualice solo si detecta cambios en el state

### Implementando redux en resultados, implementando llamada a la API y disparando actions

Una practica interesante desarrollada en esta section fue la de usar axios.create y centralizar la información en una carpeta api, el resto fueron cosas que ya hemos visto durante el curso.

### Implementando redux en resultados, creando superhero reducer

### Implementando reduc en resultados, creando selectores y mostrabdo resultados

En esta section creamos los selectores del reducer para llevarlos a la vista y poder utilizarlos.

### Impĺementando redux biography creando actions y reducers

Se configurana actions y reducer para el componente biography

### Implementando redux en biography - Actualizando info de la store

Se pasan los valores obtenidos de las consultas a la api a la store de redux

### Implementando redux en biography - redux devtools

[https://github.com/zalmoxisus/redux-devtools-extension]
[https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related?hl=es]

### Implementando redux en biography - usando reselect pt1

Usando create selector es posible agrupar los selectores que habiamos creado hasta ahora en uno solo aumenta el rendimiento de redux.

### Qué son los slices

[https://redux-toolkit.js.org/api/createslice]

## CONTEXT API

### Qué es un provider

Un provider o proveedor contiene un estado que comparte con los componentes hijos de quien lo consuma o implemente. Una aplicación puede uno o más providers, va a depender de las necesidades en cada caso de uso.

### Qué es un consumer

Un consumer es un componente que se suscribe a un provider para consumir su información.

### Creando contexto y provider

Se crea carpeta context que anidará todos los state managment creados con context api, en este caso creamos una carpeta para el de autenticación. Dentro de esta creamos un archivo index.js que exporta un objeto creado con create context, el cual es usado y exportado en el archivo Provider.js