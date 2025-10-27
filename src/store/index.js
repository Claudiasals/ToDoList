import { configureStore } from "@reduxjs/toolkit"; // configureStore ci permette di andare a registrare gli slice
// Ogni slice gestisce solo la sua parte dello stato, ma tutto insieme forma lo store centrale.

const store = configureStore (
    {
        reducer: { //Il campo reducer dentro configureStore è dove registriamo tutti gli slice.

        }
    }
)


/*
ESEMPIO: POI INSERISCO I COMEMNTI NEL REDUCER CHE AVRà CREATO COJ IL SUO NOME CORRETTO AL POSTO DI TODOS

import { configureStore } from "@reduxjs/toolkit"
import todoReducer from './features/todoSlice'

const store = configureStore({
  reducer: {
    todos: todoReducer
  }
})


Ogni chiave dell’oggetto (todos nell’esempio) diventa una parte dello stato globale (state.todos).

Il valore (todoReducer) è lo slice stesso, cioè l’oggetto che contiene stato iniziale e reducers.

*/