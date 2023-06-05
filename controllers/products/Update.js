import Product from "../../models/Product.js"

const controller = {
    update: async (req, res, next) => {
      try {
        const product = await Product.findOneAndUpdate(
          { _id: req.params.id },
          req.body,
          { new: true }
        );
            if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
            }
            res.status(200).json({ success: true, message: "Producto actualizado", product});
      } catch (error) {
            res.status(500).send({ message: 'Error al actualizar el producto' });
      }
    },
  };
  
  export default controller;