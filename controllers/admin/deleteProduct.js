import Product from '../../models/Product.js'

async function deleteProduct(req, res, next) {
    try {
        let product = await Product.findOneAndDelete({ _id: req.params.productid })
        if (product) {
            return res.status(200).json({
                success: true,
                message: 'Producto eliminado'
            })
        }
        return res.status(404).json({
            success: false,
            message: 'Producto no encontrado'
        })
    } catch (err) {
        next(err)
    }
}

export default deleteProduct