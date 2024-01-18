import Shop from "../../models/Shop.js";
import User from "../../models/User.js";

const controller = {
  create: async (req, res, next) => {
    const { user } = req;
    req.body.user_id = user._id;
    req.body.active = true;
    req.body.shopName = req.body.name.replace(/\s+/g, '').toLowerCase()
    try {
      await Shop.create(req.body);
      await User.findOneAndUpdate({ _id: user._id }, { is_seller: true });
      return res.status(201).json({
        success: true,
        message: "Nueva tienda creada con éxito",
        data: req.body,
      });
    } catch (error) {
      next(error);
    }
  },
};

export default controller;
