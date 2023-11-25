import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import { store } from './store'
import { Provider } from 'react-redux'

const rootElement = document.getElementById('root')

if (rootElement !== null) {
    const root = createRoot(rootElement)

    root.render(
        <Provider store={store}>
            <App />
        </Provider>
    )
} else {
    console.error('Element with ID "root" not found.')
}


