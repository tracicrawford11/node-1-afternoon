const express = require ('express')
const app = express ()
const port = 3001
//const products = require ('../products.json')
const getProducts = require ('./getProducts')
const getProduct = require ('./getProduct')


app.get('/api/products', getProducts, (req, res) => {
    res.status(200).send(products)

app.get('/api/product/:id', getProduct, (req, res) => {
    res.status(200).send(product)
})
})

app.listen(3001, () => {
    console.log (`Server listening on port: ${port}`)
})