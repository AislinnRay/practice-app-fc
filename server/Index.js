require('dotenv').config()
const express = require('express')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const app = express()

//Controllers
const productCtrl = require('./controllers/productController')

//Middleware
app.use(express.json())
 
//Database Connection
massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }, // ssl = secure sockets layer
})
    .then(db => {
    app.set('db', db) //order of 'db' and db matters
    console.log('Database Connected')
    app.listen(SERVER_PORT, () => console.log(`Server listening on ${SERVER_PORT}`)
    )
}) 
.catch((err) => console.log(err))

//Endpoints
	// GET = get (cannot pass back a body)
	// POST = create/add (can pass a body)
	// Delete = delete (cannot pass back a body)
    // PUT = edit/update (can pass a body)
app.get("/api/product/:product_id", productCtrl.getProduct)
app.get("/api/products", productCtrl.getProducts)
app.post("/api/product", productCtrl.postProduct) //postProduct is matching the name of the post_product file
app.put("/api/product/:product_id", productCtrl.putProduct)
app.delete("/api/product/:product_id", productCtrl.deleteProduct)


 
