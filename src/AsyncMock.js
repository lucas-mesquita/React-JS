const products = [
    { id: 1, nombre: "Iphone 23", detalle:"Descripcion del articulo", categoria:`Celular`, precio: 4500, stock:3, img: "https://http2.mlstatic.com/D_Q_NP_877475-MLA46597606008_072021-O.webp" },
    { id: 2, nombre: "Samsung Galaxy S43", detalle:"Descripcion del articulo", categoria:`Celular`, stock:4, precio: 5000, img: "https://tienda.antel.com.uy/razuna/assets/1/D3AA4E20920842F793765E76FD24E6FD/img/7D2F45A370284907B8CF44CDE4E077F6/samsung-a13-3_7D2F45A370284907B8CF44CDE4E077F6.jpg" },
    { id: 3, nombre: "ROG Phone 32", detalle:"Descripcion del articulo", categoria:`Celular`, precio: 5860, stock:6, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK1K1IIQ4I45KOCz2wY2yN3C5-U_Uq1bSOujdgb7ut_XC82pl0K3a7Qtdpm0jllodk-68&usqp=CAU" },
    { id: 4, nombre: "Auricular", detalle:"Descripcion del articulo", categoria:`Auriculares`, precio: 324, stock:8, img: "https://f.fcdn.app/imgs/7aa4cb/amvstore.com.uy/amvsuy/f36e/original/catalogo/5995_5995_1/1920-1200/auriculares-inalambricos-xiaomi-mi-bluetooth-headphones-black-auriculares-inalambricos-xiaomi-mi-bluetooth-headphones-black.jpg" },
    { id: 5, nombre: "Cargador", detalle:"Descripcion del articulo", categoria:`Cargadores`, precio: 300, stock:23, img: "https://f.fcdn.app/imgs/c4d85a/www.covercompany.com.uy/coveuy/e553/original/catalogo/2-3660_9904_2/1500-1500/cargador-de-pared-140w-2-usb-c-usb-a-gan-eu-devia-extreme-speed-blanco.jpg" },
    { id: 6, nombre: "Mouse", detalle:"Descripcion del articulo", categoria:`Mouse`, precio: 580, stock:53, img: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/RWBzhk-Microsoft-Basic-Optical-Mouse-content-placement-Black-Microsoft-Basic-Optical-Mouse:VP1-539x400" }
]

export const getProducts = () => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500);
    })
}

export const getProductsById =(productId)=>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod=>prod.id === productId))
        }, 500);
    })
}

export const getCategories = ()=>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([...new Set(products.map((product) => product.categoria))])
        },200);
    })
}

export const getProductsByCategoryId=(categoryId)=>{
    return new Promise ((resolve)=>{
        setTimeout(() => {
            resolve(products.filter(category=>category.categoria === categoryId))
        }, 500);
    })
}