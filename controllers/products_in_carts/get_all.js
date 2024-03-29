import Shop from '../../models/Shop.js'
import Product_in_carts from '../../models/Product_in_carts.js'

async function get_all(req, res, next) {
    try{
        let shop = await Shop.findOne({ shopName: req.params.shopName })
        if(shop){
            let products = await Product_in_carts.find({ store_id: shop._id, user_id: req.user._id })
            if(products){
                return res.status(200).json({
                    success: true,
                    products
                })
            }else{
                return res.status(404).json({
                    success: false,
                    message: 'Producto no encontrado'
                })
            }
        }else{
            return res.status(404).json({
                success: false,
                message: 'Tienda no encontrada'
            })
        }
    }catch(err){
        next(err)
    }
}

export default get_all