
import cart from './assets/carrito.svg'
export const CartWidget = ({ cantCart }) => {
  return (
    <>
      <img src={cart} alt="cart-widget" />
      <p>{cantCart}</p>
    </>

  )
}
