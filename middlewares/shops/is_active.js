import Shop from '../../models/Shop.js'

async function is_active(req, res, next) {
    const shop = await Shop.findOne({ shopName: req.params.shopName })
    if (shop) {
        if (shop.active) {
            next()
        } else {
            return res.status(400).json({
                success: false,
                message: 'La tienda no esta activa'
            })
        }
    } else {
        return res.status(404).json({
            success: false,
            message: 'Tienda no encontrada'
        })
    }
}

export default is_active