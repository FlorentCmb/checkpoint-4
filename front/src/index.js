// Librairies
import React from 'react'
import ReactDOM from 'react-dom'
// Components
import App from './App'
// Styles
import './index.css'
// Others
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.register()
