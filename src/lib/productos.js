let seed = [
    {
        id: 0,
        nombre: "CAZADORA CROP DENIM TRF BRILLOS - ZARA",
        precio: 59.95,
        descripcion: `Cazadora corta de cuello solapa y manga larga acabada en puño. 
        Bolsillos de plastrón en pecho. Detalle de trabillas en espalda y brillos en forma de tela de araña. 
        Bajo acabado sin costuras. Cierre frontal con botones metálicos`
    },
    {
        id: 1,
        nombre: "VESTIDO LARGO SOFT RIB - ZARA",
        precio: 22.95,
        descripcion: "Vestido largo de escote pico y manga larga"
    },
    {
        id: 2,
        nombre: "LTHR HLD BTS 11 - ZARA",
        precio: 249.00,
        descripcion: `Zapato tipo bota tacón en piel. 
        Detalle de tira con hebilla en el tobillo y en la parte superior de la caña. 
        Tacón ancho. Cierre mediante cremallera lateral. Acabado en punta`
    },
    {
        id: 3,
        nombre: "PACK PULSERAS BRILLOS - ZARA",
        precio: 15.95,
        descripcion: "Pack de pulseras elásticas con aplicación de brillos."
    },
    {
        id: 4,
        nombre: "COLLAR CORDÓN CORAZÓN - ZARA",
        precio: 15.95,
        descripcion: "Collar de cordón con colgante en forma de corazón con aplicación de brillos."
    }
]

let productos = null;

export default function getProductos() {
    // if (productos)
    //     return productos;
    // if (!global._productos) {
    //     productos = seed;
    //     global._productos = productos;
    // } else {
    //     productos = global._productos;
    // }

    // Sólo cargamos valores iniciales una sóla vez
    if (!productos) 
        productos = seed;
    
    return productos;
}

