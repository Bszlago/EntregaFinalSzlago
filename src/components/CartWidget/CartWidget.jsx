import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css'

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);
  const imgCarrito = "https://www.pngall.com/wp-content/uploads/5/Shopping-Cart-PNG-Free-Image.png"
  return (
    <div>
      <img className='imgCarrito' src={imgCarrito} alt="Carrito" />
        <Link to="/cart">
          {
            cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
          }
        </Link>
    </div>
  )
}

export default CartWidget