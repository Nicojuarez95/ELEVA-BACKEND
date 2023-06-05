import Joi from "joi-oid";

const schema = Joi.object({
    title: Joi
        .string()
        .required()
        .min(3)
        .max(20)
        .messages({
            "string.min": "El título debe tener al menos 3 caracteres.",
            "string.max": "El título debe tener un máximo de 20 caracteres.",
            'string.empty': 'El título no puede estar vacío.',
            'any.required': 'Se requiere un título'
        }),
    unit_price: Joi
        .number()
        .required()
        .min(1)
        .messages({
            "number.min": "El precio unitario debe ser al menos 1",
            'number.empty': 'El unit_price no puede estar vacío',
            'any.required': 'Se requiere un precio unitario'
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
    quantity: Joi
        .number()
        .required()
        .min(1)
        .messages({
            'number.min': 'La cantidad debe tener al menos 1 carácter',
            'number.empty': 'La cantidad no puede estar vacía',
            'any.required': 'Se requiere una cantidad',
        }),
    maxStock: Joi
        .number()
        .required()
        .min(1)
        .messages({
            'number.min': 'La stock máximo debe tener al menos 1 caracteres.',
            'number.empty': 'La stock máximo no puede estar vacía',
            'any.required': 'Se requiere un stock máximo',
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