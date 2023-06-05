import Shop from '../../models/Shop.js'

async function desactivate(req, res, next) {
    try {
        let shop = await Shop.findOne({ _id: req.params.shopid })
        if (shop) {
            if (shop.active) {
                await Shop.findOneAndUpdate(
                    { _id: req.params.shopid },
                    { active: false },
                    { new: true }
                )
                return res.status(200).json({
                    success: true,
                    message: 'Tienda desactivada'
                })
            } else {
                await Shop.findOneAndUpdate(
                    { _id: req.params.shopid },
                    { active: true },
                    { new: true }
                )
                return res.status(200).json({
                    success: true,
                    message: 'Tienda activada'
                })
            }
        } else {
            return res.status(404).json({
                success: false,
                message: 'Tienda no encontrada'
            })
        }
    } catch (err) {
        next(err)
    }
}

export default desactivate