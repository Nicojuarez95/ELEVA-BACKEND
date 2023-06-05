import Joi from "joi-oid";

const schema = Joi.object({
    name: Joi
        .string()
        .required()
        .min(3)
        .max(20)
        .messages({
            "string.min": "El nombre debe tener al menos 3 caracteres.",
            "string.max": "El nombre debe tener un máximo de 20 caracteres.",
            'string.empty': 'El nombre no puede estar vacío.',
            'any.required': 'Se requiere un nombre'
        }),
    price: Joi
        .number()
        .required()
        .min(1)
        .messages({
            "number.min": "El precio debe ser al menos 1",
            'number.empty': 'El precio no puede estar vacío',
            'any.required': 'Se requiere un precio'
        }),
    photo: Joi
        .string()
        .required()
        .min(8)
        .uri()
        .messages({
            'string.min': 'La foto debe tener al menos 8 caracteres.',
            'string.empty': 'La foto no puede estar vacía.',
            'any.required': 'Se requiere una foto',
            'string.uri': 'Es necesaria una URL válida'
        }),
    stock: Joi
        .number()
        .required()
        .min(0)
        .messages({
            'number.min': 'El stock debe tener al menos 1 caracteres.',
            'number.empty': 'El stock no puede estar vacía',
            'any.required': 'Se requiere un stock',
        }),
    category: Joi
        .string()
        .required()
        .min(3)
        .max(20)
        .messages({
            "string.min": "La categoría debe tener al menos 3 caracteres.",
            "string.max": "La categoría debe tener un máximo de 20 caracteres.",
            'string.empty': 'La categoría no puede estar vacía',
            'any.required': 'Se requiere una categoría'
        }),
    description: Joi
        .string()
        .required()
        .min(20)
        .max(200)
        .messages({
            "string.min": "La descripción debe tener al menos 20 caracteres.",
            "string.max": "La descripción debe tener un máximo de 200 caracteres.",
            'string.empty': 'La descripción no puede estar vacía.',
            'any.required': 'Se requiere una descripción'
        }),
  });
  
  export default schema;