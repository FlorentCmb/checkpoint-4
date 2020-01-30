// Librairies
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
// Components
import App from './App'
// Styles
import './index.css'
// Others
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))

serviceWorker.register()
