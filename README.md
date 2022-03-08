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

A través del disptach se ejecutan las actions, donde type seria la key y payload la información enviada
