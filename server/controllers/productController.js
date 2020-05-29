module.exports = {
// GET = get (cannot pass back a body)
// POST = create/add (can pass a body)
// Delete = delete (cannot pass back a body)
// PUT = edit/update (can pass a body)
    getProduct: (req, res) => {
        const db = req.app.get('db')
        const { product_id } = req.params
        db.get_product(product_id)
          .then((results) => res.status(200).send(results[0]))
          .catch((err) => res.status(500).send(err))
    },
    getProducts: (req, res) => {
        const db = req.app.get("db")
        db.get_products()
            .then((results) => res.status(200).send(results))
            .catch((err) => res.status(500).send(err))
    },
    postProduct: (req, res) => {
        const db = req.app.get("db")
        const { product_name, product_price, product_image } = req.body
        db.add_product(product_name, product_price, product_image)
            .then(() => res.sendStatus(200))
            .catch((err) => res.status(500).send(err))
    },
    putProduct: (req, res) => {
        const db = req.app.get("db")
        const { product_id } = req.params
        const { product_name, product_price, product_image} = req.body
        db.edit_product(product_id, product_name, product_price, product_image)
            .then(() => res.sendStatus(200))
            .catch((err) => res.status(500).send(err))
    },
    deleteProduct: (req, res) => {
        const db = req.app.get("db")
        const { product_id } = req.params
        db.delete_person(product_id)
            .then(() => res.sendStatus(200))
            .catch((err) => res.status(500).send(err))
    }
}
