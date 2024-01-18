import Shop from '../../models/Shop.js'

async function nameExists(req, res, next) {

    try {
        const shop = await Shop.findOne({ name: req.body.name })

        if (shop) {
            return res.status(400).json({
                success: false,
                message: 'Ese nombre ya está utilizado'
            })
        }
        next()

    } catch (error) {
        next(error)
    }

}

export default nameExists