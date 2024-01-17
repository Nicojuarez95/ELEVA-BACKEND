import Joi from "joi-oid";

const schema = Joi.object({
    email: Joi
        .string()
        .required()
        .min(8)
        .email({ minDomainSegments: 2 })
        .messages({
            "string.min": "El correo electrónico debe tener al menos 8 caracteres.",
            'string.empty': 'El correo electrónico no puede estar vacío.',
            'any.required': 'Se requiere un correo electrónico',
        }),
    password: Joi
        .string()
        .required()
        .min(20)
        .max(35),
});

export default schema;