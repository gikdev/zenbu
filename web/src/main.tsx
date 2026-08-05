import { createRoot } from 'react-dom/client'

import { App } from './App'

const TARGET = '#root'

const targetElement = document.querySelector(TARGET)
if (targetElement == null) throw new Error(`The element '${TARGET}' was not found!`)

const root = createRoot(targetElement)

root.render(<App />)
