const products = [
    {
        id: 1,
        name: "Zapatillas Running",
        brand: "Nike",
        category: "deportes",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_912031-MLA54868894284_042023-F.webp",
        detail: "Zapatilla Running,  productos son 100% originales. Hacemos envíos a todos el país por mercado envíos",
        price: "78900"
    },
    {
        id: 2,
        name: "Box Vino Luigi Bosca Sangre Copas Negras Chocolates Kit Set",
        brand: "Luigi Bosca",
        category: "vinos",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_607534-MLA54980566262_042023-F.webp",
        detail: "IDEAL PARA OBSEQUIAR, AGASAJÁ A ALGUIEN ESPECIAL Combo excelente para delimitar, tapar o simplemente decorar tu espacio y darle vida.",
        price: "25000"
    },
    {
        id: 3,
        name: "Playstation 5",
        brand: "Sony",
        category: "tecno",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_903197-MLA52130422147_102022-F.webp",
        detail: "Incluye control, Resolución de 3840px x 2160px.Memoria RAM de 16GB.Cuenta con: 1 dock, 1 cable de alimentación ca, 1 cable hdmi, 1 cable usb, 1 material impreso, 1 voucher de fifa 23 ultimate team ",
        price: "899000"
    },
    {
        id: 4,
        name: "Heladera inverter auto defrost LG LS66SXSC",
        brand: "LG",
        category: "electro",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_618739-MLA69208378265_052023-F.webp",
        detail: "Capacidad de 637 litros.Dimensiones: 912 mm de ancho, 1785 mm de alto y 735 mm de profundidad",
        price: "8500000"
    },
    {
        id: 5,
        name: "Notebook Asus Tuf Gaming A15 Ryzen 7 16gb Ram 512gb",
        brand: "Asus",
        category: "tecno",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_673984-MLA53090150135_122022-F.webp",
        detail: "Procesador AMD Ryzen 7. Memoria RAM de 16GB. Placa de video NVIDIA GeForce RTX 3050. Conexión wifi y bluetooth ",
        price: "550000"
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    const productsByCategory = products.filter((product) => product.category == category)

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productsByCategory)
        }, 500)
    })
}