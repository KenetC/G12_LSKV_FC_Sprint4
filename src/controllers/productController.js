const jsonDB = require('../model/jsonProductsDataBase');
const productModel = jsonDB('productsDataBase');

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
    
    filter: (req,res)=>{ 
        let query = req.query; 
        // Antes que nada lo pasamos a array para mas comodidad: 
        const categs = Object.values(query);

        if(Object.keys(query).length >1 ){
            const final = productModel.filterForCategorys(categs);
            return res.send(final)
        }else { 
            return res.send("Son varios valores")
        }
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
