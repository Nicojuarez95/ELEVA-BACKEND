import mercadopago from 'mercadopago'
import express from 'express'
import cors from "cors";
import createController from '../controllers/payments/create.js'
import passport from '../middlewares/passport.js';
import alreadyExists from '../middlewares/payments/alreadyExists.js'

let router = express.Router();

const { create } = createController

//mercadopago
router.post("/",cors(), async (req, res) => {
  mercadopago.configure({access_token: req.body.token})

  const { address, city, postalCode } = req.body.shippingData;

  const items = await Promise.all(
    req.body.products.map(async (item) => {
      return {
        id: item.id,
        title: `${item.title} - Dirección: "${address}", Ciudad: "${city}", Código postal: "${postalCode}" `, // Incluye la información de dirección en el título
        currency_id: 'ARS',
        unit_price: item.unit_price,
        picture_url: item.photo,
        quantity: item.quantity,
      };
    })
  );
    let preference = {
      items,
      back_urls: {
        success: `http://localhost:3000/shop/${req.body.shopName}`,
        failure: "",
        pending: "",
      },
      auto_return: "approved",
      binary_mode: true,
    };
    mercadopago.preferences
      .create(preference)
      .then((response) => res.status(200).json({ response }))
      .catch((error) => res.status(400).json({ error: error.message }));
  });

  router.post('/:shopName', passport.authenticate("jwt", { session:false }), alreadyExists, create )
  
  export default router;