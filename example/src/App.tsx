import React from 'react'
import { Spinning } from '@daaveuk/react-spinning'
import '@daaveuk/react-spinning/dist/index.css'

const App = () => {
  return (
    <div>
      <Spinning>
        <button>Spin me around.</button>
      </Spinning>
    </div>
  )
}

export default App
