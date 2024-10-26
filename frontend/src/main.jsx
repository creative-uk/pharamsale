import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import { persistor, store } from './redux/Store.jsx'
import { PersistGate } from 'redux-persist/integration/react'

import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

    <App />

    </PersistGate>


    </Provider>
  </StrictMode>,
)