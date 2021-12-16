let listaProducts = [
    {
        id:1,
        nombre:'Remera blanca con estampado',
        precio: '100.000',
        descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi nemo ipsa amet quaerat sed rem veritatis, cumque eaque natus aperiam, perferendis quibusdam neque harum itaque consequuntur dicta a voluptate maxime',
        img: 'img-ropa.jpeg',
        categoria: 'ropa',
        colores: ['red','black','olive','blue','goldenrod'],
        talles: ['XS','S','M','L','XL'],
        puntos: 3
    },
    {
        id:2,
        nombre:'Remera blanca con estampado',
        precio: '100.000',
        descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi nemo ipsa amet quaerat sed rem veritatis, cumque eaque natus aperiam, perferendis quibusdam neque harum itaque consequuntur dicta a voluptate maxime',
        img: 'img-ropa.jpeg',
        categoria: 'ropa',
        colores: ['red','black','olive','blue','goldenrod'],
        talles: ['XS','S','M','L','XL'],
        puntos: 2
    },
    {
        id:3,
        nombre:'Remera blanca con estampado',
        precio: '100.000',
        descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi nemo ipsa amet quaerat sed rem veritatis, cumque eaque natus aperiam, perferendis quibusdam neque harum itaque consequuntur dicta a voluptate maxime',
        img: 'img-ropa.jpeg',
        categoria: 'ropa',
        colores: ['red','black','olive','blue','goldenrod'],
        talles: ['XS','S','M','L','XL'],
        puntos: 1
    },
    {
        id:4,
        nombre:'Remera blanca con estampado',
        precio: '100.000',
        descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi nemo ipsa amet quaerat sed rem veritatis, cumque eaque natus aperiam, perferendis quibusdam neque harum itaque consequuntur dicta a voluptate maxime',
        img: 'img-ropa.jpeg',
        categoria: 'ropa',
        colores: ['red','black','olive','blue','goldenrod'],
        talles: ['XS','S','M','L','XL'],
        puntos: 0
    },
    {
        id:5,
        nombre:'Remera blanca con estampado',
        precio: '100.000',
        descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi nemo ipsa amet quaerat sed rem veritatis, cumque eaque natus aperiam, perferendis quibusdam neque harum itaque consequuntur dicta a voluptate maxime',
        img: 'img-ropa.jpeg',
        categoria: 'ropa',
        colores: ['red','black','olive','blue','goldenrod'],
        talles: ['XS','S','M','L','XL'],
        puntos: 5
    },
    {
        id:6,
        nombre:'Remera blanca con estampado',
        precio: '100.000',
        descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi nemo ipsa amet quaerat sed rem veritatis, cumque eaque natus aperiam, perferendis quibusdam neque harum itaque consequuntur dicta a voluptate maxime',
        img: 'img-ropa.jpeg',
        categoria: 'ropa',
        colores: ['red','black','olive','blue','goldenrod'],
        talles: ['XS','S','M','L','XL'],
        puntos:4
    }
]

const productController = {
    prodDetail: (req,res) =>{
        let productC = listaProducts.find(product => product.id == req.params.productId)
        return res.render("products/productDetail",{ product: productC })
    },
    
    list: (req,res) => {
        return res.render("products/productList", {productList : listaProducts})
    },

    create: (req,res) => {
        return res.render("products/productCreate")
    },
    
    edition: (req,res) => {
        return res.render("products/productEdition")
    },
    
    prodCart1: function(req,res) {
        return res.render("products/productCart")
    },
    
    prodCart2: function(req,res) {
        return res.render("products/productCart2")
    },
    
    prodCart3: function(req,res) {
        return res.render("products/productCart3")
    },
    
    prodCart4: function(req,res) {
        return res.render("products/productCart4")
    }
}

module.exports = productController;
