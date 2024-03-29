import Shop from '../../models/Shop.js'
import Product from '../../models/Product.js'
import User from '../../models/User.js'
import Favourite from '../../models/Favourites.js'
import Category from '../../models/category.js'

async function deleteShop(req, res, next) {
    try {
        let shop = await Shop.findOneAndDelete({ shopName: req.params.shopName })
        if (shop) {
            await Category.deleteMany({store_id: shop._id})
            await Favourite.deleteMany({store_id: shop._id})
            await Product.deleteMany({ store_id: shop._id })
            await User.findOneAndUpdate(
                { _id: req.params.userid },
                { is_seller: false },
                { new: true }
            )
            return res.status(200).json({
                success: true,
                message: 'Tienda eliminada'
            })
        }
        return res.status(404).json({
            success: false,
            message: 'Tienda no encontrada'
        })
    } catch (err) {
        next(err)
    }
}

export default deleteShop