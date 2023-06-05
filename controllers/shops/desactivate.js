import Shop from '../../models/Shop.js'

const controller = {
    desactivate: async (req, res, next) => {
        try {
            let state = false
            if (req.body.state) {
                state = req.body.state
            }

            let shop = await Shop.findOneAndUpdate(
                { user_id: req.user._id },
                { active: state },
                { new: true }
            )
            if (shop) {
                if (state) {
                    return res.status(200).json({
                        success: true,
                        message: 'Tienda activada'
                    })
                } else {
                    return res.status(200).json({
                        success: true,
                        message: 'Tienda desactivada'
                    })
                }
            }
            return res.status(404).json({
                success: false,
                message: 'Tienda no encontrada'
            })
        } catch (err) {
            next(err)
        }
    }
}

export default controller