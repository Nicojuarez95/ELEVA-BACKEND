import Product_in_carts from '../../models/Product_in_carts.js'
import Shop from "../../models/Shop.js"

const controller = {
    createCartProduct: async(req, res, next) =>{
        try{
            let shop = await Shop.findOne({shopName: req.params.shopName})
            req.body.store_id= shop._id
            req.body.user_id = req.user._id

            await Product_in_carts.create(req.body)
            return res.status(201).json({
                success: true,
                message: "Nuevo producto agregado al carrito",
                data: req.body
            })
        }catch(error){
            next(error)
        }
    }
}


export default controller