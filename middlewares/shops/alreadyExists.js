import Shop from '../../models/Shop.js'

async function alreadyExists(req, res, next) {

    try{
        const shop = await Shop.findOne({ user_id: req.user._id })

    if(shop){
        if(shop.active){
            return res.status(400).json({
                success: false,
                message: 'Puedes tener solo una tienda'
            })
        }else{
            await Shop.findOneAndUpdate(
                { _id: shop._id },
                { active: true }
            )
            return res.status(200).json({
                success: true,
                message: "Bienvenido de nuevo "+shop.name
            })
        }
    } else{
        next()
    }

    }catch(error){
        next(error)
    }

}

export default alreadyExists