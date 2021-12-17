const fs = require('fs');
const path = require('path');

const modelController =function(name){ 
    console.log('entre al model de products'); 
    return {
        tablePath: path.resolve(__dirname,`../data/${name}.json`),

        readFile: function(){
            const contenido = fs.readFileSync(this.tablePath,'utf-8');
            const tabla = JSON.parse(contenido);
            return (tabla.length > 0 ? tabla : []);
        },

        writeFile: function(contenidos){
            let products = JSON.stringify(contenidos, null, ' '); 
            fs.writeFileSync(this.tablePath, products);
        }, 

        nextID: function(){
            const products = this.readFile(); 
            let UltimoID = products.length; 
            return (UltimoID ? ++UltimoID : 1);
        }, 

        all: function(){
            return this.readFile();
        },

        find: function(id){ 
            const products = this.readFile(); 
            const product = products.find( prod => prod.id == id );
        }, 

        create: function(product){
            let products = this.readFile(); 
            product.id = this.nextID(); 
            products.push(products); 
            this.writeFile(products); 
            return product.id;
        }, 

        update: function(product){
            let products = this.readFile(); 
            let update = products.map(prod=>{
                (prod.id == product.id ? product : prod);  
            });
            this.writeFile(update);
            return product.id; 
        },

        delete: function (id) {
            let products = this.readFile();
            let updated = products.filter(product => product.id != id);
            this.writeFile(updated); // lo guardo 
        },

        filterForCategorys: function(categorys){ 
            let products = this.readFile();
            let filtered = products.filter(p => {
                let entra = false 
                for(let i=0; !entra & i < categorys.length;i++) entra = p.category == categorys[i];
                return entra;
            });
            return filtered; 
        }
        // // Busca por field al primer elemento de la DB que cumpla con las condiciones de la busqueda, devuelve 1 elemento
        // findFirstByField: function(field, text){
        //     let rows = this.all();
        //     let elementFound = rows.find(element => element[field] === text);
        //     return elementFound;
        // },
        // // Busca por field a todos los elementos de la DB que cumplan con las condiciones de la busqueda, devuelve 1 array
        // findAllByField: function(field, text){
        //     let rows = this.all();
        //     let allElementsFound = rows.filter(element => element[field] === text);
        //     return allElementsFound;
        // },


    };
};

module.exports = modelController;