import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'

import '@root-axis/design-system';

const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app
