import { useState } from 'react'
import './App.scss'
import Wrapper from './components/Wrapper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='main'>
        <h1 className='main__title'>TooDoo</h1>
        <Wrapper />
      </main>
    </>
  )
}

export default App
