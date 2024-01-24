import Joi from "joi-oid"

const schema = Joi.object({
    name: Joi
        .string()
        .required()
        .min(3)
        .messages(
            {
                'string.min': 'El nombre debe tener al menos 3 caracteres.',
                'string.empty': 'El nombre no puede estar vacío.',
                'any.required': 'Se requiere un nombre'
            }
        ),
    category: Joi
        .string()
        .required()
        .min(3)
        .messages(
            {
                "string.min": "La categoría debe tener al menos 3 caracteres.",
                'string.empty': 'La categoría no puede estar vacía',
                'any.required': 'Se requiere una categoría'
            }
        ),
    city: Joi
        .string()
        .required()
        .min(3)
        .messages(
            {
                'string.min': 'La ciudad debe tener al menos 3 caracteres.',
                'string.empty': 'La ciudad no puede estar vacía',
                'any.required': 'Se requiere una ciudad',
            }
        ),
    province: Joi
        .string()
        .required()
        .min(3)
        .messages(
            {
                'string.min': 'La provincia debe tener al menos 3 caracteres.',
                'string.empty': 'La provincia no puede estar vacía',
                'any.required': 'Se requiere una provincia',
            }
        ),
    description: Joi
        .string()
        .required()
        .min(8)
        .max(50)
        .messages(
            {
            "string.min": "La descripción debe tener al menos 8 caracteres.",
            "string.max": "La descripción debe tener un máximo de 50 caracteres.",
            'string.empty': 'La descripción no puede estar vacía.',
            'any.required': 'Se requiere una descripción'
            }
        ),
    token: Joi
        .string()
        .required()
        .min(10)
        .max(200)
        .messages(
            {
                'string.min': 'El token debe tener al menos 10 caracteres.',
                'string.max': 'El token no puede exceder los 200 caracteres.',
                'string.empty': 'El token no puede estar vacío',
                'any.required': 'Se requiere un token de Mercado Pago',
            }
        ),
    photo: Joi
        .string()
        .required()
        .min(8)
        .uri()
        .messages(
            {
            'string.min': 'La foto debe tener al menos 8 caracteres.',
            'string.empty': 'La foto no puede estar vacía.',
            'any.required': 'Se requiere una foto',
            'string.uri': 'Es necesaria una URL válida'
            }
        ),
    phone : Joi
        .string()
        .pattern(/^\d{12}$/)
        .required()
        .messages(
            {
                'string.empty': 'El teléfono no puede estar vacío',
                'any.required': 'Se requiere un teléfono',
            }
        ),
    banner: Joi
        .string()
        .required()
        .min(8)
        .uri()
        .messages(
            {
                'string.min': 'El banner debe tener al menos 8 caracteres.',
                'string.empty': 'El banner no puede estar vacío',
                'any.required': 'Se requiere un banner',
                'string.uri': 'Se necesita una URL válida'
            }
        )
})

export default schema