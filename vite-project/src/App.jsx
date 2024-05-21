import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Form from './Components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <Card />
        <Form />
      </div>
    </>
  )
}

export default App
