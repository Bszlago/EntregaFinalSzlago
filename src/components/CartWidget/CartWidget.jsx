import './CartWidget.css'

const CartWidget = () => {

    const imgCarrito = "https://www.pngall.com/wp-content/uploads/5/Shopping-Cart-PNG-Free-Image.png"
  return (
    <div>
        <img className='imgCarrito' src={imgCarrito} alt="Carrito"/>
        <strong> 10 </strong>
    </div>
  )
}

export default CartWidget