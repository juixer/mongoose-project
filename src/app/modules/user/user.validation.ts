import Joi from 'joi';

const userValidationSchema = Joi.object({
  password: Joi.string().max(19).optional().messages({
    'string.base': 'Password must be a string',
    'string.max': 'Password cannot be more than 20 characters',
  }), // Password cannot be 20 characters
});

export const userValidation= {
    userValidationSchema
};
