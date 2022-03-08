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