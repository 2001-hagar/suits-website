import Header from './assets/components/header/Header.jsx'
import Base from './assets/components/base/Base.jsx'
import Card from './assets/components/card/Card.jsx'
import { useState } from 'react'
// import { Col, Container, Row } from 'react-bootstrap'
import Modal from './assets/components/modal/Modal.jsx'
import ProductDetails from './assets/components/product-details/ProductDetails.jsx'
import Footer from './assets/components/footer/Footer.jsx'

function App() {
  const [count,setCount]=useState(1);
  const[darkBgCard]=useState(false)
  const[showModal,setShowModal]=useState(false)
  const [isShow,setShow]=useState(false);
  const [cartItems, setCartItems] = useState(0);


  const increaseCartQuantity = () => {
    setCartItems((cartItems) =>cartItems + 1)
};

  const handlElementShow=() =>{
    setShow((current) => !current)
}





  return (
<> 
       <Header />
       <Base cartItems={cartItems}>
       </Base>


       <div className="slides-show">
       <Card  id="1" increaseCartQuantity={increaseCartQuantity} darkBgCard={darkBgCard} setShowModal={setShowModal} />
       <Card id="2" increaseCartQuantity={increaseCartQuantity} darkBgCard={darkBgCard} setShowModal={setShowModal} />
       <Card id="3" increaseCartQuantity={increaseCartQuantity} darkBgCard={darkBgCard} setShowModal={setShowModal} />

         {/* <Container> 
         <Row >
          {data.map((item) => (
            <Col key={item.id}>
              <Card {...item} darkBgCard={darkBgCard} setShowModal={setShowModal} />
            </Col>
          ))}
         </Row>
         </Container> */}
       <Modal
    setShowModal={setShowModal}
    showModal={showModal}
    >
<ProductDetails setCartItems={setCartItems} count={{count}.count} setCount={setCount} setShowModal={setShowModal} handlElementShow={handlElementShow} isShow={isShow} setShow={setShow}>
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
</ProductDetails >
    </Modal>
    </div>

    <Footer/>

    </>
  )
}

export default App
