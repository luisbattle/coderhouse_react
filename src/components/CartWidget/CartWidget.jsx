import { useContext, useState } from "react"
import { Link } from 'react-router-dom'
import Cart from "../Cart/Cart";
import './CartWidget.css'
import { Bag } from 'react-bootstrap-icons';
import { CartContext } from "../../context/CartContext";

export default function CartWidget() {
    // const [cartWidget, setCartWidget] = useState(0)
    const { cart } = useContext(CartContext)
    return (
        <div className="CartWidget">
            <Link to={'/cart'}>
                <Bag size={20} /> <span>{cart.length}</span>
            </Link>
        </div>
    )
}
