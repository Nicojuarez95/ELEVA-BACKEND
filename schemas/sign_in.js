import Joi from "joi-oid";

const schema_signin = Joi.object({
  email: Joi.string()
    .required()
    .email({ minDomainSegments: 2 })
    .messages({
      'string.empty': 'El correo electrónico no puede estar vacío',
      'any.required': 'Se requiere un correo electrónico',
    }),
  password: Joi
    .string()
    .required()
    .messages({
      'string.empty': 'La contraseña no puede estar vacía',
      'any.required': 'Se requiere una contraseña',
    })
});

export default schema_signin;