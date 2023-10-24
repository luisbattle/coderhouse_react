import { useState } from "react"
import { Link } from 'react-router-dom'
import Cart from "../Cart/Cart";
import './CartWidget.css'
import { Bag } from 'react-bootstrap-icons';

export default function CartWidget() {
    const [cartWidget, setCartWidget] = useState(0)

    return (
        <div className="CartWidget">
            <Link to={'/cart'}>
                <Bag size={20} /> <span>{cartWidget}</span>
            </Link>
        </div>
    )
}
