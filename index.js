const express = require('express')
 const bodyParser = require('body-parser')
 const { request } = require('express')
 const mongoose = require('mongoose')
 
 
 /**
  *product
  * import the schema
  */
   const Product = require('./models/product')
 
 
 /**
  * server  
  */
  const app = express()
  const port = process.env.PORT || 9000
 
  /**
   * middlewares
   */
  app.use(bodyParser.urlencoded({extended: false }))
  app.use(bodyParser.json())
 
   /**
  *routes (petitions) 
  
app.get(`/home/:name`, (req, res) =>{
   // res.send( { message: 'Welcome to API Rest' } )
   res.send( { message: `Welcome ${req.params.name} to API Rest` } )
})
*/
/**
 * API Reset
 * routes endspoints 
 */
app.get('/api/product', (req, res) => {
    res.send(200, {products: []})
})
 
app.get('/api/product/:productID',(req ,res)=>{
 
})
 
app.post('/api/product', (req,res) => {
   /* console.log(req.body)
 
    res.status(200).send( {message: 'Product ok'} )
    res.status(404).send( {message: 'Product does not exist'} )  */
 
    /** use schema and register product in the data base */
    //console.log('POST/api/product')
    //console.log(req.body)

    console.log('POS /api/product')
    console.log(req.body)
    
    let product = new Product()
 
    product.name = req.body.name
    product.price = req.body.price
    product.category = req.body.category
    product.image = req.body.image
 
    product.save( (err, productStored) => { 
        if(err) res.status(500).send ( {message: `save error: ${err}`} )
 
        res.status(200).send( {product: productStored} )
    })
})
 
app.put('/api/product/:productID',(req ,res) =>{
})
 
app.delete('/api/product/:productID',(req, res) =>{
 
})
  /**
   * server connect
   */
  mongoose.connect('mongodb://localhost:27017/produtsyc',(err, res) => {
    if(err) throw err
    console.log('Database connection ok ')
})
   const server = app.listen( port, () =>{
       console.log( `Listening http://localhost:${server.address().port}`)
   } )