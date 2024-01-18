import Shop from '../../models/Shop.js';
import Product_in_carts from '../../models/Product_in_carts.js';

async function alreadyExists(req, res, next) {
    try {
        const shop = await Shop.findOne({ shopName: req.params.shopName });

        if (!shop) {
            return res.status(404).json({
                success: false,
                message: "Tienda no encontrada"
            });
        }

        const title = req.body.title;
        const user_id = req.user._id;
        
        const existingProduct = await Product_in_carts.findOne({
            title,
            store_id: shop._id,
            user_id
        });

        if (existingProduct) {

            let quantity = existingProduct.quantity + req.body.quantity;

            const updatedProduct = await Product_in_carts.findOneAndUpdate(
                { _id: existingProduct._id },
                { quantity },
                { new: true }
            );

            return res.status(200).json({
                success: true,
                message: "El producto ya existe en tu carrito, se agrega la cantidad",
                data: updatedProduct
            });
        } else {
            next();
        }
    } catch (error) {
        next(error);
    }
}

export default alreadyExists;