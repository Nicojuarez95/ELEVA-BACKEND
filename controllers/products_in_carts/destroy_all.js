import Product_in_carts from '../../models/Product_in_carts.js'

async function destroy_all(req, res, next) {
    try {
        let product = await Product_in_carts.deleteMany({ store_id: req.params.id, user_id: req.user._id })
        if (product) {
            return res.status(200).json({
                success: true,
                message: 'Productos eliminados con éxito'
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'Producto no encontrado'
            })
        }
    } catch (err) {
        next(err)
    }
}

export default destroy_all