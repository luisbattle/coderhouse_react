import { createContext, useContext, useState } from "react"

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        const existInCart = cart.filter((product) => product.id == item.id)

        // Item exist in Cart
        if (existInCart.length > 0) {
            // producto existe en mi carrito lo actualizo con la nueva cantidad
            cart.map((product) => {
                if (product.id == existInCart[0].id) {
                    product.quantity = product.quantity + quantity
                }
            })
            setCart(cart)

        } else {
            setCart(prevState => [...prevState, { ...item, quantity }])
        }
    }

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (productId) => {
        const newCart = cart.filter((item) => item.id != productId)
        setCart(newCart)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, clearCart, removeItem }} >
            {children}
        </CartContext.Provider>
    )
}