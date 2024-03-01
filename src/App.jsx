import Header from './assets/components/header/Header.jsx'
import Base from './assets/components/base/Base.jsx'
import Card from './assets/components/card/Card.jsx'
import { useState } from 'react'
import Modal from './assets/components/modal/Modal.jsx'
import ProductDetails from './assets/components/product-details/ProductDetails.jsx'
import Footer from './assets/components/footer/Footer.jsx'

function App() {
  const [count,setCount]=useState(1);
  const[darkBgCard]=useState(false)
  const[showModal,setShowModal]=useState(false)
  const [isShow,setShow]=useState(false);

  const handlElementShow=() =>{
    setShow((current) => !current)
}

console.log({count}.count)



  return (
    <>
       <Header />
       <Base>
       </Base>
       <div className="slides-show">
       <Card darkBgCard={darkBgCard} setShowModal={setShowModal} />
       <Modal
    setShowModal={setShowModal}
    showModal={showModal}
    >
<ProductDetails count={{count}.count} setCount={setCount} setShowModal={setShowModal} handlElementShow={handlElementShow} isShow={isShow} setShow={setShow}>
  <h1 style={{"color":"#454545"}}>
    BLAZER-BEIGE-NOTCH LAPEL 
    EGP0.00
</h1>
<ul>
<li><strong>CHECKED GREEN OCCASION BLAZER</strong></li>
<li><strong>NOTCH LAPEL/WIDTH = 8.5 C.M</strong></li>
<li><strong>SINGLE BREASTED BLAZER WITH TWO BUTTONS</strong></li>
<li><strong>WELT POCKET WITH TWO FLAP POCKETS&nbsp;</strong></li>
<li><strong> FABRIC = WOOL</strong></li>
<li><strong>ITALIAN WOOL</strong></li>
</ul>
</ProductDetails>
    </Modal><Card darkBgCard={darkBgCard} setShowModal={setShowModal} />
       <Modal
    setShowModal={setShowModal}
    showModal={showModal}
    >
<ProductDetails count={{count}.count} setCount={setCount} setShowModal={setShowModal} handlElementShow={handlElementShow} isShow={isShow} setShow={setShow}>
  <h1 style={{"color":"#454545"}}>
    BLAZER-BEIGE-NOTCH LAPEL 
    EGP0.00
</h1>
<ul>
<li><strong>CHECKED GREEN OCCASION BLAZER</strong></li>
<li><strong>NOTCH LAPEL/WIDTH = 8.5 C.M</strong></li>
<li><strong>SINGLE BREASTED BLAZER WITH TWO BUTTONS</strong></li>
<li><strong>WELT POCKET WITH TWO FLAP POCKETS&nbsp;</strong></li>
<li><strong> FABRIC = WOOL</strong></li>
<li><strong>ITALIAN WOOL</strong></li>
</ul>
</ProductDetails>
    </Modal><Card darkBgCard={darkBgCard} setShowModal={setShowModal} />
       <Modal
    setShowModal={setShowModal}
    showModal={showModal}
    >
<ProductDetails count={{count}.count} setCount={setCount} setShowModal={setShowModal} handlElementShow={handlElementShow} isShow={isShow} setShow={setShow}>
  <h1 style={{"color":"#454545"}}>
    BLAZER-BEIGE-NOTCH LAPEL 
    EGP0.00
</h1>
<ul>
<li><strong>CHECKED GREEN OCCASION BLAZER</strong></li>
<li><strong>NOTCH LAPEL/WIDTH = 8.5 C.M</strong></li>
<li><strong>SINGLE BREASTED BLAZER WITH TWO BUTTONS</strong></li>
<li><strong>WELT POCKET WITH TWO FLAP POCKETS&nbsp;</strong></li>
<li><strong> FABRIC = WOOL</strong></li>
<li><strong>ITALIAN WOOL</strong></li>
</ul>
</ProductDetails>
    </Modal>
    </div>

    <Footer/>
    </>
  )
}

export default App
