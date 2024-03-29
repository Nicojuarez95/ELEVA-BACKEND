import Shop from '../../models/Shop.js'

const controller = {
    get_one: async(req,res,next) => {
        try{
            let shop = await Shop.findOne({ shopName: req.params.shopName })
            if(shop){
                return res.status(200).json({
                    success: true,
                    shop
                })
            }else{
                return res.status(404).json({
                    success: false,
                    message: 'Tienda no encontrada',
                })
            }
        }catch(err){
            next(err)
        }
    }
}

export default controller