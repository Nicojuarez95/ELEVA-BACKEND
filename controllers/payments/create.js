import Payment from "../../models/Payment.js";
import Shop from '../../models/Shop.js'
import User from '../../models/User.js'
import createMailTransporterPay from "../../config/mailPayment.js";

const controller = {
    create: async(req,res,next) => {
        try{
            let shop = await Shop.findOne({shopName: req.params.shopName})
            const user = await User.findById(req.user._id);
            req.body.store_id= shop._id
            req.body.user_id = req.user._id
            
            if(shop){
                const payment = await Payment.create(req.body)

                await createMailTransporterPay({
                    email:user.email,
                    storeId: payment.store_id,
                    totalValue: payment.totalValue,
                    products: payment.products
                })

                return res.status(201).json({
                    success: true,
                    message: 'Pago creado'
                })
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
}

export default controller