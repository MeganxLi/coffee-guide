import { useState } from 'react'
import { ResetStyles } from './styled/base/Reset'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={ResetStyles}>
    </div>
  )
}

export default App
