const { ipcRenderer } = require('electron');


window.onload = () => {
  window.addEventListener('contextmenu', (e) => {
    ipcRenderer.send('showContextmenu', 'showContextmenu')
  }, false)
}