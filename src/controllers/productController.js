const jsonDB = require('../model/jsonProductsDataBase');
const productModel = jsonDB('productsDataBase');

const productController = {
    prodDetail: (req,res) =>{
        let productC = productModel.find(req.params.productId)
        return res.render("products/productDetail",{ product: productC })    
    },
    
    list: (req,res) => {
        const productList = productModel.readFile();
        return res.render('products/productList', { productList })
    },

    create: (req,res) => {
        return res.render("products/productCreate")
    },

    store: (req,res)=>{
        console.log('Entrando a Store del product Controller');
        console.log(req.file);
        console.log('Aca van las imagenes secundarias: ')
        console.log(req.files); 
        return res.send("Subidas"); 
    },
    
    edition: (req,res) => {
        let product=productModel.find(req.params.id);

        return res.render("products/productEdition", {product})
    },
    prodEdition: (req,res)=>{
      let products= productModel.find(req.params.id)
       let productBody={
           id: req.params.id,
           name: req.body.name ,
           price:req.body.price ,
           description: req.body.description ,
           img: products.img,
           category:products.category,
           colours: products.colours,
           sizes: products.sizes,
           stars: products.stars,
       };
     
       productModel.update(productBody);
       res.redirect("/products")
    },
    filter: (req,res)=>{ 
        const query = req.query; 
        const aFiltrar = Object.values(query);
        let filtrado;
        if (Object.keys(query)[0].indexOf('styles') == 0 ){ 
            filtrado = productModel.filterFroStyle(aFiltrar);
        }else{
            filtrado = productModel.filterForCategorys(aFiltrar);
        }
        return res.render('products/productfilter',{productList: filtrado, Filtros: aFiltrar});
    },
    cambio: function(req,res){
        
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
