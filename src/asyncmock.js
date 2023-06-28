const misProductos = [
    { id:"1", nombre: "Remera Heavy Squats", precio: 6000, img: "../img/remerahs.jpg", idCat: "2" },
    { id:"2", nombre: "Remera Logo", precio: 6000, img: "../img/remeralogo.jpg", idCat: "2" },
    { id:"3", nombre: "Remera Weightlifting Blanca", precio: 6000, img: "../img/remerawblanca.jpg", idCat: "3" },
    { id:"4", nombre: "Remera C&J", precio: 6000, img: "../img/remerac&j.jpg", idCat: "3" },
]


export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const producto = misProductos.find(prod=> prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise ( resolve => {
        setTimeout( () => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100 )
    })
}