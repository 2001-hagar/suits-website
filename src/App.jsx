import Header from './assets/components/header/Header.jsx'
import Base from './assets/components/base/Base.jsx'
import Card from './assets/components/card/Card.jsx'
import { useState } from 'react'

function App() {
  const[darkBgCard]=useState(false)
  return (
    <>
       <Header />
       <Base>
       </Base>
       <Card darkBgCard={darkBgCard} />
    </>
  )
}

export default App
