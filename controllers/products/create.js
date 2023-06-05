import Products from "../../models/Product.js"
import Shop from "../../models/Shop.js"

async function create(req, res, next){
    try{
        let shop = await Shop.findOne({user_id: req.user._id})

        req.body.store_id= shop._id

        await Products.create(req.body)
        return res.status(201).json({
            success: true,
            message: "Nuevo producto a la venta",
            data: req.body
        })
    }catch(error){
        next(error)
    }
}

export default create