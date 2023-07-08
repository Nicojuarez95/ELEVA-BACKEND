import express from 'express'
import paymentRouter from '../routes/payment.js'
import userRouter from '../routes/users.js'
import shopsRouter from '../routes/shops.js'
import productsRouter from "../routes/products.js"
import favouritesRouter from '../routes/favourites.js';
import adminRouter from '../routes/admin.js'
import categoryRouter from "../routes/categories.js"

let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {res.render('index', { title: 'Express' });});

router.use('/auth',userRouter)
router.use('/shop', shopsRouter)
router.use('/payment', paymentRouter)
router.use('/product', productsRouter)
router.use('/favourites', favouritesRouter);
router.use('/admin', adminRouter)
router.use('/categories', categoryRouter);

export default router

