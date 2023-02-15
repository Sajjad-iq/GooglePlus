import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/GlobalStyles/index.css'
import GlobalContextProvider from './Context/GlobalContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <GlobalContextProvider>
    <App />
  </GlobalContextProvider>
)
