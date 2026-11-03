(() => {
  const editable = destino => destino instanceof Element && !!destino.closest('input, textarea, [contenteditable]:not([contenteditable="false"])')
  document.addEventListener('contextmenu', evento => {
    if (!editable(evento.target)) evento.preventDefault()
  }, { capture: true })
  document.addEventListener('selectstart', evento => {
    if (!editable(evento.target)) evento.preventDefault()
  }, { capture: true })
  document.addEventListener('dragstart', evento => {
    if (!editable(evento.target)) evento.preventDefault()
  }, { capture: true })
  document.addEventListener('copy', evento => {
    if (!editable(evento.target)) evento.preventDefault()
  }, { capture: true })
  document.addEventListener('keydown', evento => {
    const tecla = evento.key.toLowerCase()
    const control = evento.ctrlKey || evento.metaKey
    const inspeccion = tecla === 'f12'
      || (control && evento.shiftKey && ['i', 'j', 'c', 'k'].includes(tecla))
      || (evento.metaKey && evento.altKey && ['i', 'j', 'c', 'u'].includes(tecla))
      || (control && ['u', 's'].includes(tecla))
    const seleccion = control && tecla === 'a' && !editable(evento.target)
    if (inspeccion || seleccion) {
      evento.preventDefault()
      evento.stopImmediatePropagation()
    }
  }, { capture: true })
})()

