// MAIN.JSX SERVE A COLLEGARE REDUX ALLO STORE E AD AVVIARE REACT

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom' // importo il provider di react-router-dom
import { Provider as ReduxProvider} from 'react-redux' // importo il Provider di redux e lo rinommino ReduxProvider 
import { store } from './store'

createRoot(document.getElementById('root')).render(
    // quando uso <ReduxProvider store={store}>, tutti i componenti possono accedere a tutto lo stato globale
    <ReduxProvider store = {store}> {/* creo la prop "store", che è fondamentale, perché collega tutto il progetto a Redux. */}
        <BrowserRouter> {/* aggiungo il provider di react-router-dom */}
            <App />
        </BrowserRouter>
    </ReduxProvider> // aggiungo il provider di Redux
);



