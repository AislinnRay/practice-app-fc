module.exports = {
// GET = get (cannot pass back a body)
// POST = create/add (can pass a body)
// Delete = delete (cannot pass back a body)
// PUT = edit/update (can pass a body)
    getProduct: (req, res) => {
        const db = req.app.get('db')
        db.get_product
    },
    getProducts: (req, res) => {},
    postProduct: (req, res) => {},
    putProduct: (req, res) => {},
    deleteProduct: (req, res) => {}
}
