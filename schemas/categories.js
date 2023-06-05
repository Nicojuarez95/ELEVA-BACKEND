import Joi from "joi-oid"

const schema = Joi.object({
    category_name: Joi
    .string()
    .required()
    .messages({
        "string.min": "La categoría debe tener al menos 3 caracteres",
        "string.max": "La categoría debe tener un máximo de 20 caracteres",
        'string.empty': 'La categoría no puede estar vacía',
        'any.required': 'Se requiere una categoría'
    }),
})

export default schema;