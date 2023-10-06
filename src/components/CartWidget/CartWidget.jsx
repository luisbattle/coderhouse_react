import { useState } from "react"
import './CartWidget.css'
import { Bag } from 'react-bootstrap-icons';

export default function CartWidget() {
    const [cartWidget, setCartWidget] = useState(0)

    return (
        <div className="CartWidget"><Bag size={20} /> <span>{cartWidget}</span></div>
    )
}
