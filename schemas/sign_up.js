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
  last_name: Joi
    .string()
    .required()
    .min(3)
    .max(20)
    .messages({
      "string.min": "El apellido debe tener al menos 3 caracteres.",
      "string.max": "El apellido debe tener un máximo de 20 caracteres.",
      'string.empty': 'El apellido no puede estar vacío.',
      'any.required': 'Se requiere un apellido'
  }),
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
    .min(8)
    .max(20)
    .messages({
    "string.min": "La contraseña debe tener al menos 8 caracteres",
    "string.max": "La contraseña debe tener un máximo de 20 caracteres", 
    'string.empty': 'La contraseña no puede estar vacía',
    'any.required': 'Se requiere una contraseña',
  })
});

export default schema;