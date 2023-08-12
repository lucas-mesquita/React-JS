import { Button } from 'react-bootstrap'
import cart from './assets/cart.svg'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

const CartWidget = () => {
const {totalQuantity} = useContext(CartContext)
return (
    <Button className='navbar-nav' href={`#/cart`}>
        <img src={cart} alt='cart-widget' height={'30px'} ></img>
        {totalQuantity()}
    </Button>
)
}
export default CartWidget