# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## TO DO LIST PROGECT 
 # PAGES: 
 1) Login: pagina di login 
 2) Dashboard: pagina x dashboard con tutte le todo list presenti (metterne 2 di esempio).
 3) TodoList: pagina con la todo list selezionata con checkbox per completare i task + bottone modifica e bottone elimina.
 4) Task: pagina del task specifico: con i dettagli di un task (es.: ora, luogo, note).
 5) Setting: pagina con le impostazioni per modificare il tema giorno/notte. Poi per attivare notifiche e creare categorie.

## Struttura delle pagine

# Login.jsx
Componenti:
- Form con email/username e password
- Pulsante Accedi
- Eventuale link per registrazione futura

# Dashboard.jsx
Mostra tutte le To-Do List (puoi metterne 2 di esempio):
- Lista dei task principali o delle liste
- Pulsante Crea nuovo task o nuova lista
- Ogni task/lista cliccabile per aprire la pagina dettaglio

# TodoList.jsx
Mostra i task di quella lista:
- Checkbox per completare i task
- Plsanti Modifica e Elimina accanto a ogni task
- Eventuale pulsante per aggiungere un nuovo task

# Task.jsx
Mostra tutti i dettagli di un singolo task:
- Titolo
- Descrizione
- Ora / data
- Luogo
- Note aggiuntive
- Priorità (alta/media/bassa)
- Azioni rapide: Modifica / Elimina / Completa

# Setting.jsx
- Modifica tema giorno/notte
- Eventuali funzionalità future:
- Attivare notifiche
- Creare categorie