// AGGIUNGI TASK ALLE LISTE

const input = document.getElementById('task-input');
// salviamo nella variabile "input" l'elemento con id="task-input"
// qui l'utente scriverà le att. da aggiungere.
const addButton = document.getElementById('add-task-btn');
// salviamo il tasto + con id="add-task-btn" per aggiungere dal bottone +
//le tasks  che vengono scritte nella variabile input 
const taskList = document.getElementById('task-list');
// l'alemento <ul> è un elenco contenente tutte le tasks
// lo salviamo nella var taskList per poterci aggiungere nuove tasks (<li>)
// in modo dinamico con JS, senza scriverle manualmente su HTML
addButton.addEventListener('click', () => {

// addButton (il bottone +) è l'elemento su cui vogliamo ascoltare l'evento
// ('click', () => { }) dice “ascolta l’evento click sull' elemento addButton”.
/*
Un listener in JavaScript è un “ascoltatore” di eventi.
In pratica, è una funzione che “sta in ascolto” di un evento 
su un elemento HTML (clic, pressione di un tasto, movimento 
del mouse, ecc.) e esegue del codice quando quell’evento accade.
Il codice qui dentro la funzione di addEventListener viene eseguito 
solo quando clicchi sul bottone o meglio quando viene eseguito un evento, 
che in questo caso sarà il clink del bottone.
*/
const taskText = input.value.trim();
// input.value prende il testo che l’utente ha scritto nel campo input.
//.trim() rimuove eventuali spazi vuoti all’inizio e alla fine del testo.
// Salviamo il risultato in taskText.
if (taskText === '') return; // niente input vuoto
/* condizione: se l'utente non ha scritto nulla, ovvero se c'è solo una stringa vuota 
(taskText è vuoto), o se ha scritto solo spazi tolti da .trim,
viene interrotta l'esecuzione della funzione. RETURN dentro una funzione significa 
“esci subito da questa funzione, non fare niente dopo”. Quindi se l’utente 
non ha scritto nulla, il codice non crea un nuovo elemento nella lista 
e non lo aggiunge al DOM. */
const li = document.createElement('li'); //crea nuovo <li>
li.textContent = taskText;
/* Assegnando taskText a li.textContent, stiamo dicendo:
“Prendi quello che l’utente ha scritto nell’input e mettilo dentro il <li> come testo 
visibile.” taskList.appendChild(li); Aggiunge il nuovo <li> alla lista <ul> nel DOM. */
taskList.appendChild(li);
input.value = '';
});
//Svuota il campo input dopo aver aggiunto l’attività. È pronto per scriverne un’altra.
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addButton.click();
});
/* Aggiunge un listener all’input.
Significa: quando premi un tasto mentre sei dentro il campo input, esegui la funzione. */
/* Condizione che Controlla se il tasto premuto è Invio (Enter).
Se sì, simula un clic sul bottone addButton, quindi aggiunge l’attività 
senza dover cliccare manualmente. */

/* In sintesi cosa fa JS con questo codice:
L’utente scrive un testo nell’input.
Cliccando + o premendo Enter, il testo viene trasformato in un <li> dentro la lista.
Il campo input si pulisce automaticamente.
Non si possono inserire attività vuote. */