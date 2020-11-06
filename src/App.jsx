import React from 'react'

export const App = () => {
  const onContextMenu = (event) => {
    event.preventDefault()
  }

  return (
    <div onContextMenu={onContextMenu}>Welcome</div>
  )
}

export default App
