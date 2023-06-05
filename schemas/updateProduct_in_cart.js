import Joi from "joi-oid";

const schema = Joi.object({
    quantity: Joi
        .number()
        .required()
        .min(1)
        .messages({
            'number.min': 'La cantidad debe tener al menos 1 carácter',
            'number.empty': 'La cantidad no puede estar vacía',
            'any.required': 'Se requiere una cantidad',
        }),
})

export default schema;